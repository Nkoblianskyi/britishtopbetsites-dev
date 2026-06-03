"use client"

import Image from "next/image"
import type { HorizontalBanner as HorizontalBannerType } from "../types"
import { PitchFrame } from "./pitch-ui"

interface HorizontalBannerProps {
  banner: HorizontalBannerType
}

export function HorizontalBanner({ banner }: HorizontalBannerProps) {
  return (
    <a
      href={banner.link}
      target="_blank"
      rel="nofollow noopener sponsored noreferrer"
      className="group mb-3 block no-underline"
    >
      <PitchFrame title={`Special offer · ${banner.name}`}>
        <div className="relative min-h-[200px] md:hidden">
          <Image
            src={banner.mobileBackgroundImage || banner.backgroundImage || "/placeholder.svg"}
            alt=""
            fill
            className="rounded-md object-cover opacity-20"
          />
          <div className="relative z-10 flex flex-col overflow-hidden rounded-md border border-[var(--ui-border)]">
            <div className="bg-amber-50/90 p-3 text-center">
              <p className="text-lg font-semibold text-[var(--ui-accent)]">{banner.bonus}</p>
              <p className="text-sm font-semibold text-[var(--ui-text)]">{banner.welcomeOffer}</p>
            </div>
            <div className="flex justify-center bg-[#f5f6f8] py-4">
              <img src={banner.logo || "/placeholder.svg"} alt={banner.name} className="h-12 object-contain" />
            </div>
            <div className="p-2">
              <span className="ui-btn ui-btn-primary block w-full text-center font-semibold">Claim bonus</span>
            </div>
            <div className="ui-footer-strip rounded-none border-t">
              <p className="w-full text-center text-[10px] leading-snug">{banner.terms || ""}</p>
            </div>
          </div>
        </div>

        <div className="relative hidden min-h-[140px] md:block lg:min-h-[160px]">
          <Image
            src={banner.backgroundImage || "/placeholder.svg"}
            alt=""
            fill
            className="rounded-md object-cover opacity-15"
          />
          <div className="relative z-10 flex min-h-[140px] items-center justify-center gap-6 px-4 py-3 lg:min-h-[160px]">
            <img src={banner.logo || "/placeholder.svg"} alt={banner.name} className="h-14 object-contain lg:h-16" />
            <div className="ui-surface-inset max-w-md rounded-lg p-4 text-center">
              <p className="text-xl font-semibold text-[var(--ui-accent)]">{banner.bonus}</p>
              <p className="text-base font-semibold text-[var(--ui-text)]">{banner.welcomeOffer}</p>
            </div>
            <span className="ui-btn ui-btn-primary shrink-0 px-6 font-semibold">Claim bonus</span>
          </div>
          <div className="ui-footer-strip relative z-10 mx-0 rounded-b-lg">
            <p className="w-full text-center text-[11px]">{banner.terms || ""}</p>
          </div>
        </div>
      </PitchFrame>
    </a>
  )
}
