import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/metadata"
import { FeaturesPage } from "@/features/features"

export const metadata: Metadata = createPageMetadata(
  "Key Features",
  "Discover PayMatch's intelligent payment reconciliation features including automated payment matching, real-time reconciliation, exception handling, and comprehensive reporting.",
  "/features"
)

export default function FeaturesPageRoute() {
  return <FeaturesPage />
}
