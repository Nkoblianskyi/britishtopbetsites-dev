import type { BettingSite, HorizontalBanner } from "../types"

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "Megaways",
    logo: "/megaways-logo.png",
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
    logo: "/quickbet-casino.webp",
    rating: 9.3,
    bonus: "Bet £10 Get £10 Free Bet",
    description: "Quick slips and weekend coupon focus",
    features: ["Price Boosts", "Same Game Acca", "Live Streaming"],
    welcomeOffer: "or 100 Cash Spins",
    terms:
      "18+ New players only. Deposit & wager at least £10 to get free spins. Offer must be activated before depositing. Free Spins winnings are cash. No max cash out. Eligibility is restricted for suspected abuse. Skrill deposits excluded. Free Spins value £0.10 per spin. Free Spins expire in 48 hours. Free bet offer: Minimum odds 2.0. Free bet value will be deducted from free bet winnings. T&Cs apply. BeGambleAware.org",
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
