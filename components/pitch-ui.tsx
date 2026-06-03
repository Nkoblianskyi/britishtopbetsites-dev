import type { ReactNode } from "react"
import Link from "next/link"

interface PitchFrameProps {
  title?: string
  children: ReactNode
  className?: string
  noHeading?: boolean
  compact?: boolean
}

export function PitchFrame({ title, children, className = "", noHeading, compact }: PitchFrameProps) {
  return (
    <section className={`ui-panel ${className}`}>
      {title && !noHeading && (
        <h2 className={`ui-panel-heading ${compact ? "!py-2 !px-3 !text-[13px]" : ""}`}>{title}</h2>
      )}
      <div
        className={
          title && !noHeading
            ? compact
              ? "px-3 pb-3 pt-2"
              : "ui-panel-body"
            : compact
              ? "p-3"
              : "p-4 sm:p-5"
        }
      >
        {children}
      </div>
    </section>
  )
}

/** @deprecated Use PitchFrame */
export const WinWindow = PitchFrame

interface PitchButtonProps {
  children: ReactNode
  onClick?: () => void
  type?: "button" | "submit"
  className?: string
  primary?: boolean
}

export function PitchButton({ children, onClick, type = "button", className = "", primary }: PitchButtonProps) {
  return (
    <button type={type} onClick={onClick} className={`ui-btn ${primary ? "ui-btn-primary" : ""} ${className}`}>
      {children}
    </button>
  )
}

/** @deprecated Use PitchButton */
export const WinButton = PitchButton

export function ModalCloseButton({ onClick, label = "Close dialog" }: { onClick: () => void; label?: string }) {
  return (
    <button type="button" onClick={onClick} className="ui-modal-close" aria-label={label}>
      ×
    </button>
  )
}

interface SaferGamblingLogosProps {
  compact?: boolean
  className?: string
}

const ORGS = [
  { href: "https://www.gambleaware.org/", src: "/gamble.webp", alt: "GambleAware safer gambling support" },
  { href: "https://www.gamcare.org.uk/", src: "/gamecare.svg", alt: "GamCare counselling and advice" },
  { href: "https://www.gordonmoody.org.uk/", src: "/gordon.png", alt: "Gordon Moody residential treatment" },
  { href: "https://www.gamblersanonymous.org.uk/", src: "/anonymos.avif", alt: "Gamblers Anonymous UK meetings" },
  { href: "https://www.gamstop.co.uk/", src: "/gamstop.svg", alt: "GamStop multi-operator self-exclusion" },
  { href: "https://www.egba.eu/", src: "/egba.png", alt: "European Gaming and Betting Association" },
]

export function SaferGamblingLogos({ compact, className = "" }: SaferGamblingLogosProps) {
  return (
    <div
      role="list"
      aria-label="Safer gambling support organisations"
      className={`flex flex-wrap items-center justify-center ${compact ? "gap-1.5" : "gap-2 sm:gap-3"} ${className}`}
    >
      {ORGS.map((org) => (
        <Link
          key={org.alt}
          href={org.href}
          target="_blank"
          rel="noopener noreferrer"
          className="ui-logo-chip"
          title={org.alt}
          role="listitem"
          aria-label={`Visit ${org.alt} (opens in new tab)`}
        >
          <img
            src={org.src}
            alt=""
            aria-hidden="true"
            className={compact ? "h-5 max-w-[52px] object-contain" : "h-7 max-w-[72px] object-contain sm:h-8"}
          />
        </Link>
      ))}
    </div>
  )
}
