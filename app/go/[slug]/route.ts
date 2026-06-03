import { NextResponse, type NextRequest } from "next/server"
import { affiliateLinks } from "../../../data/mock-data"

// GET /go/<slug>  →  302 redirect to the affiliate URL (QualityBoost / Keitaro)
// Keitaro then applies its own routing and forwards the user to the final product site.
// All affiliate URLs are maintained in `data/mock-data.ts` (affiliateLinks map).
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug: rawSlug } = await params
  const slug = rawSlug?.toLowerCase()
  const target = slug ? affiliateLinks[slug] : undefined

  if (!target) {
    return NextResponse.redirect(new URL("/", req.url), { status: 302 })
  }

  return NextResponse.redirect(target, { status: 302 })
}
