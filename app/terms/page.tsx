import type { Metadata } from "next"
import Link from "next/link"
import { LegalPageLayout, LegalSection, LegalCallout } from "@/components/legal-page-layout"
import { SITE, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Rules for using ${SITE.domain}, a UK betting site comparison website.`,
  alternates: { canonical: `${SITE_URL}/terms` },
  openGraph: {
    title: `Terms and Conditions | ${SITE.name}`,
    description: `Rules for using ${SITE.domain}, a UK betting site comparison website.`,
    url: `${SITE_URL}/terms`,
  },
}

export default function TermsPage() {
  const updated = new Date().toLocaleDateString("en-GB", { month: "long", day: "numeric", year: "numeric" })

  return (
    <LegalPageLayout
      title="Terms and Conditions"
      subtitle="House rules for browsing, linking out, and relying on our published comparisons."
      updatedAt={updated}
      activePath="/terms"
    >
      <LegalCallout variant="info" title="Agreement">
        <p>
          By visiting {SITE.url}, you agree to these terms. If you disagree, please leave the site. You must be at least
          18 years old and ordinarily resident in the United Kingdom unless we state otherwise on a specific page.
        </p>
      </LegalCallout>

      <LegalSection number="1" title="Parties and updates">
        <p>
          These terms are between you and the operator of {SITE.name}. We may revise them at any time. The revision date
          at the top of this page shows the version in force. Continued use after an update means you accept the new terms
          where the law allows.
        </p>
      </LegalSection>

      <LegalSection number="2" title="Service description">
        <p>
          We publish information, rankings, and outbound links to third-party bookmakers. We do not operate gambling
          products, process stakes, or store player wallets. Any bet you place is a contract between you and the chosen
          operator.
        </p>
      </LegalSection>

      <LegalSection number="3" title="Eligibility and your responsibilities">
        <p>
          Content is written for UK adults who may legally gamble online. Each operator applies its own ID checks,
          product blocks, and territorial rules. You are responsible for complying with applicable law and each
          bookmaker&apos;s terms before depositing.
        </p>
      </LegalSection>

      <LegalSection number="4" title="Accuracy and reliance">
        <p>
          We work hard to keep tables current, but bonuses, odds, and features change without warning. Operator websites and
          apps are the authoritative source. We are not liable for decisions you make based on summaries on{" "}
          {SITE.domain}.
        </p>
      </LegalSection>

      <LegalSection number="5" title="Affiliate links and third-party sites">
        <p>
          Outbound links may earn us referral income. Third-party sites have their own privacy policies, cookie practices,
          and terms. We are not responsible for their content, availability, or conduct.
        </p>
      </LegalSection>

      <LegalSection number="6" title="Safer gambling">
        <p>
          We support responsible play. Never chase losses or borrow to gamble. See our{" "}
          <Link href="/responsible-gaming">Safer play</Link> page for tools and helplines.
        </p>
      </LegalSection>

      <LegalSection number="7" title="Intellectual property">
        <p>
          Text, layout, logos, and graphics on {SITE.domain} are protected. Copying, scraping, or mirroring without written
          permission is prohibited except where fair dealing law explicitly allows.
        </p>
      </LegalSection>

      <LegalSection number="8" title="Limitation of liability">
        <p>
          To the maximum extent permitted by law, we exclude liability for indirect, incidental, or consequential losses
          arising from your use of this website or reliance on its content.
        </p>
      </LegalSection>

      <LegalSection number="9" title="Privacy and cookies">
        <p>
          Our <Link href="/privacy-policy">Privacy Policy</Link> and <Link href="/cookie-policy">Cookie Policy</Link>{" "}
          explain how we handle personal data and tracking technologies.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Governing law">
        <p>
          These terms are governed by the laws of England and Wales. Courts in England and Wales have exclusive
          jurisdiction, subject to mandatory consumer protections that may apply where you live.
        </p>
      </LegalSection>

      <LegalCallout variant="warning" title="18+ reminder">
        <p>Wagering requirements and T&amp;Cs apply to all offers. BeGambleAware.org. When the fun stops, stop.</p>
      </LegalCallout>
    </LegalPageLayout>
  )
}
