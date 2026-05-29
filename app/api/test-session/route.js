import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { getToken } from 'next-auth/jwt';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET(request) {
  const session = await getServerSession(authOptions);

  let token = null;
  let tokenError = null;
  try {
    token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });
  } catch (error) {
    tokenError = error.message;
  }

  const cookieNames = request.cookies.getAll().map((cookie) => cookie.name);
  const nextAuthCookieNames = cookieNames.filter((name) =>
    name.toLowerCase().includes('next-auth'),
  );
  const nextAuthUrl = process.env.NEXTAUTH_URL || null;
  const nextAuthOrigin = nextAuthUrl ? new URL(nextAuthUrl).origin : null;

  return NextResponse.json({
    session,
    token: token
      ? {
          email: token.email,
          id: token.id,
          role: token.role,
          dbHydrated: token.dbHydrated,
        }
      : null,
    tokenError,
    diagnostics: {
      hasNextAuthSecret: Boolean(process.env.NEXTAUTH_SECRET),
      hasNextAuthUrl: Boolean(process.env.NEXTAUTH_URL),
      nextAuthOrigin,
      hasGoogleClientId: Boolean(
        process.env.GOOGLE_CLIENT_ID ||
          process.env.AUTH_GOOGLE_ID ||
          process.env.GOOGLE_ID,
      ),
      hasGoogleClientSecret: Boolean(
        process.env.GOOGLE_CLIENT_SECRET ||
          process.env.AUTH_GOOGLE_SECRET ||
          process.env.GOOGLE_SECRET,
      ),
      hasMongoUrl: Boolean(process.env.MONGO_URL),
      host: request.headers.get('host'),
      forwardedProto: request.headers.get('x-forwarded-proto'),
      nextAuthCookieNames,
      cookieCount: cookieNames.length,
    },
  });
}
