import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/metadata"
import { FeaturesPageClient } from "./features-client"

export const metadata: Metadata = createPageMetadata(
  "Key Features",
  "Discover PayMatch's intelligent payment reconciliation features including automated payment matching, real-time reconciliation, exception handling, and comprehensive reporting.",
  "/features"
)

export default function FeaturesPage() {
  return <FeaturesPageClient />
}
