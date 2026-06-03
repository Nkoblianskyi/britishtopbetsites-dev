import type { Metadata } from "next"
import UkBettingPage from "../components/uk-betting-page"
import { SITE, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: `${SITE.name} | Best UK Betting Sites Ranked`,
  description: SITE.description,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE.name} | Best UK Betting Sites Ranked`,
    description: SITE.description,
    url: SITE_URL,
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are Megaways and Quickbet licensed in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both brands listed on our table hold UK Gambling Commission licences for remote betting with customers in Great Britain.",
      },
    },
    {
      "@type": "Question",
      name: "Do you accept bets or hold my money?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. British Top Bet Sites is a comparison publisher only. When you click through to a bookmaker, you deal directly with that operator.",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <UkBettingPage />
    </>
  )
}
