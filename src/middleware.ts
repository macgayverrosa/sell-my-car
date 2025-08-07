import { auth } from "@/auth"
import { NextResponse } from 'next/server'

export default auth((req) => {
  // If the user is not authenticated, redirect them to the sign-in page.
  if (!req.auth) {
    const signInUrl = new URL('/sign-in', req.nextUrl.origin)
    return NextResponse.redirect(signInUrl)
  }
})

// Your config remains the same.
export const config = {
  matcher: ["/portal/:path*"],
}