import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('token');

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  return NextResponse.next();
}

// Specify which paths the middleware should run on
export const config = {
  matcher: [ '/admin/:path*'], // Protect all routes under /user/ and /admin/
};
