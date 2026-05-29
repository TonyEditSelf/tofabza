import { NextResponse } from "next/server";

const ADMIN_ENTRY_COOKIE = "tofabza-admin-entry";

function clearAdminCookies(request, response) {
  request.cookies.getAll().forEach((cookie) => {
    if (
      cookie.name === ADMIN_ENTRY_COOKIE ||
      cookie.name.startsWith("next-auth.") ||
      cookie.name.startsWith("__Secure-next-auth.") ||
      cookie.name.startsWith("__Host-next-auth.")
    ) {
      response.cookies.delete(cookie.name);
    }
  });
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin") || pathname.startsWith("/admin-auth")) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  clearAdminCookies(request, response);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|videos).*)"],
};
