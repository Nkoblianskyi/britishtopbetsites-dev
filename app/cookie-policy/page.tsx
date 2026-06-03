import type { Metadata } from "next"
import Link from "next/link"
import {
  LegalPageLayout,
  LegalSection,
  LegalCallout,
  LegalCardGrid,
  LegalMiniCard,
} from "@/components/legal-page-layout"
import { SITE, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How cookies work on ${SITE.domain}.`,
  alternates: { canonical: `${SITE_URL}/cookie-policy` },
  openGraph: {
    title: `Cookie Policy | ${SITE.name}`,
    description: `How cookies work on ${SITE.domain}.`,
    url: `${SITE_URL}/cookie-policy`,
  },
}

const cookieTypes = [
  {
    title: "Strictly necessary",
    desc: "Keep the site working: security, load balancing, and remembering whether you clicked Accept or Essential only on our banner.",
  },
  {
    title: "Analytics",
    desc: "Anonymous or pseudonymous stats about which pages are read and how visitors move through the site. Usually off until you consent.",
  },
  {
    title: "Affiliate / measurement",
    desc: "Help us see which outbound bookmaker links were clicked so referrals can be credited. May involve third-party tags after consent.",
  },
  {
    title: "Preferences",
    desc: "Store choices such as cookie consent status so we do not ask on every page load.",
  },
]

export default function CookiePolicyPage() {
  const updated = new Date().toLocaleDateString("en-GB", { month: "long", day: "numeric", year: "numeric" })

  return (
    <LegalPageLayout
      title="Cookie Policy"
      subtitle="Small files on your device, what they do here, and how to switch them off."
      updatedAt={updated}
      activePath="/cookie-policy"
    >
      <LegalCallout variant="info" title="Your control">
        <p>
          On first visit you will see a cookie dialog. Choose <strong>Accept all</strong> for analytics and
          affiliate tags, or <strong>Essential only</strong> to limit storage to what the site needs to function. You can
          also clear cookies in your browser at any time.
        </p>
      </LegalCallout>

      <LegalSection number="1" title="What is a cookie?">
        <p>
          Cookies are short text files saved on your phone or computer. They can remember settings, keep you logged in on
          other sites, or help owners understand traffic. Similar technologies (local storage, pixels) are treated the same
          way here.
        </p>
      </LegalSection>

      <LegalSection number="2" title="Categories we use">
        <p>We group technologies on {SITE.domain} as follows:</p>
      </LegalSection>

      <LegalCardGrid cols={2}>
        {cookieTypes.map((c) => (
          <LegalMiniCard key={c.title} title={c.title}>
            {c.desc}
          </LegalMiniCard>
        ))}
      </LegalCardGrid>

      <LegalSection number="3" title="Third-party cookies">
        <p>
          When you follow a link to a bookmaker, that company (and its partners) may set their own cookies. We do not control
          those. Read the operator&apos;s cookie notice before registering or depositing.
        </p>
      </LegalSection>

      <LegalSection number="4" title="Managing cookies">
        <ul>
          <li>Use our banner when it appears on {SITE.domain}</li>
          <li>Browser settings. Chrome, Edge, Firefox, Safari, and others let you block or delete cookies</li>
          <li>Industry opt-outs. Some ad networks offer separate preference tools (we do not operate them)</li>
        </ul>
        <p className="mt-3">
          Blocking all cookies may break features such as remembering your consent choice. See our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> for wider data uses.
        </p>
      </LegalSection>

      <LegalSection number="5" title="Updates">
        <p>
          We will revise this policy when our tools or legal obligations change. Check the revision date at the top for the
          latest version.
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}
