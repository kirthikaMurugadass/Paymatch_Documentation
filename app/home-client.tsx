"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react"

import { Section } from "@/components/section"
import { GlassCard } from "@/components/glass-card"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function HomePageClient() {
  return (
    <div className="space-y-20">

      {/* ================= HERO SECTION ================= */}
      <Section className="pt-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 via-red-700 to-black p-8 sm:p-12 md:p-16 text-white shadow-soft-lg">

          {/* Animated overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/40 via-red-800/40 to-black/60 animate-pulse" />

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-15">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* Glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-600 via-red-700 to-black blur-xl opacity-30" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-3xl"
          >
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to PayMatch Documentation
            </h1>

            <p className="mb-10 text-lg md:text-xl text-white/90 leading-relaxed">
              Your comprehensive guide to PayMatch — the intelligent payment
              reconciliation platform that automates transaction matching,
              settlement, and financial reporting.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-red-600 shadow-soft hover:shadow-glow transition-all"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-all"
                >
                  View Features
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ================= QUICK START ================= */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-3xl md:text-4xl font-bold gradient-text"
        >
          Quick Start
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}
          <GlassCard>
            <Card className="group border-0 bg-transparent">
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/20 shadow-soft">
                  <Zap className="h-5 w-5 text-red-500 group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle>Key Features</CardTitle>
                <CardDescription>
                  Discover the powerful features that make PayMatch stand out.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </GlassCard>

          {/* Card 2 */}
          <GlassCard delay={0.1}>
            <Card className="group border-0 bg-transparent">
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-red-600/20 shadow-soft">
                  <Shield className="h-5 w-5 text-red-600 group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle>Security & Compliance</CardTitle>
                <CardDescription>
                  Multi-layer protection and regulatory compliance standards.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/security"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </GlassCard>

          {/* Card 3 */}
          <GlassCard delay={0.2}>
            <Card className="group border-0 bg-transparent">
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-red-700/20 shadow-soft">
                  <TrendingUp className="h-5 w-5 text-red-700 group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle>Architecture</CardTitle>
                <CardDescription>
                  Explore PayMatch’s scalable and secure system architecture.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/architecture"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </GlassCard>

        </div>
      </Section>

      {/* ================= INTRODUCTION ================= */}
      <Section>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-3xl md:text-4xl font-bold gradient-text"
          >
            Introduction
          </motion.h2>

          <p className="text-muted-foreground">
            PayMatch automates the reconciliation of incoming payments with
            merchant transactions using intelligent matching rules.
          </p>

          <p className="text-muted-foreground">
            This documentation covers workflows, settlement lifecycles, system
            architecture, and API integration for merchants and developers.
          </p>

          <div className="mt-8 rounded-xl border bg-muted/60 p-6 shadow-soft">
            <h3 className="mb-4 text-xl font-semibold">What You’ll Learn</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Core reconciliation concepts</li>
              <li>Payment matching workflows</li>
              <li>Settlement lifecycle</li>
              <li>Security and compliance</li>
              <li>Dashboard modules</li>
              <li>System architecture & APIs</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
