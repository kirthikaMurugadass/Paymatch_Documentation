"use client"

import { Section } from "@/components/section"
import { GlassCard } from "@/components/glass-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Monitor,
  LayoutDashboard,
  CreditCard,
  Users,
  Settings,
  FileText,
  BarChart3,
  Bell,
} from "lucide-react"

const modules = [
  {
    icon: LayoutDashboard,
    title: "Reconciliation Dashboard",
    description: "Main dashboard showing payment matching metrics, reconciliation status, and key performance indicators.",
    features: [
      "Real-time matching rate metrics",
      "Matched vs unmatched payment charts",
      "Quick access to exceptions",
      "Reconciliation summary widgets",
    ],
    color: "blue",
  },
  {
    icon: CreditCard,
    title: "Payment Matching Module",
    description: "Payment and transaction management with matching status, filtering, and detailed reconciliation views.",
    features: [
      "Payment and transaction listing",
      "Matching status filtering",
      "Match details and exception views",
      "Export reconciliation data",
    ],
    color: "green",
  },
  {
    icon: Users,
    title: "User Management Module",
    description: "Comprehensive user administration with role management and permissions.",
    features: [
      "User listing and search",
      "Role assignment",
      "Permission management",
      "User activity logs",
    ],
    color: "purple",
  },
  {
    icon: BarChart3,
    title: "Reconciliation Analytics",
    description: "Advanced reconciliation analytics with matching performance metrics and customizable reports.",
    features: [
      "Matching rate analytics",
      "Reconciliation trend analysis",
      "Custom reconciliation report builder",
      "Matching performance visualization",
    ],
    color: "orange",
  },
  {
    icon: Settings,
    title: "Matching Rules Configuration",
    description: "System configuration for matching rules, preferences, and reconciliation settings.",
    features: [
      "Matching rule configuration",
      "Reconciliation schedule settings",
      "Notification preferences",
      "Exception handling rules",
    ],
    color: "pink",
  },
  {
    icon: FileText,
    title: "Reconciliation Reports",
    description: "Generate and export detailed reconciliation reports for payments, matching, and settlements.",
    features: [
      "Reconciliation summary reports",
      "Matching status reports",
      "Exception and unmatched payment reports",
      "Export in CSV, PDF, Excel formats",
    ],
    color: "teal",
  },
  {
    icon: Bell,
    title: "Notifications Module",
    description: "Real-time notifications and alerts for important events and updates.",
    features: [
      "Real-time notifications",
      "Email notifications",
      "In-app alerts",
      "Notification preferences",
    ],
    color: "indigo",
  },
  {
    icon: Monitor,
    title: "Settlement & Reconciliation Module",
    description: "Settlement and reconciliation management with batch processing, tracking, and reporting.",
    features: [
      "Reconciliation batch scheduling",
      "Settlement tracking and status",
      "Reconciliation batch management",
      "Settlement reconciliation reports",
    ],
    color: "red",
  },
]

export default function ScreensPage() {
  return (
    <div className="space-y-12">
      <Section>
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Screens & Dashboard Modules</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            PayMatch consists of multiple dashboard modules and screens, each designed to provide
            specific functionality for payment reconciliation and matching. This section explains
            each module and its purpose in the reconciliation workflow.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {modules.map((module, index) => {
            const Icon = module.icon
            const colorClasses = {
              blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
              green: "bg-green-500/10 text-green-600 dark:text-green-400",
              purple: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
              orange: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
              pink: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
              teal: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
              indigo: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
              red: "bg-red-500/10 text-red-600 dark:text-red-400",
            }
            return (
              <GlassCard key={module.title} delay={index * 0.1}>
                <Card className="border-0 bg-transparent h-full">
                  <CardHeader>
                    <div className={`mb-2 flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses[module.color as keyof typeof colorClasses]}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {module.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>{feature}</span>
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
          <h2 className="text-3xl font-bold mb-4">User Interface Design</h2>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="p-6 rounded-lg bg-muted/50 border">
              <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
              <p className="text-muted-foreground text-sm">
                All screens are fully responsive and optimized for desktop, tablet, and mobile
                devices. The interface adapts seamlessly to different screen sizes.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50 border">
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-muted-foreground text-sm">
                Built with accessibility in mind, following WCAG guidelines to ensure the
                platform is usable by everyone, including users with disabilities.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50 border">
              <h3 className="text-xl font-semibold mb-3">Dark Mode</h3>
              <p className="text-muted-foreground text-sm">
                Full support for dark mode with automatic theme switching based on user
                preferences or system settings.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50 border">
              <h3 className="text-xl font-semibold mb-3">Performance</h3>
              <p className="text-muted-foreground text-sm">
                Optimized for fast loading times and smooth interactions, with lazy loading
                and code splitting for optimal performance.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
