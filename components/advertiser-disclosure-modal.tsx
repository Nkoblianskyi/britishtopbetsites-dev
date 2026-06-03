"use client"

import { SITE } from "@/lib/site"
import { PitchButton, ModalCloseButton } from "./pitch-ui"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosureModal({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="funding-title">
      <button type="button" className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={onClose} aria-label="Close funding disclosure" />
      <div className="ui-modal relative flex max-h-[90vh] w-full max-w-lg flex-col">
        <div className="ui-modal-header shrink-0">
          <h2 id="funding-title" className="ui-modal-title">How we are funded</h2>
          <ModalCloseButton onClick={onClose} label="Close funding disclosure" />
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-5 text-sm leading-relaxed text-[var(--ui-muted)]">
          <p>
            {SITE.name} is a free comparison guide for UK adults. When you register with a bookmaker through our links,
            that operator may pay us a referral fee. You never pay us directly.
          </p>
          <p>
            Commissions do not buy placement. Scores come from the same checklist for every brand: UKGC licence, safer
            gambling tools, football odds depth, payments, support, and bonus transparency.
          </p>
          <p>
            Sponsored slots, if any, are labelled separately and must still meet UK advertising rules, including 18+
            messaging.
          </p>
          <p className="font-medium text-[var(--ui-red)]">18+ · UK residents · Confirm every offer on the operator&apos;s site.</p>
        </div>
        <div className="flex justify-end border-t border-[var(--ui-border)] p-4">
          <PitchButton onClick={onClose} primary>
            OK
          </PitchButton>
        </div>
      </div>
    </div>
  )
}
