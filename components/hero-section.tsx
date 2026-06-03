"use client"

import { PitchFrame, SaferGamblingLogos } from "./pitch-ui"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const monthYear = new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })

  const trustItems = [
    { label: "UKGC", type: "flag" as const },
    { label: "18+", type: "age" as const },
    { label: "Fast pay*", type: "icon" as const, icon: "⚽" },
  ]

  return (
    <PitchFrame title={`Football rankings · ${monthYear}`} className="mb-2" compact>
      <div className="pitch-hero-bg relative px-4 py-3 sm:px-5 sm:py-4">
        <div className="pitch-center-circle hidden sm:block" aria-hidden="true" />

        <div className="relative z-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <div className="min-w-0 flex-1">
            <h1 className="font-display text-base font-semibold uppercase leading-snug tracking-wide text-[var(--ui-cream)] sm:text-lg">
              Top UK football betting sites, side by side
            </h1>
            <p className="mt-0.5 text-[11px] leading-snug text-[var(--ui-cream)]/80">
              UKGC-licensed bookmakers · Updated {monthYear}
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5" role="list" aria-label="Trust indicators">
            {trustItems.map((item) => (
              <span key={item.label} className="ui-badge ui-badge-gold !px-2 !py-0.5 !text-[10px]" role="listitem">
                {item.type === "flag" && (
                  <span aria-hidden="true" className="text-[10px]">
                    🇬🇧
                  </span>
                )}
                {item.type === "age" && (
                  <span aria-hidden="true" className="text-[8px] font-bold text-[var(--ui-red)]">
                    18+
                  </span>
                )}
                {item.type === "icon" && (
                  <span aria-hidden="true" className="text-[10px]">
                    {item.icon}
                  </span>
                )}
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="ui-surface mt-2 space-y-1.5 p-2">
        <p className="text-[10px] leading-snug text-[var(--ui-muted)]">
          18+ · Wagering applies.{" "}
          <button
            type="button"
            onClick={onAdvertiserModalOpen}
            className="ui-link text-[10px]"
            aria-label="Open how we are funded disclosure"
          >
            How we earn
          </button>
          {" · "}
          <button
            type="button"
            onClick={onTermsModalOpen}
            className="ui-link text-[10px]"
            aria-label="Open site rules summary"
          >
            Site rules
          </button>
        </p>
        <SaferGamblingLogos compact />
      </div>
    </PitchFrame>
  )
}
