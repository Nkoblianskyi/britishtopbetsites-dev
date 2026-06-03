"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import Link from "next/link"
import type { BettingSite } from "../types"
import { PitchButton, ModalCloseButton } from "./pitch-ui"

interface TopOfferModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

export function Modal({ bettingSites }: TopOfferModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const site = bettingSites[0]

  useEffect(() => {
    const dismissed = sessionStorage.getItem("topOfferDismissed")
    if (dismissed) return
    const timer = setTimeout(() => setIsOpen(true), 6000)
    return () => clearTimeout(timer)
  }, [])

  const close = () => {
    sessionStorage.setItem("topOfferDismissed", "1")
    setIsOpen(false)
  }

  if (!isOpen || !site) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="top-offer-title"
      aria-describedby="top-offer-desc"
    >
      <button type="button" className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={close} aria-label="Close top offer dialog" />

      <div className="ui-modal relative w-full max-w-md animate-fade-in">
        <div className="ui-modal-header">
          <div>
            <p className="text-[10px] font-display uppercase tracking-widest text-white/80">Editor&apos;s top pick</p>
            <h2 id="top-offer-title" className="ui-modal-title">
              {site.name} welcome offer
            </h2>
          </div>
          <ModalCloseButton onClick={close} label="Close top offer dialog" />
        </div>

        <div className="space-y-4 p-5 text-center">
          <span className="ui-badge ui-badge-gold">Today&apos;s #1 ranked site</span>

          <div className="pitch-hero-bg mx-auto max-w-[220px] rounded-md p-4">
            <img
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} logo`}
              className="mx-auto h-12 w-full object-contain sm:h-14"
            />
          </div>

          <div id="top-offer-desc" className="ui-surface rounded-lg px-4 py-6 text-center">
            <p className="font-display text-3xl font-bold leading-tight text-[var(--ui-text)] sm:text-4xl">{site.bonus}</p>
            <p className="mt-2 font-display text-lg font-semibold uppercase tracking-wide text-[var(--ui-accent)] sm:text-xl">
              {site.welcomeOffer}
            </p>
            <div className="mt-3 flex justify-center gap-0.5" role="img" aria-label={`${site.rating.toFixed(1)} out of 5 stars`}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[var(--ui-gold)] text-[var(--ui-gold)]" aria-hidden="true" />
              ))}
            </div>
          </div>

          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer sponsored"
            onClick={close}
            className="ui-btn ui-btn-primary block w-full text-center text-sm font-semibold no-underline"
            aria-label={`View ${site.welcomeOffer} at ${site.name}`}
          >
            View offer
          </Link>

          <p className="text-left text-[10px] leading-snug text-[var(--ui-muted)]">{site.terms}</p>
          <p className="text-xs font-medium text-[var(--ui-red)]">
            18+ · T&amp;Cs apply ·{" "}
            <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="ui-link">
              BeGambleAware.org
            </a>
          </p>

          <PitchButton onClick={close} className="mx-auto">
            Not now
          </PitchButton>
        </div>
      </div>
    </div>
  )
}
