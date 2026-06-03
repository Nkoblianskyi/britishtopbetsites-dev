import type { BettingSite, HorizontalBanner } from "../types"

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "Megaways",
    logo: "/megaways.svg",
    rating: 9.6,
    bonus: "Bet £10",
    description: "Strong sports markets with fast in-play pricing",
    features: ["Acca Boosts", "Cash Out", "Bet Builder"],
    welcomeOffer: "Get £30 in Free Bets",
    terms:
      "18+ New customers only. Register, deposit with a debit card, and place a first qualifying bet of £10+ at minimum odds of Evens (2.0) on any football market within 7 days of registration. Free bets credited as 3 x £10 tokens, valid for 7 days on selected football markets. Stake not returned. T&Cs apply. BeGambleAware.org",
    userRating: 9.6,
    votes: 7124,
    link: "https://www.megaways.com/",
    backgroundImage: "/banner-hor.jpg",
  },
  {
    id: 2,
    name: "Quickbet",
    logo: "/quickbet.svg",
    rating: 9.3,
    bonus: "Bet £5",
    description: "Quick slips and weekend coupon focus",
    features: ["Price Boosts", "Same Game Acca", "Live Streaming"],
    welcomeOffer: "Get £25 in Free Bets",
    terms:
      "18+ New UK customers only. Min deposit £5. Place a first bet of £5+ at odds of 1/2 (1.5) or greater on football within 14 days of sign-up. Receive 5 x £5 free bet tokens within 24 hours of settlement. Free bets expire after 7 days. Payment method and market restrictions apply. T&Cs apply. BeGambleAware.org",
    userRating: 9.3,
    votes: 5891,
    link: "https://www.quickbet.co.uk/",
    backgroundImage: "/banner-hor.jpg",
  },
]

export const horizontalBanners: HorizontalBanner[] = [
  {
    id: 1,
    name: "Megaways",
    logo: "/megaways.svg",
    bonus: "Bet £10",
    welcomeOffer: "Get £30 in Free Bets",
    link: "https://www.megaways.com/",
    backgroundImage: "/banner.webp",
    mobileBackgroundImage: "/banner-mobile.jpg",
    terms:
      "18+ New customers only. Register, deposit with a debit card, and place a first qualifying bet of £10+ at minimum odds of Evens (2.0) on any football market within 7 days of registration. Free bets credited as 3 x £10 tokens, valid for 7 days on selected football markets. Stake not returned. T&Cs apply. BeGambleAware.org",
  },
]

export const affiliateLinks: Record<string, string> = {
  megaways: "https://www.megaways.com/",
  quickbet: "https://www.quickbet.co.uk/",
}
