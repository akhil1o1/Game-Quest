import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isGameDetailsRoute = createRouteMatcher(["/games/(.*)"]);

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();

  // Protect the game details route, redirect to sign-in if unauthenticated
  if (isGameDetailsRoute(req) && !userId) {
    return auth().redirectToSignIn({ returnBackUrl: req.url });
  }

  // Allow all other requests to continue
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
``
