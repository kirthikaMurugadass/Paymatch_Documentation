import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://paymatch.app"
const siteName = "PayMatch Documentation"
const description = "Comprehensive documentation for PayMatch - the intelligent payment reconciliation platform that automates transaction matching, settlement, and financial reporting."

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "PayMatch",
    "payment reconciliation",
    "payment matching",
    "transaction matching",
    "settlement",
    "financial reporting",
    "payment processing",
    "documentation",
  ],
  authors: [{ name: "PayMatch Team" }],
  creator: "PayMatch",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteName,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    creator: "@paymatch",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
}

export function createPageMetadata(
  title: string,
  description: string,
  path: string = ""
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: `${siteUrl}${path}`,
    },
    twitter: {
      title: `${title} | ${siteName}`,
      description,
    },
  }
}
