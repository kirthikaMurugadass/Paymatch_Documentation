import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/metadata"
import { AboutPageClient } from "./about-client"

export const metadata: Metadata = createPageMetadata(
  "About PayMatch",
  "Learn about PayMatch - an intelligent payment reconciliation platform designed to automate the matching of incoming payments with merchant transactions, reducing manual work and errors.",
  "/about"
)

export default function AboutPage() {
  return <AboutPageClient />
}
