import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SITE_HOST = "doxocollective.com";

/**
 * Enforce canonical host (non-www) at the edge.
 * Trailing-slash normalization is handled by next.config trailingSlash: true.
 */
export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") || "").toLowerCase().split(":")[0];

  if (host === `www.${SITE_HOST}`) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = SITE_HOST;
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except static assets and Next internals.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
