"use client"

import { motion } from "framer-motion"
import { Layers, ShieldCheck, Server, ArrowRight } from "lucide-react"
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

export default function ArchitecturePage() {
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
          System Architecture
        </motion.h1>

        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Overview of PayMatch system design, infrastructure components,
          and secure integration architecture.
        </p>
      </Section>

      {/* ================= ARCHITECTURE CARDS ================= */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* FRONTEND */}
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Layers className="h-6 w-6 text-blue-500 mb-2" />
                <CardTitle>Frontend Layer</CardTitle>
                <CardDescription>
                  Modern user interfaces for Admin, Merchant, and Customer dashboards
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Built using Next.js and Tailwind CSS, providing responsive,
                  accessible, and high-performance user experiences.
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          {/* BACKEND */}
          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Server className="h-6 w-6 text-green-500 mb-2" />
                <CardTitle>Backend Services</CardTitle>
                <CardDescription>
                  Business logic, transaction processing, and reconciliation engine
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Handles transaction matching, settlement calculations,
                  audit logs, and integration with payment gateways.
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          {/* SECURITY */}
          <GlassCard delay={0.4}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <ShieldCheck className="h-6 w-6 text-purple-500 mb-2" />
                <CardTitle>Security & Compliance</CardTitle>
                <CardDescription>
                  Comprehensive security infrastructure
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Implements role-based access control, encrypted data transfer,
                  secure authentication, and compliance monitoring.
                </p>
              </CardContent>
            </Card>
          </GlassCard>

        </div>
      </Section>

      {/* ================= ARCHITECTURE FLOW ================= */}
      <Section>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Architecture Flow</h2>

          <ul>
            <li>User interacts with frontend dashboards</li>
            <li>Requests are securely sent to backend APIs</li>
            <li>Transactions are processed and matched</li>
            <li>Settlement calculations are performed</li>
            <li>Reports and logs are generated</li>
          </ul>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-primary font-medium mt-6"
          >
            Go to Dashboard
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

    </div>
  )
}
