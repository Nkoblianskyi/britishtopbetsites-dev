"use client"

import { PitchFrame } from "./pitch-ui"

const guideSections = [
  {
    title: "Pick a bookie that fits your football",
    body: "Premier League acca fan? Lower-league punter? In-play trader? Start with the competition you bet most, then check whether odds, cash-out, and bet builders match how you actually play.",
  },
  {
    title: "How our table is built",
    body: "We score licensing and safer-gambling tools first, then football market depth, welcome-offer clarity, withdrawal speed, mobile stability, and support response times. Scores are editorial, not paid placements.",
  },
  {
    title: "Welcome offers and the fine print",
    body: "UK promotions must show key conditions, but the operator site is always the contract. Our blurbs summarise. Their T&Cs rule if numbers disagree.",
  },
  {
    title: "Keep it recreational",
    body: "Set deposit and loss caps before you log in, use timeouts when sessions run long, and walk away if betting stops feeling like entertainment. Help is free: see the logos in our footer.",
  },
]

const faqItems = [
  {
    question: "Are Megaways and Quickbet licensed in the UK?",
    answer:
      "Both brands listed on our table hold UK Gambling Commission licences for remote betting with customers in Great Britain. We verify licence status before any operator appears in our rankings.",
  },
  {
    question: "Do you accept bets or hold my money?",
    answer:
      "No. British Top Bet Sites is a comparison publisher only. When you click through to a bookmaker, you deal directly with that operator for deposits, bets, and withdrawals.",
  },
  {
    question: "How often do you update rankings?",
    answer:
      "We re-check welcome offers, product features, and safer-gambling tools regularly. Promotions can change overnight, so always confirm the latest terms on the bookmaker's site before depositing.",
  },
  {
    question: "What does the star rating mean?",
    answer:
      "Our editorial score reflects licensing, football market coverage, odds value, payment speed, mobile app quality, and bonus transparency. User vote counts shown on each card reflect community feedback at review time.",
  },
  {
    question: "Where can I get help if gambling feels out of control?",
    answer:
      "Contact GambleAware on 0808 8020 133 (free, confidential, 24/7). You can also register with GamStop for multi-operator self-exclusion across Great Britain. See our Safer play page for full details.",
  },
]

const factHighlights = [
  {
    stat: "1 signup",
    label: "GamStop covers all members",
    detail: "The multi-operator self-exclusion register runs across Great Britain. One registration can block remote play with every participating licensed firm for six months, one year, or five years.",
  },
  {
    stat: "24 hours",
    label: "typical ID check window",
    detail: "Licensed firms must verify age and identity. Most complete checks within a day, but busy weekends or incomplete documents can add delay before your first withdrawal.",
  },
  {
    stat: "0.1 sec",
    label: "in-play price refresh",
    detail: "Live odds can move faster than a broadcast. UK books build in short bet delays so prices match pitch reality and protect both the punter and market integrity.",
  },
]

const editorialBlocks = [
  {
    title: "Football betting in Britain today",
    lead: "Remote wagering here is one of the most tightly supervised markets on the planet, yet the product surface still feels fast and crowded.",
    body: [
      "Every brand on our list holds a UK Gambling Commission licence for customers in Great Britain. That licence is not a sticker: it ties operators to ongoing audits, source-of-funds checks where risk demands them, and advertising rules that cap how loudly welcome offers can shout.",
      "Most punters now place the majority of stakes on mobile. That shift pushed firms to invest in bet builders, partial cash-out, and same-game parlays. The trade-off is complexity. A slick interface can hide wagering multiples buried three taps deep, which is why we read bonus terms as carefully as we read headline odds.",
      "Competition between books keeps margins thin on popular football markets, but niche leagues or antepost cups can swing widely. Comparing one site is rarely enough if you bet across divisions and codes.",
    ],
    fact: "Since 2014, remote operators serving GB must hold a UKGC licence. Offshore grey-market sites are outside that safety net.",
  },
  {
    title: "Safety is built into the product",
    lead: "Safer gambling in the UK is not a footer slogan. It is a set of controls you can switch on before trouble arrives.",
    body: [
      "Deposit limits, loss limits, session reminders, and cooling-off periods are standard on licensed platforms. GamStop adds a harder line: voluntary exclusion from all participating operators at once. If you register, those firms must close accounts and return balances according to their rules.",
      "Affordability checks have become more visible since the regulator tightened customer interaction expectations. You may be asked about income or spending patterns if your activity spikes. That can feel intrusive, but it exists to block harm early rather than after heavy losses stack up.",
      "Young people and vulnerable adults remain a priority risk group. Banks, operators, and charities share data patterns where law allows, aiming to spot harm signals without turning every casual punter into a suspect.",
    ],
    fact: "The National Gambling Helpline (0808 8020 133) is free, confidential, and open around the clock for anyone in Great Britain.",
  },
  {
    title: "Service quality you can actually feel",
    lead: "A generous welcome offer means little if withdrawals stall or support ghosts you after kick-off.",
    body: [
      "We test how books handle the boring parts: live chat queue times, email replies after midnight, card versus e-wallet payout speed, and whether account history is easy to export for your own records.",
      "Settlement speed matters on in-play markets. A goal ruled out by VAR can reverse hundreds of thousands of bets within minutes. Licensed operators must have systems to unwind positions fairly; the best ones communicate clearly while it happens.",
      "Responsible operators publish complaint routes and link to ADR schemes. If a dispute drags, independent arbitration is available. That backstop is easy to ignore until you need it.",
    ],
    fact: "UK-licensed firms must display clear T&Cs, RTP information where relevant, and links to support charities before you deposit.",
  },
]

export function InfoSections() {
  return (
    <div className="mt-4 space-y-4">
      <PitchFrame title="Football betting guide">
        <div className="ui-surface-inset max-h-[420px] space-y-4 overflow-y-auto p-4 sm:max-h-none">
          {guideSections.map((s) => (
            <div key={s.title}>
              <h3 className="mb-1 font-display text-sm font-semibold uppercase tracking-wide text-[var(--ui-accent)]">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--ui-muted)]">{s.body}</p>
              <hr className="ui-divider last:hidden" />
            </div>
          ))}
        </div>

        <div className="ui-footer-strip mt-3 rounded-lg">
          <span className="w-full text-center font-display text-[11px] font-medium uppercase tracking-widest">
            UK residents 18+ only · Offers change · Verify on operator site
          </span>
        </div>
      </PitchFrame>

      <PitchFrame title="Frequently asked questions">
        <div className="space-y-2" role="list" aria-label="Frequently asked questions">
          {faqItems.map((item) => (
            <details key={item.question} className="faq-item" role="listitem">
              <summary>{item.question}</summary>
              <p className="faq-answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </PitchFrame>

      <PitchFrame title="Betting, safety and service: the UK market in plain terms">
        <p className="mb-5 text-sm leading-relaxed text-[var(--ui-muted)] sm:text-[15px]">
          Below is a straight read on how licensed football betting works in Great Britain: the rules operators live
          under, the habits that keep play under control, and the service details that separate a solid book from a
          frustrating one. Woven in are figures and context we think every punter should know before opening another
          account.
        </p>

        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          {factHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border-2 border-[var(--ui-border)] bg-gradient-to-b from-green-50/90 to-white p-4"
            >
              <p className="font-display text-2xl font-bold tracking-tight text-[var(--ui-accent)] sm:text-3xl">
                {item.stat}
              </p>
              <p className="mt-0.5 font-display text-xs font-semibold uppercase tracking-wide text-[var(--ui-text)]">
                {item.label}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[var(--ui-muted)] sm:text-[13px]">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {editorialBlocks.map((block) => (
            <article key={block.title} className="border-t border-[var(--ui-border)] pt-6 first:border-t-0 first:pt-0">
              <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-[var(--ui-text)] sm:text-xl">
                {block.title}
              </h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--ui-accent)] sm:text-base">{block.lead}</p>

              <div className="mt-4 space-y-3">
                {block.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-[var(--ui-muted)] sm:text-[15px]">
                    {paragraph}
                  </p>
                ))}
              </div>

              <aside className="mt-4 flex gap-3 rounded-lg border-l-4 border-[var(--ui-gold)] bg-[var(--ui-cream)] px-4 py-3">
                <span className="shrink-0 font-display text-[10px] font-bold uppercase tracking-widest text-[var(--ui-accent)]">
                  Fact
                </span>
                <p className="text-sm leading-relaxed text-[var(--ui-text)]">{block.fact}</p>
              </aside>
            </article>
          ))}
        </div>

        <div className="ui-surface mt-8 rounded-lg p-4 sm:p-5">
          <p className="text-sm leading-relaxed text-[var(--ui-muted)]">
            <strong className="text-[var(--ui-text)]">A note on responsibility.</strong> Nothing here is financial advice.
            Betting carries risk of loss. If play stops feeling optional, use operator limits, GamStop, or call the
            National Gambling Helpline. Our comparison tables exist to inform choice among licensed firms, not to
            encourage higher stakes or more accounts than you need.
          </p>
        </div>
      </PitchFrame>
    </div>
  )
}
