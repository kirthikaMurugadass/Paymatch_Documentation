import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/metadata"
import { AuthenticationPage } from "@/features/authentication"

export const metadata: Metadata = createPageMetadata(
  "Authentication & User Onboarding",
  "Learn about PayMatch's secure authentication system, user onboarding flow, password management, and multi-factor authentication features.",
  "/authentication"
)

export default function AuthenticationPageRoute() {
  return <AuthenticationPage />
}
