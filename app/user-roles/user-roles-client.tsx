"use client"

import { Section } from "@/components/section"
import { GlassCard } from "@/components/glass-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Store, User, Eye } from "lucide-react"

const roles = [
  {
    icon: Shield,
    title: "Admin",
    description: "Full system access with complete control over all features and settings.",
    permissions: [
      "Manage all users and merchant accounts",
      "Configure system settings and matching rules",
      "View all transactions and reconciliation reports",
      "Manage settlement and reconciliation processes",
      "Access security and compliance settings",
      "Monitor system performance and matching rates",
      "Handle exceptions and unmatched payments",
    ],
    color: "red",
  },
  {
    icon: Store,
    title: "Merchant",
    description: "Business owners who accept payments and manage their transactions.",
    permissions: [
      "View and manage own transactions and payments",
      "Access merchant reconciliation dashboard",
      "Configure matching rules and preferences",
      "View reconciliation and settlement reports",
      "Review matched and unmatched payments",
      "Export reconciliation reports",
      "Access matching analytics and metrics",
    ],
    color: "blue",
  },
  {
    icon: User,
    title: "Customer",
    description: "End users who make payments and interact with merchants.",
    permissions: [
      "Make payments to merchants",
      "View payment history and status",
      "View payment receipts and confirmations",
      "Update profile and payment information",
      "View payment matching status",
      "Access customer support",
    ],
    color: "green",
  },
]

export function UserRolesPageClient() {
  return (
    <div className="space-y-12">
      <Section>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text dark:gradient-text-2">
            User Roles
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            PayMatch supports three primary user roles: Admin, Merchant, and Customer. Each role
            has specific permissions and access to features relevant to their responsibilities
            in the payment reconciliation process.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {roles.map((role, index) => {
            const Icon = role.icon
            const colorClasses = {
              red: "bg-red-500/10 text-red-600 dark:text-red-400",
              blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
              green: "bg-green-500/10 text-green-600 dark:text-green-400",
            }
            return (
              <GlassCard key={role.title} delay={index * 0.1}>
                <Card className="border-0 bg-transparent h-full">
                  <CardHeader>
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${colorClasses[role.color as keyof typeof colorClasses]}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl">{role.title}</CardTitle>
                    <CardDescription className="text-base">{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm mb-3">Key Permissions:</h4>
                      <ul className="space-y-2">
                        {role.permissions.map((permission, permIndex) => (
                          <li key={permIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Eye className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>{permission}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </GlassCard>
            )
          })}
        </div>
      </Section>

      <Section>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-4">Role-Based Access Control</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            PayMatch implements a comprehensive role-based access control (RBAC) system that
            ensures users only have access to the features and data relevant to their role.
            This approach enhances security and provides a streamlined user experience.
          </p>
          <div className="mt-8 p-6 rounded-lg bg-muted/50 border">
            <h3 className="text-xl font-semibold mb-3">Security Benefits</h3>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>Principle of least privilege - users only get necessary permissions</li>
              <li>Reduced risk of unauthorized access to sensitive data</li>
              <li>Audit trails for all role-based actions</li>
              <li>Easy management of user permissions</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
