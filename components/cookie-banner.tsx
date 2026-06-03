"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { PitchButton } from "./pitch-ui"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-3 left-3 right-3 z-50 mx-auto max-w-md sm:left-auto sm:right-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div className="ui-modal animate-slide-up">
        <div className="ui-modal-header">
          <span id="cookie-banner-title" className="ui-modal-title">
            Cookie preferences
          </span>
        </div>
        <div className="space-y-4 p-4 sm:p-5">
          <p id="cookie-banner-desc" className="text-sm leading-relaxed text-[var(--ui-muted)]">
            We use cookies to remember your choices and measure site traffic. Essential cookies always run. Analytics
            and affiliate tags load only if you tap{" "}
            <strong className="text-[var(--ui-text)]">Accept all</strong>.
          </p>
          <p className="text-sm">
            <Link href="/privacy-policy" className="ui-link">
              Privacy Policy
            </Link>
            {" · "}
            <Link href="/cookie-policy" className="ui-link">
              Cookie Policy
            </Link>
          </p>
          <div className="flex flex-wrap justify-end gap-2">
            <PitchButton onClick={handleDecline} aria-label="Accept essential cookies only">
              Essential only
            </PitchButton>
            <PitchButton onClick={handleAccept} primary aria-label="Accept all cookies including analytics">
              Accept all
            </PitchButton>
          </div>
        </div>
      </div>
    </div>
  )
}
