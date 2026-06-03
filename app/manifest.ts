import type { MetadataRoute } from "next"
import { SITE } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "BTBS",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#012169",
    theme_color: "#1e3a8a",
    lang: SITE.locale,
    dir: "ltr",
    categories: ["entertainment", "sports"],
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/svg+xml" },
      { src: SITE.logo, sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  }
}
