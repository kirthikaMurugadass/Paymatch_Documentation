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
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/lib/translations"

export function FeaturesPage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  const features = [
    {
      icon: CreditCard,
      titleKey: "features.automatedPaymentMatching",
      descriptionKey: "features.automatedPaymentMatchingDescription",
      color: "red",
    },
    {
      icon: Shield,
      titleKey: "features.advancedSecurity",
      descriptionKey: "features.advancedSecurityDescription",
      color: "dark-gray",
    },
    {
      icon: Zap,
      titleKey: "features.realtimeReconciliation",
      descriptionKey: "features.realtimeReconciliationDescription",
      color: "red",
    },
    {
      icon: BarChart3,
      titleKey: "features.reconciliationAnalytics",
      descriptionKey: "features.reconciliationAnalyticsDescription",
      color: "dark-gray",
    },
    {
      icon: Users,
      titleKey: "features.roleBasedAccess",
      descriptionKey: "features.roleBasedAccessDescription",
      color: "red",
    },
    {
      icon: Globe,
      titleKey: "features.multiplePaymentSources",
      descriptionKey: "features.multiplePaymentSourcesDescription",
      color: "dark-gray",
    },
    {
      icon: Lock,
      titleKey: "features.dataProtection",
      descriptionKey: "features.dataProtectionDescription",
      color: "red",
    },
    {
      icon: TrendingUp,
      titleKey: "features.settlementReconciliation",
      descriptionKey: "features.settlementReconciliationDescription",
      color: "dark-gray",
    },
    {
      icon: Bell,
      titleKey: "features.matchingNotifications",
      descriptionKey: "features.matchingNotificationsDescription",
      color: "red",
    },
    {
      icon: Settings,
      titleKey: "features.configurableMatchingRules",
      descriptionKey: "features.configurableMatchingRulesDescription",
      color: "dark-gray",
    },
  ]
  return (
    <div className="space-y-12">
      <Section>
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            {t("features.title")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
          >
            {t("features.description")}
          </motion.p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colorClasses = {
              red: "bg-muted text-primary border border-border",
              "dark-gray": "bg-muted text-foreground border border-border",
            }
            return (
              <GlassCard key={feature.titleKey} delay={index * 0.1}>
                <Card className="border-0 bg-transparent h-full">
                  <CardHeader>
                    <div className={`mb-2 flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{t(feature.titleKey as any)}</CardTitle>
                    <CardDescription>{t(feature.descriptionKey as any)}</CardDescription>
                  </CardHeader>
                </Card>
              </GlassCard>
            )
          })}
        </div>
      </Section>

      <Section>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-4">{t("features.featureHighlights")}</h2>
          <div className="grid gap-6 md:grid-cols-2 mt-8">
            <div className="p-6 rounded-lg bg-muted/50 border">
              <h3 className="text-xl font-semibold mb-3">{t("features.intelligentPaymentMatching")}</h3>
              <p className="text-muted-foreground">
                {t("features.intelligentPaymentMatchingDescription")}
              </p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50 border">
              <h3 className="text-xl font-semibold mb-3">{t("features.exceptionHandling")}</h3>
              <p className="text-muted-foreground">
                {t("features.exceptionHandlingDescription")}
              </p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50 border">
              <h3 className="text-xl font-semibold mb-3">{t("features.reconciliationReporting")}</h3>
              <p className="text-muted-foreground">
                {t("features.reconciliationReportingDescription")}
              </p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50 border">
              <h3 className="text-xl font-semibold mb-3">{t("features.dashboardAnalytics")}</h3>
              <p className="text-muted-foreground">
                {t("features.dashboardAnalyticsDescription")}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
