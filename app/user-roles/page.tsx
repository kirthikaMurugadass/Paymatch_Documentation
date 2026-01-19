import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/metadata"
import { UserRolesPage } from "@/features/user-roles"

export const metadata: Metadata = createPageMetadata(
  "User Roles",
  "Learn about PayMatch user roles: Admin, Merchant, and Customer. Each role has specific permissions and capabilities for payment reconciliation.",
  "/user-roles"
)

export default function UserRolesPageRoute() {
  return <UserRolesPage />
}
