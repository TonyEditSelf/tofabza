import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const ADMIN_ENTRY_COOKIE = "tofabza-admin-entry";

function getRequestOrigin(request) {
  const url = new URL(request.url);
  const forwardedHost = request.headers.get("x-forwarded-host");
  const forwardedProto = request.headers.get("x-forwarded-proto");

  if (forwardedHost) {
    url.host = forwardedHost;
  }

  if (forwardedProto) {
    url.protocol = `${forwardedProto}:`;
  }

  if (url.hostname === "0.0.0.0") {
    url.hostname = "localhost";
  }

  return url.origin;
}

function getRedirectUrl(request, path) {
  return new URL(path, getRequestOrigin(request));
}

export async function GET(request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.redirect(getRedirectUrl(request, "/admin-auth/login"));
  }

  const response = NextResponse.redirect(getRedirectUrl(request, "/admin"));
  response.cookies.set(ADMIN_ENTRY_COOKIE, "active", {
    httpOnly: true,
    maxAge: 60 * 60,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
