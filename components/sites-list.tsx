"use client"

import { Card } from "./card"
import { HorizontalBanner } from "./horizontal-banner"
import { bettingSites, horizontalBanners } from "../data/mock-data"
import type { BettingSite } from "../types"

export function SitesList() {
  return (
    <div className="w-full space-y-3 sm:space-y-4">
      {bettingSites.map((site: BettingSite, index: number) => (
        <div key={site.id} className="w-full">
          <Card site={site} rank={index + 1} />
          {/* Horizontal banner after third listing */}
          {/* {index === 2 && (
            <div className="my-3 w-full">
              <HorizontalBanner
                banner={horizontalBanners[0]}
              />
            </div>
          )} */}
          {/* Optional second horizontal banner */}
          {/* {index === 5 && (
            <div className="my-3 w-full">
              <HorizontalBanner banner={horizontalBanners[1]} />
            </div>
          )} */}
        </div>
      ))}
    </div>
  )
}
