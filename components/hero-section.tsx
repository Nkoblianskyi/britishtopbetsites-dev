"use client"

import { PitchFrame } from "./pitch-ui"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const monthYear = new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })

  const trustItems = ["Licence", "Security", "18+"]

  return (
    <PitchFrame title={`UK betting site rankings · ${monthYear}`} className="mb-2">
      <div className="pitch-hero-bg relative px-5 py-5 sm:px-6 sm:py-6">
        <div className="pitch-center-circle hidden sm:block" aria-hidden="true" />

        <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0 flex-1">
            <h1 className="font-display text-lg font-semibold uppercase leading-snug tracking-wide sm:text-xl">
              Best betting sites in Great Britain, ranked
            </h1>
            <p className="mt-2 max-w-xl text-xs leading-relaxed sm:text-sm">
              Independent ratings of UKGC-licensed bookmakers. Compare welcome offers, odds, payments, and safer gambling
              tools before you open an account.
            </p>
            <p className="hero-meta mt-1.5 text-[11px] leading-snug sm:text-xs">
              Updated {monthYear} · UK adults 18+ only
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:shrink-0" role="list" aria-label="Trust indicators">
            {trustItems.map((label) => (
              <span key={label} className="ui-badge ui-badge-gold !px-2.5 !py-1 !text-[10px] sm:!text-[11px]" role="listitem">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="ui-disclosure-bar mt-2 p-2.5">
        <p className="text-[10px] leading-snug text-[var(--ui-muted)] sm:text-[11px]">
          18+ · Wagering applies.{" "}
          <button
            type="button"
            onClick={onAdvertiserModalOpen}
            className="ui-link text-[10px] sm:text-[11px]"
            aria-label="Open how we are funded disclosure"
          >
            How we earn
          </button>
          {" · "}
          <button
            type="button"
            onClick={onTermsModalOpen}
            className="ui-link text-[10px] sm:text-[11px]"
            aria-label="Open site rules summary"
          >
            Site rules
          </button>
        </p>
      </div>
    </PitchFrame>
  )
}
