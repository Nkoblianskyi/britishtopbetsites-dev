"use client"

import Link from "next/link"
import { SITE } from "@/lib/site"
import { PitchButton, ModalCloseButton } from "./pitch-ui"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="rules-title">
      <button type="button" className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={onClose} aria-label="Close site rules summary" />
      <div className="ui-modal relative flex max-h-[90vh] w-full max-w-lg flex-col">
        <div className="ui-modal-header shrink-0">
          <h2 id="rules-title" className="ui-modal-title">Site rules (summary)</h2>
          <ModalCloseButton onClick={onClose} label="Close site rules summary" />
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-5 text-sm leading-relaxed text-[var(--ui-muted)]">
          <p>Using {SITE.domain} means you accept our house rules. You must be 18 or older and located in the UK.</p>
          <p>
            We publish information only. We are not a bookmaker. Offers may change. Check each operator&apos;s T&amp;Cs.
          </p>
          <p>
            <Link href="/terms" className="ui-link font-semibold" onClick={onClose}>
              Read full Terms &amp; Conditions →
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-[var(--ui-border)] p-4">
          <span className="text-xs text-[var(--ui-muted)]">18+ · Play responsibly</span>
          <PitchButton onClick={onClose} primary>
            OK
          </PitchButton>
        </div>
      </div>
    </div>
  )
}
