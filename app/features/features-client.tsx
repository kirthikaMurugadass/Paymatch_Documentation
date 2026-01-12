"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/section"
import { GlassCard } from "@/components/glass-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CreditCard,
  Shield,
  Zap,
  BarChart3,
  Users,
  Globe,
  Lock,
  TrendingUp,
  Bell,
  Settings,
} from "lucide-react"

const features = [
  {
    icon: CreditCard,
    title: "Automated Payment Matching",
    description: "Intelligent algorithms automatically match incoming payments with transactions using references, amounts, and dates.",
    color: "blue",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "End-to-end encryption, secure data storage, and role-based access control for all payment data.",
    color: "green",
  },
  {
    icon: Zap,
    title: "Real-time Reconciliation",
    description: "Instant payment matching and reconciliation status updates as payments are received.",
    color: "yellow",
  },
  {
    icon: BarChart3,
    title: "Reconciliation Analytics",
    description: "Comprehensive dashboards showing matching rates, unmatched payments, and reconciliation metrics.",
    color: "purple",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description: "Granular permissions for merchants, administrators, and customers with role-specific dashboards.",
    color: "pink",
  },
  {
    icon: Globe,
    title: "Multiple Payment Sources",
    description: "Support for matching payments from various sources including bank transfers, payment gateways, and digital wallets.",
    color: "indigo",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "Compliant with GDPR, PCI DSS, and other data protection regulations for secure payment handling.",
    color: "red",
  },
  {
    icon: TrendingUp,
    title: "Settlement Reconciliation",
    description: "Automated reconciliation of settlements with matched transactions and exception handling.",
    color: "orange",
  },
  {
    icon: Bell,
    title: "Matching Notifications",
    description: "Real-time notifications for successful matches, unmatched payments, and reconciliation status updates.",
    color: "teal",
  },
  {
    icon: Settings,
    title: "Configurable Matching Rules",
    description: "Customizable matching criteria and rules to match your business reconciliation requirements.",
    color: "gray",
  },
]

export function FeaturesPageClient() {
  return (
    <div className="space-y-12">
      <Section>
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text dark:gradient-text-2"
          >
            Key Features
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
          >
            PayMatch offers intelligent payment reconciliation features designed to automate payment
            matching, reduce manual work, and provide accurate financial reporting for merchants.
          </motion.p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colorClasses = {
              blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
              green: "bg-green-500/10 text-green-600 dark:text-green-400",
              yellow: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
              purple: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
              pink: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
              indigo: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
              red: "bg-red-500/10 text-red-600 dark:text-red-400",
              orange: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
              teal: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
              gray: "bg-gray-500/10 text-gray-600 dark:text-gray-400",
            }
            return (
              <GlassCard key={feature.title} delay={index * 0.1}>
                <Card className="border-0 bg-transparent h-full">
                  <CardHeader>
                    <div className={`mb-2 flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </GlassCard>
            )
          })}
        </div>
      </Section>

      <Section>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-4">Feature Highlights</h2>
          <div className="grid gap-6 md:grid-cols-2 mt-8">
            <div className="p-6 rounded-lg bg-muted/50 border">
              <h3 className="text-xl font-semibold mb-3">Intelligent Payment Matching</h3>
              <p className="text-muted-foreground">
                PayMatch uses advanced algorithms to automatically match incoming payments with merchant
                transactions. The system compares transaction references, amounts, payment dates, and
                customer information to identify matches with high accuracy.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50 border">
              <h3 className="text-xl font-semibold mb-3">Exception Handling</h3>
              <p className="text-muted-foreground">
                Unmatched payments and discrepancies are flagged for manual review. The system provides
                detailed information about why a payment couldn't be matched, helping users resolve
                exceptions quickly.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50 border">
              <h3 className="text-xl font-semibold mb-3">Reconciliation Reporting</h3>
              <p className="text-muted-foreground">
                Generate comprehensive reconciliation reports showing matched payments, unmatched items,
                matching rates, and settlement summaries. Reports can be exported in multiple formats
                for accounting and audit purposes.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50 border">
              <h3 className="text-xl font-semibold mb-3">Dashboard Analytics</h3>
              <p className="text-muted-foreground">
                Real-time dashboards provide insights into reconciliation performance, matching rates,
                processing volumes, and exception trends. Visual analytics help identify patterns and
                optimize matching rules.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
