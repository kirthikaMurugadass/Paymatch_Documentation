"use client"

import { Section } from "@/components/section"
import { GlassCard } from "@/components/glass-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, CheckCircle, XCircle, Clock, Filter, Download } from "lucide-react"

export function TransactionsPage() {
  return (
    <div className="space-y-12">
      <Section>
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Transactions & Payment Lifecycle</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            PayMatch manages the complete payment lifecycle from transaction creation through
            payment matching, reconciliation, and settlement. This section explains how
            payments flow through the system and are matched with transactions.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold mb-6">Transaction Types</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Matched Payments</CardTitle>
                <CardDescription>
                  Payments that have been successfully matched with transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Automatic matching confirmation</li>
                  <li>• Reconciliation status updated</li>
                  <li>• Notification sent to merchant</li>
                  <li>• Ready for settlement</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                  <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle>Unmatched Payments</CardTitle>
                <CardDescription>
                  Payments that could not be automatically matched with transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Exception reason tracking</li>
                  <li>• Mismatch details provided</li>
                  <li>• Manual review required</li>
                  <li>• Merchant notification sent</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/10">
                  <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <CardTitle>Pending Matching</CardTitle>
                <CardDescription>
                  Payments that are being processed for matching or awaiting transaction data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time matching status</li>
                  <li>• Processing time tracking</li>
                  <li>• Automatic retry matching</li>
                  <li>• Timeout and exception handling</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.3}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <CreditCard className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle>Reconciled Payments</CardTitle>
                <CardDescription>
                  Payments that have been fully reconciled and included in settlement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Settlement batch inclusion</li>
                  <li>• Reconciliation confirmation</li>
                  <li>• Settlement date tracking</li>
                  <li>• Final status notifications</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-4">Transaction Management Features</h2>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="p-6 rounded-lg bg-muted/50 border">
              <div className="flex items-center gap-3 mb-3">
                <Filter className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Advanced Filtering</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Filter transactions by date range, status, amount, payment method, customer,
                and merchant. Save filter presets for quick access.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50 border">
              <div className="flex items-center gap-3 mb-3">
                <Download className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Export & Reporting</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Export transaction data in multiple formats (CSV, PDF, Excel). Generate
                custom reports with detailed analytics and insights.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-4">Payment Lifecycle & Matching Flow</h2>
          <div className="mt-6 p-6 rounded-lg bg-muted/50 border">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Transaction Creation</h4>
                  <p className="text-sm text-muted-foreground">Merchant creates transaction record with reference, amount, and customer details</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Payment Receipt</h4>
                  <p className="text-sm text-muted-foreground">Payment is received from customer through payment gateway or bank transfer</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Automatic Matching</h4>
                  <p className="text-sm text-muted-foreground">System attempts to match payment with transaction using references, amounts, and dates</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold">Match Result</h4>
                  <p className="text-sm text-muted-foreground">Payment is either matched successfully or flagged as unmatched for manual review</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  5
                </div>
                <div>
                  <h4 className="font-semibold">Reconciliation & Settlement</h4>
                  <p className="text-sm text-muted-foreground">Matched payments are reconciled and included in settlement batches</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </Section>
    </div>
  )
}
