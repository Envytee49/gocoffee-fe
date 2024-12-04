import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { fetchFromAPI } from "./utils/api";
import { useUserStore } from "./store/userStore";

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("access-token");

  // If no token, redirect to login
  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // If user is authenticated, proceed with the request
  return NextResponse.next();
}

// Match middleware only for protected routes
export const config = {
  matcher: ["/admin/:path*", "/saved/:path*", "/profile/:path*" ], // Adjust to your routes
};
