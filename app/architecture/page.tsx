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
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/lib/translations"

export default function ArchitecturePage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
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
          {t("architecture.title")}
        </motion.h1>

        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          {t("architecture.description")}
        </p>
      </Section>

      {/* ================= ARCHITECTURE CARDS ================= */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* FRONTEND */}
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Layers className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle>{t("architecture.frontendLayer")}</CardTitle>
                <CardDescription>{t("architecture.frontendLayerDescription")}</CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("architecture.frontendLayerContent")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          {/* BACKEND */}
          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Server className="h-6 w-6 text-gray-700 dark:text-gray-300 mb-2" />
                <CardTitle>{t("architecture.backendServices")}</CardTitle>
                <CardDescription>{t("architecture.backendServicesDescription")}</CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("architecture.backendServicesContent")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          {/* SECURITY */}
          <GlassCard delay={0.4}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <ShieldCheck className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle>{t("architecture.securityCompliance")}</CardTitle>
                <CardDescription>{t("architecture.securityComplianceDescription")}</CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("architecture.securityComplianceContent")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

        </div>
      </Section>

      {/* ================= ARCHITECTURE FLOW ================= */}
      <Section>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>{t("architecture.architectureFlow")}</h2>

          <ul>
            <li>{t("architecture.architectureFlowItem1")}</li>
            <li>{t("architecture.architectureFlowItem2")}</li>
            <li>{t("architecture.architectureFlowItem3")}</li>
            <li>{t("architecture.architectureFlowItem4")}</li>
            <li>{t("architecture.architectureFlowItem5")}</li>
          </ul>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-primary font-medium mt-6"
          >
            {t("architecture.goToDashboard")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

    </div>
  )
}
