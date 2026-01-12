import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/metadata"
import { UserRolesPageClient } from "./user-roles-client"

export const metadata: Metadata = createPageMetadata(
  "User Roles",
  "Learn about PayMatch user roles: Admin, Merchant, and Customer. Each role has specific permissions and capabilities for payment reconciliation.",
  "/user-roles"
)

export default function UserRolesPage() {
  return <UserRolesPageClient />
}
