import Link from "next/link"
import Image from "next/image"
import { SITE } from "@/lib/site"
import { PitchFrame, SaferGamblingLogos } from "./pitch-ui"

export function Footer() {
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/responsible-gaming", label: "Safer play" },
    { href: "/cookie-policy", label: "Cookies" },
    { href: "/privacy-policy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ]

  return (
    <footer className="mt-4" role="contentinfo">
      <PitchFrame title="Safer gambling and legal notice">
        <div className="space-y-4">
          <section aria-labelledby="footer-support-heading">
            <h3 id="footer-support-heading" className="mb-2 font-display text-xs font-semibold uppercase tracking-widest text-[var(--ui-accent)]">
              Support organisations
            </h3>
            <SaferGamblingLogos />
          </section>

          <hr className="ui-divider" />

          <div
            className="ui-surface max-h-36 overflow-y-auto p-3 text-xs leading-relaxed text-[var(--ui-muted)]"
            tabIndex={0}
            aria-label="Legal disclaimer"
          >
            <p>
              Content on {SITE.domain} is for UK adults aged 18 and over. We compare licensed bookmakers but do not
              operate gambling products, hold player funds, or settle wagers.
            </p>
            <p className="mt-2">
              Rankings reflect editorial scores at the time of review. Promotions change quickly. Always confirm the
              latest offer on the operator&apos;s official site before you deposit.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 py-2">
            <Link href="/" className="flex items-center gap-2 no-underline" aria-label={`Return to ${SITE.name} homepage`}>
              <div className="ui-surface-inset flex h-10 w-10 items-center justify-center p-1">
                <Image src={SITE.logo} alt="" width={32} height={32} aria-hidden="true" />
              </div>
              <span className="font-display text-sm font-semibold uppercase tracking-wide text-[var(--ui-accent)]">
                {SITE.name}
              </span>
            </Link>
          </div>

          <nav className="flex flex-wrap justify-center gap-2" aria-label="Legal and information pages">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="ui-btn min-w-0 px-3 py-1.5 text-xs no-underline">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ui-footer-strip rounded-b-lg">
            <span>© {new Date().getFullYear()} {SITE.domain}</span>
            <span className="font-semibold text-[var(--ui-red)]">18+ · UK · BeGambleAware.org</span>
          </div>
        </div>
      </PitchFrame>
    </footer>
  )
}
