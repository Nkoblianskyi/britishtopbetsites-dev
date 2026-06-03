import Link from "next/link"
import Image from "next/image"
import { SITE } from "@/lib/site"

export function Header() {
  return (
    <header className="ui-panel mb-3 mt-2" role="banner">
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4">
        <Link href="/" className="flex min-w-0 items-center gap-3 no-underline" aria-label={`${SITE.name} homepage`}>
          <div
            className="ui-surface-inset flex h-10 w-10 shrink-0 items-center justify-center sm:h-11 sm:w-11"
            aria-hidden="true"
          >
            <Image src={SITE.logo} alt="" width={40} height={40} className="h-full w-full object-contain" />
          </div>
          <div className="min-w-0">
            <p className="font-display truncate text-base font-semibold uppercase leading-tight tracking-wide text-[var(--ui-accent)] sm:text-lg">
              {SITE.name}
            </p>
            <p className="hidden text-xs text-[var(--ui-muted)] sm:block">
              {SITE.domain} · Football bookmaker guide
            </p>
          </div>
        </Link>

        <div
          role="img"
          aria-label="18 plus only. Adults in the UK."
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border-2 border-[var(--ui-red)] bg-white font-display text-[10px] font-bold text-[var(--ui-red)] sm:h-10 sm:w-10 sm:text-xs"
        >
          18+
        </div>
      </div>
    </header>
  )
}
