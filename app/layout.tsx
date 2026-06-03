import type React from "react"
import type { Metadata } from "next"
import { Oswald, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { SITE, SITE_URL } from "@/lib/site"

export { SITE_URL }

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} | Best UK Betting Sites Ranked`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "UK betting sites",
    "best betting sites UK",
    "British betting comparison",
    "UKGC licensed bookmakers",
    "welcome offers UK",
    "Megaways",
    "Quickbet",
  ],
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE_URL,
    siteName: SITE.name,
    title: `${SITE.name} | Best UK Betting Sites Ranked`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Best UK Betting Sites Ranked`,
    description: SITE.description,
  },
  other: {
    "geo.region": "GB",
    "geo.placename": "United Kingdom",
  },
  icons: {
    icon: [{ url: SITE.logo, type: "image/png" }],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [{ url: SITE.logo, type: "image/png" }],
  },
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE_URL,
  description: SITE.description,
  inLanguage: SITE.locale,
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE_URL,
    logo: `${SITE_URL}${SITE.logo}`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${oswald.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="font-sans text-[13px] antialiased">
        <div className="ui-desktop-bg min-h-screen">
          <div className="relative z-10 mx-auto max-w-[1580px] px-2 pb-4 sm:px-4">
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
