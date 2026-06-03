import type { Metadata } from "next"
import Link from "next/link"
import {
  LegalPageLayout,
  LegalSection,
  LegalCallout,
  LegalCardGrid,
  LegalMiniCard,
  LegalHelpline,
} from "@/components/legal-page-layout"
import { SITE, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Responsible Gaming",
  description: `Safer gambling tools, warning signs, and UK support from ${SITE.name}.`,
  alternates: { canonical: `${SITE_URL}/responsible-gaming` },
  openGraph: {
    title: `Responsible Gaming | ${SITE.name}`,
    description: `Safer gambling tools, warning signs, and UK support from ${SITE.name}.`,
    url: `${SITE_URL}/responsible-gaming`,
  },
}

const supportOrgs = [
  { name: "GambleAware", url: "https://www.gambleaware.org/", site: "begambleaware.org", phone: "0808 8020 133" },
  { name: "GamCare", url: "https://www.gamcare.org.uk/", site: "gamcare.org.uk", phone: "0808 8020 133" },
  { name: "Gamblers Anonymous", url: "https://www.gamblersanonymous.org.uk/", site: "gamblersanonymous.org.uk", phone: "Find a meeting" },
  { name: "Gordon Moody", url: "https://www.gordonmoody.org.uk/", site: "gordonmoody.org.uk", phone: "01384 241292" },
]

export default function ResponsibleGamingPage() {
  const updated = new Date().toLocaleDateString("en-GB", { month: "long", day: "numeric", year: "numeric" })

  return (
    <LegalPageLayout
      title="Responsible Gaming"
      subtitle="Practical habits, warning signs, and free UK help if betting stops feeling optional."
      updatedAt={updated}
      activePath="/responsible-gaming"
    >
      <LegalCallout variant="warning" title="Read this first">
        <p>
          Gambling should stay a choice you are comfortable with. It is not a fix for money worries or stress. If you feel
          pressure to keep playing, pause immediately and talk to someone trained to help. Support is free and
          confidential.
        </p>
      </LegalCallout>

      <LegalHelpline phone="0808 8020 133" />

      <LegalCardGrid cols={3}>
        <LegalMiniCard title="Time boxing">
          Decide your session length before you log in. Alarms on your phone work better than willpower at midnight.
        </LegalMiniCard>
        <LegalMiniCard title="Money ceiling">
          Only stake what you could lose on a night out. Never use credit cards or loans to fund a bet.
        </LegalMiniCard>
        <LegalMiniCard title="No chasing">
          Losses are the price of entertainment, not a debt to recover. Chasing usually deepens the hole.
        </LegalMiniCard>
      </LegalCardGrid>

      <LegalSection number="1" title="Tools available on licensed UK sites">
        <ul>
          <li>Deposit, loss, and wager limits you set yourself</li>
          <li>Cooling-off periods and product blocks (e.g. casino-only exclusion)</li>
          <li>Reality checks and session timers</li>
          <li>Self-exclusion, including multi-operator schemes such as GamStop in Great Britain</li>
          <li>Direct links to recognised support charities in account menus</li>
        </ul>
      </LegalSection>

      <LegalSection number="2" title="When to worry">
        <ul>
          <li>You bet longer or spend more than you planned</li>
          <li>Gambling feels like the only way to cope with mood or money stress</li>
          <li>You hide activity from people close to you</li>
          <li>You borrow, sell items, or skip bills to keep playing</li>
          <li>Work, study, or family life suffers because of betting time</li>
        </ul>
      </LegalSection>

      <LegalSection number="3" title="UK organisations (opens in a new tab)">
        <div className="grid gap-2 sm:grid-cols-2">
          {supportOrgs.map((org) => (
            <Link
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ui-surface-inset block bg-white p-3 no-underline transition-colors hover:bg-green-50/80"
              aria-label={`Visit ${org.name} at ${org.site} (opens in new tab)`}
            >
              <h3 className="font-display font-bold text-[var(--ui-accent)]">{org.name}</h3>
              <p className="text-[11px] text-black">{org.site}</p>
              <p className="mt-1 text-[11px] font-bold text-black">{org.phone}</p>
            </Link>
          ))}
        </div>
      </LegalSection>

      <LegalSection number="4" title="Advice for friends and family">
        <ul>
          <li>Listen without blame. Problem gambling is a health issue, not a moral failing</li>
          <li>Encourage professional help. You cannot gamble someone &ldquo;straight&rdquo;</li>
          <li>Protect household finances. Do not pay debts or lend money to fund play</li>
          <li>Look after your own wellbeing. Carer support lines exist too</li>
        </ul>
      </LegalSection>

      <LegalCallout variant="info" title={`Our pledge at ${SITE.shortName}`}>
        <p>
          We only list UKGC-licensed operators that must provide recognised safer-gambling controls. We display 18+
          warnings prominently. When the fun stops, stop.
        </p>
      </LegalCallout>
    </LegalPageLayout>
  )
}
