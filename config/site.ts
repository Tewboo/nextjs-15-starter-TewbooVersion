import { SiteConfig } from "@/types/siteConfig";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://starter.tewboo.my/"; // TODO: change to your own domain

const baseSiteConfig = {
  name: "Next.js 15 Starter", // TODO: change to your own name
  description:
    "Next.js 15 Starter is a meticulously designed Next.js starter template aimed at providing developers with a clean, efficient, and scalable foundation for quickly launching.", // TODO: change to your own description
  url: BASE_URL,
  metadataBase: '/',
  keywords: ["next.js 15 starter", "next.js template", "next.js 15 base", "study next.js"], // TODO: change to your own keywords
  authors: [
    {
      name: "Tewboo", 
      url: "https://tewboo.my", // TODO: change to your own url
      twitter: 'https://x.com/Tewbooathtb', 
    }
  ],
  creator: '@Jesse',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  defaultNextTheme: 'system', // next-theme option: system | dark | light
  icons: {
    icon: "/logo1.png",
    shortcut: "/logo1.png",
    apple: "/logo1.png", // apple-touch-icon.png
  },
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en-US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}og.webp`],
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    site: baseSiteConfig.url,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}og.webp`],
    creator: baseSiteConfig.creator,
  },
}
