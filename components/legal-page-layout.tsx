import type { ReactNode } from "react"
import Link from "next/link"
import { PitchFrame } from "./pitch-ui"

const legalNav = [
  { href: "/about", label: "About us" },
  { href: "/responsible-gaming", label: "Safer play" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/cookie-policy", label: "Cookies" },
]

interface LegalPageLayoutProps {
  title: string
  subtitle?: string
  updatedAt?: string
  activePath: string
  children: ReactNode
}

export function LegalPageLayout({ title, subtitle, updatedAt, activePath, children }: LegalPageLayoutProps) {
  return (
    <div className="py-2">
      <PitchFrame noHeading className="mb-2 overflow-hidden">
        <nav className="ui-nav-pills" aria-label="Legal and information pages">
          <Link href="/" className="ui-nav-pill">
            ← Home
          </Link>
          {legalNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`ui-nav-pill ${activePath === item.href ? "ui-nav-pill-active" : ""}`}
              aria-current={activePath === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ui-panel-body border-b border-[var(--ui-border)]">
          <h1 className="font-display text-xl font-semibold uppercase tracking-wide text-[var(--ui-text)] sm:text-2xl">
            {title}
          </h1>
          {subtitle && <p className="mt-2 text-sm leading-relaxed text-[var(--ui-muted)]">{subtitle}</p>}
          {updatedAt && (
            <p className="mt-2 text-xs text-[var(--ui-muted)]">
              Last updated: <strong className="text-[var(--ui-text)]">{updatedAt}</strong>
            </p>
          )}
        </div>

        <div className="space-y-3 p-4 sm:p-5">{children}</div>
      </PitchFrame>
    </div>
  )
}

interface LegalSectionProps {
  id?: string
  number?: string
  title: string
  children: ReactNode
}

export function LegalSection({ id, number, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="ui-panel overflow-hidden">
      <h2 className="ui-panel-heading text-sm">
        {number ? `${number}. ` : ""}
        {title}
      </h2>
      <div className="ui-panel-body text-sm leading-relaxed text-[var(--ui-muted)] [&_a]:ui-link [&_li]:ml-4 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-[var(--ui-text)] [&_ul]:mt-2 [&_ul]:space-y-1">
        {children}
      </div>
    </section>
  )
}

interface LegalCalloutProps {
  variant?: "warning" | "info" | "success"
  title: string
  children: ReactNode
}

export function LegalCallout({ variant = "info", title, children }: LegalCalloutProps) {
  const styles = {
    warning: "border-l-[var(--ui-red)] bg-red-50",
    info: "border-l-[var(--ui-accent)] bg-green-50/80",
    success: "border-l-green-600 bg-green-50",
  }

  return (
    <div className={`rounded-lg border-l-4 p-4 ${styles[variant]}`} role="note">
      <h3 className="mb-2 font-display text-sm font-semibold uppercase tracking-wide text-[var(--ui-text)]">{title}</h3>
      <div className="text-sm leading-relaxed text-[var(--ui-muted)]">{children}</div>
    </div>
  )
}

interface LegalCardGridProps {
  children: ReactNode
  cols?: 2 | 3
}

export function LegalCardGrid({ children, cols = 2 }: LegalCardGridProps) {
  return <div className={`grid gap-3 ${cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>{children}</div>
}

interface LegalMiniCardProps {
  title: string
  children: ReactNode
}

export function LegalMiniCard({ title, children }: LegalMiniCardProps) {
  return (
    <div className="ui-surface p-4">
      <h3 className="mb-1 font-display text-sm font-semibold uppercase tracking-wide text-[var(--ui-accent)]">{title}</h3>
      <div className="text-sm leading-relaxed text-[var(--ui-muted)]">{children}</div>
    </div>
  )
}

interface LegalHelplineProps {
  phone: string
  label?: string
}

export function LegalHelpline({ phone, label = "National Gambling Helpline" }: LegalHelplineProps) {
  return (
    <div className="ui-panel overflow-hidden border-2 border-[var(--ui-gold)]">
      <h3 className="ui-panel-heading !border-b-[var(--ui-gold)]">{label}</h3>
      <div className="bg-[var(--ui-cream)] p-6 text-center">
        <p className="font-display text-2xl font-semibold tracking-wide text-[var(--ui-accent)] sm:text-3xl">
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="ui-link no-underline hover:underline">
            {phone}
          </a>
        </p>
        <p className="mt-2 text-xs text-[var(--ui-muted)]">Free · Confidential · 24/7 (Great Britain)</p>
      </div>
    </div>
  )
}
