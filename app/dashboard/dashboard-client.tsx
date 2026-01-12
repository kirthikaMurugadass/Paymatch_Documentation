"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Users, FileText, Activity, ArrowRight } from "lucide-react"

import { Section } from "@/components/section"
import { GlassCard } from "@/components/glass-card"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

export default function DashboardClient() {
  return (
    <div className="space-y-20">

      {/* ================= DASHBOARD HEADER ================= */}
      <Section>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Admin Dashboard
        </motion.h1>

        <p className="mt-4 text-muted-foreground text-lg">
          Overview of system activity, users, and reports
        </p>
      </Section>

      {/* ================= DASHBOARD CARDS ================= */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* USERS CARD */}
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Users className="h-6 w-6 text-blue-500 mb-2" />
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  Manage users, roles, and permissions
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Link
                  href="/dashboard/users"
                  className="inline-flex items-center gap-1 text-primary font-medium"
                >
                  Manage Users
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </GlassCard>

          {/* ACTIVITY CARD */}
          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Activity className="h-6 w-6 text-green-500 mb-2" />
                <CardTitle>Activity Logs</CardTitle>
                <CardDescription>
                  Track login, logout, and system activities
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Link
                  href="/dashboard/activity"
                  className="inline-flex items-center gap-1 text-primary font-medium"
                >
                  View Logs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </GlassCard>

          {/* REPORTS CARD */}
          <GlassCard delay={0.4}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <FileText className="h-6 w-6 text-purple-500 mb-2" />
                <CardTitle>Reports</CardTitle>
                <CardDescription>
                  View transaction and settlement reports
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Link
                  href="/dashboard/reports"
                  className="inline-flex items-center gap-1 text-primary font-medium"
                >
                  View Reports
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </GlassCard>

        </div>
      </Section>

    </div>
  )
}
