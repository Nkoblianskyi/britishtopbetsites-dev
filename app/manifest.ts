import type { MetadataRoute } from "next"
import { SITE } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "BTBS",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#1b4332",
    theme_color: "#2d6a4f",
    lang: SITE.locale,
    dir: "ltr",
    categories: ["entertainment", "sports"],
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: SITE.logo, sizes: "512x512", type: "image/svg+xml", purpose: "any" },
    ],
  }
}
