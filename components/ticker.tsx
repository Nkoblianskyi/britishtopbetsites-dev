"use client"

import { useEffect, useState } from "react"
import { PitchFrame } from "./pitch-ui"

interface Match {
  id: string
  homeTeam: string
  awayTeam: string
  date: string
  time: string
  league: string
}

export function Ticker() {
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)

  const fetchMatches = async () => {
    try {
      const res = await fetch("https://www.scorebat.com/video-api/v3/")
      const data = await res.json()

      if (!data.response) return

      const allMatches = data.response.slice(0, 15).map((match: { title: string; date: string; competition?: string }, index: number) => {
        const [homeTeam, awayTeam] = match.title.split(" - ")
        const dateObj = new Date(match.date)

        return {
          id: `match-${index}`,
          homeTeam: homeTeam?.trim() || "TBD",
          awayTeam: awayTeam?.trim() || "TBD",
          date: dateObj.toLocaleDateString("en-GB", { day: "2-digit", month: "short" }),
          time: dateObj.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false }),
          league: match.competition || "Friendly",
        }
      })

      setMatches(allMatches)
    } catch {
      setMatches([
        { id: "1", homeTeam: "Man United", awayTeam: "Liverpool", date: "15 Jun", time: "20:00", league: "Premier League" },
        { id: "2", homeTeam: "Chelsea", awayTeam: "Arsenal", date: "19 Jun", time: "16:00", league: "Premier League" },
      ])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMatches()
    const interval = setInterval(fetchMatches, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <PitchFrame title="Live fixtures" className="mb-3">
        <p className="text-center text-sm text-[var(--ui-muted)]">Loading fixtures…</p>
      </PitchFrame>
    )
  }

  if (matches.length === 0) return null

  const track = [...matches, ...matches, ...matches]

  return (
    <PitchFrame title="Live fixtures" className="mb-3 overflow-hidden">
      <div className="relative h-10 overflow-hidden rounded-md ui-surface-inset">
        <div className="absolute left-0 top-0 z-10 flex h-full items-center bg-[var(--ui-accent)] px-3 text-[10px] font-semibold text-white">
          LIVE
        </div>
        <div className="ticker-track flex h-full items-center pl-14">
          {track.map((match, index) => (
            <div
              key={`${match.id}-${index}`}
              className="min-w-[220px] shrink-0 border-r border-[var(--ui-border)] px-4 text-[11px] text-[var(--ui-text)]"
            >
              <span className="font-semibold">
                {match.homeTeam} vs {match.awayTeam}
              </span>
              <span className="text-[var(--ui-muted)]">
                {" "}
                · {match.date} {match.time} · {match.league}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .ticker-track {
          animation: ticker-scroll 90s linear infinite;
          width: max-content;
        }
        @keyframes ticker-scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-33.33%);
          }
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </PitchFrame>
  )
}
