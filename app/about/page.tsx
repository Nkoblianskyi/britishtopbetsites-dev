import type { Metadata } from "next"
import {
  LegalPageLayout,
  LegalSection,
  LegalCallout,
  LegalCardGrid,
  LegalMiniCard,
} from "@/components/legal-page-layout"
import { SITE, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "About Us",
  description: `Who runs ${SITE.name}, how UK football bookmakers are reviewed, and how affiliate funding works.`,
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: `About Us | ${SITE.name}`,
    description: `Who runs ${SITE.name}, how UK football bookmakers are reviewed, and how affiliate funding works.`,
    url: `${SITE_URL}/about`,
  },
}

export default function AboutPage() {
  const updated = new Date().toLocaleDateString("en-GB", { month: "long", day: "numeric", year: "numeric" })

  return (
    <LegalPageLayout
      title="About Us"
      subtitle="The team behind the comparison table, our review rules, and why this site exists."
      updatedAt={updated}
      activePath="/about"
    >
      <LegalCallout variant="info" title="Quick facts">
        <p>
          {SITE.name} is a UK-focused publishing project. We compare licensed football sportsbooks for adults in Great
          Britain. We do not accept bets, hold balances, or settle wagers.
        </p>
      </LegalCallout>

      <LegalCardGrid cols={2}>
        <LegalMiniCard title="Licence check first">
          No operator appears in our main list without a current UK Gambling Commission licence for GB customers.
        </LegalMiniCard>
        <LegalMiniCard title="Hands-on testing">
          We register, deposit where needed for review, and use real apps. Not brochure copy from marketing PDFs.
        </LegalMiniCard>
        <LegalMiniCard title="Affiliate transparency">
          Referral fees may apply when you sign up via our links. Readers never pay a subscription to us.
        </LegalMiniCard>
        <LegalMiniCard title="Living documents">
          Rankings and offer blurbs are re-checked regularly because promotions and product features change overnight.
        </LegalMiniCard>
      </LegalCardGrid>

      <LegalSection number="1" title="Why we built this site">
        <p>
          British football punters deserve a straight answer: which bookmaker is worth an account for the way you bet?
          We built {SITE.domain} to collect UKGC-licensed brands in one ranked view, explain trade-offs without hype,
          and send you to official registration pages when you are ready.
        </p>
      </LegalSection>

      <LegalSection number="2" title="What we are and what we are not">
        <p>
          We are an editorial comparison publisher. We are not a gambling operator, payment agent, or dispute resolver.
          Customer service, KYC, withdrawals, and bet settlement always sit with the bookmaker you choose.
        </p>
      </LegalSection>

      <LegalSection number="3" title="Our review scorecard">
        <ul>
          <li>Regulatory status, account security, and safer-gambling tool depth</li>
          <li>Pre-match and in-play football markets across leagues and cups</li>
          <li>Odds competitiveness on representative markets (not one cherry-picked price)</li>
          <li>Welcome-offer clarity: wagering multiples, expiry, and excluded bet types</li>
          <li>Banking options, withdrawal experience, and helpdesk quality</li>
          <li>Mobile web and native app stability during busy kick-offs</li>
        </ul>
      </LegalSection>

      <LegalSection number="4" title="Funding without pay-to-win rankings">
        <p>
          Operators may pay us when you open an account through tracked links (CPA, revenue share, or blended deals). That
          income funds hosting and research time. It does not let a brand buy the #1 slot: the same scorecard applies to
          everyone in the table.
        </p>
        <p>
          If we ever run clearly labelled sponsored modules, they sit outside the core ranking logic and must still meet
          UK advertising standards, including 18+ warnings.
        </p>
      </LegalSection>

      <LegalCallout variant="warning" title="Play within your limits">
        <p>
          Betting is paid entertainment, not a salary. Use limits, take breaks, and seek free help if control slips. 18+
          UK only. GambleAware and GamCare links are in our footer.
        </p>
      </LegalCallout>
    </LegalPageLayout>
  )
}
