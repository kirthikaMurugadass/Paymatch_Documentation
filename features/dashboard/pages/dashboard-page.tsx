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
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/lib/translations"

export function DashboardPage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
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
          {t("dashboard.title")}
        </motion.h1>

        <p className="mt-4 text-muted-foreground text-lg">
          {t("dashboard.description")}
        </p>
      </Section>

      {/* ================= DASHBOARD CARDS ================= */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* USERS CARD */}
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Users className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle>{t("dashboard.userManagement")}</CardTitle>
                <CardDescription>
                  {t("dashboard.userManagementDescription")}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Link
                  href="/dashboard/users"
                  className="inline-flex items-center gap-1 text-primary font-medium"
                >
                  {t("dashboard.manageUsers")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </GlassCard>

          {/* ACTIVITY CARD */}
          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Activity className="h-6 w-6 text-gray-700 dark:text-gray-300 mb-2" />
                <CardTitle>{t("dashboard.activityLogs")}</CardTitle>
                <CardDescription>
                  {t("dashboard.activityLogsDescription")}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Link
                  href="/dashboard/activity"
                  className="inline-flex items-center gap-1 text-primary font-medium"
                >
                  {t("dashboard.viewLogs")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </GlassCard>

          {/* REPORTS CARD */}
          <GlassCard delay={0.4}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <FileText className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle>{t("dashboard.reports")}</CardTitle>
                <CardDescription>
                  {t("dashboard.reportsDescription")}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Link
                  href="/dashboard/reports"
                  className="inline-flex items-center gap-1 text-primary font-medium"
                >
                  {t("dashboard.viewReports")}
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
