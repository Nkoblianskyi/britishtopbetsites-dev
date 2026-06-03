import type { Metadata } from "next"
import Link from "next/link"
import { LegalPageLayout, LegalSection, LegalCallout } from "@/components/legal-page-layout"
import { SITE, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses, and protects your information.`,
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: `Privacy Policy | ${SITE.name}`,
    description: `How ${SITE.name} collects, uses, and protects your information.`,
    url: `${SITE_URL}/privacy-policy`,
  },
}

export default function PrivacyPolicyPage() {
  const updated = new Date().toLocaleDateString("en-GB", { month: "long", day: "numeric", year: "numeric" })

  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="What we collect on this UK comparison site, why we use it, and the rights you have under UK GDPR."
      updatedAt={updated}
      activePath="/privacy-policy"
    >
      <LegalCallout variant="info" title="Plain-English summary">
        <p>
          {SITE.name} runs {SITE.domain} for adults comparing football bookmakers. We collect limited technical data to keep the
          site secure and understand traffic. With your consent, we may use analytics and affiliate measurement. We do not
          sell personal information to data brokers.
        </p>
      </LegalCallout>

      <LegalSection number="1" title="Who controls your data">
        <p>
          The data controller is the business operating {SITE.domain}. Contact details published on this site apply to
          privacy requests.
        </p>
      </LegalSection>

      <LegalSection number="2" title="Information we may process">
        <ul>
          <li>
            <strong>Details you send us</strong>, for example if you email support or join a mailing list (where offered)
          </li>
          <li>
            <strong>Technical logs</strong>: IP address, browser type, device type, pages viewed, referring URL, timestamps
          </li>
          <li>
            <strong>Cookie identifiers</strong>. See our <Link href="/cookie-policy">Cookie Policy</Link>
          </li>
          <li>
            <strong>Referral signals</strong>. When you click out to a bookmaker, partners may receive a click ID to attribute
            commissions
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="3" title="Purposes and lawful bases">
        <ul>
          <li>Operate, secure, and debug the website (legitimate interests / contract)</li>
          <li>Measure audience and improve content (consent or legitimate interests, depending on tool)</li>
          <li>Attribute affiliate referrals (legitimate interests and/or consent)</li>
          <li>Comply with law and respond to lawful requests (legal obligation)</li>
        </ul>
      </LegalSection>

      <LegalSection number="4" title="Sharing and international transfers">
        <p>
          We use hosting, analytics, and affiliate technology providers who process data on our instructions. Some subprocessors
          may store data outside the UK. Where required we rely on appropriate safeguards such as UK IDTA or adequacy
          regulations.
        </p>
      </LegalSection>

      <LegalSection number="5" title="Retention">
        <p>
          We keep information only as long as needed for the purposes above, then delete or anonymise it unless law requires
          longer storage (for example tax or dispute records).
        </p>
      </LegalSection>

      <LegalSection number="6" title="Security">
        <p>
          We apply reasonable administrative and technical measures. No website can guarantee perfect security. Please use
          strong passwords on operator accounts and log out on shared devices.
        </p>
      </LegalSection>

      <LegalSection number="7" title="Your rights">
        <p className="mb-2">Under UK data protection law you may have the right to:</p>
        <ul>
          <li>Access, rectify, or erase personal data</li>
          <li>Restrict or object to certain processing</li>
          <li>Withdraw consent (where processing is consent-based)</li>
          <li>Complain to the Information Commissioner&apos;s Office (ico.org.uk)</li>
        </ul>
      </LegalSection>

      <LegalSection number="8" title="Children">
        <p>
          This site is not directed at anyone under 18. We do not knowingly collect data from minors. If you believe a minor
          has contacted us, please alert us so we can delete the information.
        </p>
      </LegalSection>

      <LegalSection number="9" title="Policy changes">
        <p>
          We may update this notice when practices or law change. The revision date at the top marks the current version.
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}
