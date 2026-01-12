import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/metadata"
import { HomePageClient } from "./home-client"

export const metadata: Metadata = createPageMetadata(
  "Introduction",
  "Welcome to PayMatch Documentation - Your comprehensive guide to the intelligent payment reconciliation platform that automates transaction matching, settlement, and financial reporting.",
  "/"
)

export default function Home() {
  return <HomePageClient />
}
