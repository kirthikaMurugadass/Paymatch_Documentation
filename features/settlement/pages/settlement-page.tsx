"use client"

import { motion } from "framer-motion"
import { Wallet, Clock, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

import { Section } from "@/components/section"
import { GlassCard } from "@/components/glass-card"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

export function SettlementPage() {
  return (
    <div className="space-y-24">

      {/* ================= PAGE HEADER ================= */}
      <Section>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Settlement Process
        </motion.h1>

        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Understand how PayMatch handles settlement processing,
          reconciliation cycles, and fund disbursement securely.
        </p>
      </Section>

      {/* ================= SETTLEMENT CARDS ================= */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* SETTLEMENT FLOW */}
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Wallet className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle>Settlement Flow</CardTitle>
                <CardDescription>
                  End-to-end settlement processing workflow
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Transactions are grouped based on settlement cycles,
                  validated, reconciled, and prepared for fund transfer.
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          {/* PROCESSING TIME */}
          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Clock className="h-6 w-6 text-gray-700 dark:text-gray-300 mb-2" />
                <CardTitle>Processing Time</CardTitle>
                <CardDescription>
                  Typical settlement processing durations
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Settlements are processed within predefined time windows
                  depending on merchant agreements and banking schedules.
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          {/* CONFIRMATION */}
          <GlassCard delay={0.4}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <CheckCircle className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle>Settlement Confirmation</CardTitle>
                <CardDescription>
                  Status tracking and confirmation
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Merchants receive settlement confirmations along with
                  detailed reports for transparency and auditing.
                </p>
              </CardContent>
            </Card>
          </GlassCard>

        </div>
      </Section>

      {/* ================= SETTLEMENT STEPS ================= */}
      <Section>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Settlement Steps</h2>

          <ol>
            <li>Transaction validation and reconciliation</li>
            <li>Settlement batch creation</li>
            <li>Fund transfer initiation</li>
            <li>Confirmation and reporting</li>
          </ol>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-primary font-medium mt-6"
          >
            Back to Dashboard
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

    </div>
  )
}
