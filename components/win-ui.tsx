import type { ReactNode } from "react"
import Link from "next/link"

interface WinWindowProps {
  title?: string
  children: ReactNode
  className?: string
  /** @deprecated no-op — kept for compatibility */
  titleBarClassName?: string
  /** @deprecated no-op */
  inactive?: boolean
  noHeading?: boolean
  compact?: boolean
}

/** Clean panel (Win7 / macOS style) — no OS window chrome */
export function WinWindow({ title, children, className = "", noHeading, compact }: WinWindowProps) {
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

interface WinButtonProps {
  children: ReactNode
  onClick?: () => void
  type?: "button" | "submit"
  className?: string
  primary?: boolean
}

export function WinButton({ children, onClick, type = "button", className = "", primary }: WinButtonProps) {
  return (
    <button type={type} onClick={onClick} className={`ui-btn ${primary ? "ui-btn-primary" : ""} ${className}`}>
      {children}
    </button>
  )
}

export function ModalCloseButton({ onClick, label = "Close" }: { onClick: () => void; label?: string }) {
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
  { href: "https://www.gambleaware.org/", src: "/gamble.webp", alt: "GambleAware" },
  { href: "https://www.gamcare.org.uk/", src: "/gamecare.svg", alt: "GamCare" },
  { href: "https://www.gordonmoody.org.uk/", src: "/gordon.png", alt: "Gordon Moody" },
  { href: "https://www.gamblersanonymous.org.uk/", src: "/anonymos.avif", alt: "Gamblers Anonymous" },
  { href: "https://www.gamstop.co.uk/", src: "/gamstop.svg", alt: "GamStop" },
  { href: "https://www.egba.eu/", src: "/egba.png", alt: "EGBA" },
]

export function SaferGamblingLogos({ compact, className = "" }: SaferGamblingLogosProps) {
  return (
    <div
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
        >
          <img
            src={org.src}
            alt={org.alt}
            className={compact ? "h-5 max-w-[52px] object-contain" : "h-7 max-w-[72px] object-contain sm:h-8"}
          />
        </Link>
      ))}
    </div>
  )
}
