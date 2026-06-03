"use client"

import Link from "next/link"
import { SITE } from "@/lib/site"
import { PitchFrame } from "./pitch-ui"

const pillars = [
  {
    title: "UKGC-only shortlist",
    text: "Every brand we list holds a valid UK Gambling Commission licence for Great Britain.",
  },
  {
    title: "Reader-first funding",
    text: "Operators may pay referral fees when you sign up. You never pay to browse our tables.",
  },
  {
    title: "One scorecard for all",
    text: "Rankings follow a single checklist: safety, football markets, value, payments, app quality, and bonus clarity.",
  },
]

export function AboutUs() {
  return (
    <div className="mt-4">
      <PitchFrame title={`About ${SITE.shortName}`}>
        <p className="mb-4 text-sm leading-relaxed text-[var(--ui-muted)]">
          We test UKGC-licensed football bookmakers, explain trade-offs in plain English, and link you to official
          sign-up pages when you are ready. Affiliate income funds the site. It does not buy top rankings.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="ui-surface p-3 sm:p-4">
              <h3 className="mb-1 font-display text-sm font-semibold uppercase tracking-wide text-[var(--ui-accent)]">
                {p.title}
              </h3>
              <p className="text-xs leading-relaxed text-[var(--ui-muted)] sm:text-sm">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-[var(--ui-border)] pt-4 sm:flex-row">
          <p className="text-center text-xs text-[var(--ui-muted)] sm:text-left">
            Methodology, funding, and editorial standards. Full write-up on our About page.
          </p>
          <Link href="/about" className="ui-btn ui-btn-primary text-sm font-semibold no-underline">
            Read more
          </Link>
        </div>
      </PitchFrame>
    </div>
  )
}
