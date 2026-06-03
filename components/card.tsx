"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import type { BettingSite } from "../types"
import Link from "next/link"
import { PitchFrame } from "./pitch-ui"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

export function Card({ site, rank }: SiteCardProps) {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false)
  const [showReadMore, setShowReadMore] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const isTopPick = rank === 1

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const limit = isMobile ? 200 : 340
    setShowReadMore(site.terms.length > limit)
  }, [site.terms, isMobile])

  const formatVotes = (votes: number) => votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  const filledStars = Math.floor(site.rating)
  const hasHalfStar = site.rating % 1 !== 0

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsTermsExpanded(!isTermsExpanded)
  }

  const badgeText = rank === 1 ? "Top pick" : rank === 2 ? "Hot deal" : ""

  const starsRow = (
    <div className="flex flex-col items-center">
      <div className="flex gap-0.5" role="img" aria-label={`${site.rating.toFixed(1)} out of 5 stars from ${formatVotes(site.votes)} votes`}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
              i < filledStars || (i === filledStars && hasHalfStar)
                ? "fill-[var(--ui-gold)] text-[var(--ui-gold)]"
                : "text-gray-300"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
      <span className="mt-0.5 text-[10px] text-[var(--ui-muted)]">({formatVotes(site.votes)} votes)</span>
    </div>
  )

  const termsBlock = (
    <div className="ui-footer-strip rounded-b-lg border-t-0">
      <div className="w-full text-[10px] leading-snug text-[var(--ui-muted)]">
        <div className={`${!isTermsExpanded ? "line-clamp-2" : ""}`}>{site.terms}</div>
        {showReadMore && (
          <button
            type="button"
            onClick={handleTermsClick}
            className="ui-link mt-1 text-[10px]"
            aria-expanded={isTermsExpanded}
            aria-label={isTermsExpanded ? "Collapse full terms" : "Expand full terms"}
          >
            {isTermsExpanded ? "Show less" : "Show full terms"}
          </button>
        )}
      </div>
    </div>
  )

  const panelTitle = `#${rank} ${site.name}${badgeText ? ` · ${badgeText}` : ""}`

  const bonusMainClass =
    "font-display font-bold leading-tight text-[var(--ui-text)] text-[28px] sm:text-[32px] lg:text-[36px]"
  const bonusSubClass =
    "font-display font-semibold leading-tight text-[var(--ui-accent)] text-lg sm:text-xl lg:text-2xl"

  return (
    <article
      className={`block ${isTopPick ? "rounded-[10px] ring-2 ring-[var(--ui-gold)] ring-offset-2 ring-offset-transparent" : ""}`}
      aria-label={`${site.name} ranked number ${rank}`}
    >
      {rank === 1 && (
        <div className="ui-table-header mb-1 gap-0">
          <span className="w-[26%] text-center">Operator</span>
          <span className="w-[30%] text-center">Welcome offer</span>
          <span className="w-[16%] text-center">User score</span>
          <span className="w-[10%] text-center">Rating</span>
          <span className="w-[18%] text-center">Action</span>
        </div>
      )}

      <PitchFrame title={panelTitle} className="mb-3">
        <Link
          href={site.link}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="hidden cursor-pointer no-underline lg:block"
          aria-label={`Claim ${site.welcomeOffer} at ${site.name}`}
        >
          <div className="flex min-h-[140px] items-stretch overflow-hidden rounded-md border border-[var(--ui-border)]">
            <div className="flex w-[26%] items-center justify-center bg-[var(--ui-cream)] p-3">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={`${site.name} logo`}
                className="max-h-[72px] w-full max-w-[160px] object-contain"
              />
            </div>
            <div className="flex w-[30%] flex-col justify-center border-l border-[var(--ui-border)] px-2 py-3 text-center">
              <span className="font-display text-[10px] font-semibold uppercase tracking-widest text-[var(--ui-muted)]">
                Welcome bonus
              </span>
              <p className={`mt-1 ${bonusMainClass}`}>{site.bonus}</p>
              <p className={`mt-0.5 ${bonusSubClass}`}>{site.welcomeOffer}</p>
            </div>
            <div className="flex w-[16%] flex-col items-center justify-center border-l border-[var(--ui-border)] p-2">
              {starsRow}
            </div>
            <div className="flex w-[10%] shrink-0 items-center justify-center border-l border-[var(--ui-border)] bg-green-50/60">
              <span className="font-display text-4xl font-semibold leading-none text-[var(--ui-accent)]">
                {site.rating.toFixed(1)}
              </span>
            </div>
            <div className="flex w-[18%] flex-col items-center justify-center gap-1 border-l border-[var(--ui-border)] p-2">
              <span className="ui-btn ui-btn-primary w-full max-w-[130px] text-center text-xs font-semibold">
                Get bonus
              </span>
              <span className="text-[10px] text-[var(--ui-muted)] underline">Visit {site.name}</span>
            </div>
          </div>
        </Link>

        <Link
          href={site.link}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="hidden cursor-pointer no-underline md:block lg:hidden"
          aria-label={`Claim ${site.welcomeOffer} at ${site.name}`}
        >
          <div className="grid grid-cols-2 overflow-hidden rounded-md border border-[var(--ui-border)]">
            <div className="flex items-center justify-center bg-[var(--ui-cream)] p-3">
              <img src={site.logo || "/placeholder.svg"} alt={`${site.name} logo`} className="max-h-16 object-contain" />
            </div>
            <div className="border-l border-[var(--ui-border)] p-2 text-center">
              <span className="font-display text-[10px] font-semibold uppercase text-[var(--ui-muted)]">Offer</span>
              <p className={bonusMainClass}>{site.bonus}</p>
              <p className={bonusSubClass}>{site.welcomeOffer}</p>
            </div>
            <div className="flex items-center justify-center gap-4 border-t border-[var(--ui-border)] p-3">
              {starsRow}
              <span className="font-display text-3xl font-semibold text-[var(--ui-accent)]">{site.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center justify-center border-l border-t border-[var(--ui-border)] p-3">
              <span className="ui-btn ui-btn-primary font-semibold">Get bonus</span>
            </div>
          </div>
        </Link>

        <Link
          href={site.link}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block cursor-pointer no-underline md:hidden"
          aria-label={`Claim ${site.welcomeOffer} at ${site.name}`}
        >
          <div className="flex flex-col overflow-hidden rounded-md border border-[var(--ui-border)]">
            {badgeText && (
              <div className="bg-[var(--ui-accent)] px-2 py-1 text-center font-display text-[10px] font-semibold uppercase tracking-wider text-[var(--ui-cream)]">
                {badgeText}
              </div>
            )}
            <div className="bg-[var(--ui-cream)] px-2 py-3 text-center">
              <span className="font-display text-[10px] font-semibold uppercase tracking-widest text-[var(--ui-muted)]">
                Welcome offer
              </span>
              <p className={`mt-1 ${bonusMainClass}`}>{site.bonus}</p>
              <p className={`mt-0.5 ${bonusSubClass}`}>{site.welcomeOffer}</p>
            </div>
            <div className="flex items-center justify-center bg-white py-4">
              <img src={site.logo || "/placeholder.svg"} alt={`${site.name} logo`} className="h-14 object-contain" />
            </div>
            <div className="grid grid-cols-2 border-t border-[var(--ui-border)]">
              <div className="flex flex-col items-center justify-center border-r border-[var(--ui-border)] py-3">
                {starsRow}
              </div>
              <div className="flex flex-col items-center justify-center bg-green-50/60 py-3">
                <span className="font-display text-3xl font-semibold leading-none text-[var(--ui-accent)]">
                  {site.rating.toFixed(1)}
                </span>
                <span className="font-display text-[10px] font-semibold uppercase text-[var(--ui-muted)]">Our score</span>
              </div>
            </div>
            <div className="border-t border-[var(--ui-border)] p-2">
              <span className="ui-btn ui-btn-primary block w-full text-center text-sm font-semibold">Claim offer</span>
            </div>
          </div>
        </Link>

        {termsBlock}
      </PitchFrame>
    </article>
  )
}
