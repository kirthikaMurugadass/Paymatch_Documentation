"use client"

import { motion } from "framer-motion"
import { Repeat, Plus, Calendar, CheckCircle2, AlertCircle, Clock, Settings, Play, Pause } from "lucide-react"

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

export function RecurringInvoicesPage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  return (
    <div className="space-y-12">
      <Section>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-serif"
        >
          {t("recurringInvoices.title")}
        </motion.h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed font-serif">
          {t("recurringInvoices.description")}
        </p>
      </Section>

      <Section>
        <GlassCard>
          <Card className="border-0 bg-transparent">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                <Repeat className="h-6 w-6 text-red-600 dark:text-red-500" />
              </div>
              <CardTitle className="text-2xl font-serif">{t("recurringInvoices.overview")}</CardTitle>
              <CardDescription className="text-base font-serif">
                {t("recurringInvoices.overviewQuestion")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed font-serif mb-4">
                {t("recurringInvoices.overviewDescription1")}
              </p>
              <p className="text-muted-foreground leading-relaxed font-serif">
                {t("recurringInvoices.overviewDescription2")}
              </p>
            </CardContent>
          </Card>
        </GlassCard>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("recurringInvoices.purposeBenefits")}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("recurringInvoices.whyUseRecurringInvoices")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                  <li>• {t("recurringInvoices.whyUseRecurringInvoicesItem1")}</li>
                  <li>• {t("recurringInvoices.whyUseRecurringInvoicesItem2")}</li>
                  <li>• {t("recurringInvoices.whyUseRecurringInvoicesItem3")}</li>
                  <li>• {t("recurringInvoices.whyUseRecurringInvoicesItem4")}</li>
                  <li>• {t("recurringInvoices.whyUseRecurringInvoicesItem5")}</li>
                  <li>• {t("recurringInvoices.whyUseRecurringInvoicesItem6")}</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800/10 dark:bg-gray-700/20 border border-gray-500/20 dark:border-gray-500/10">
                  <Repeat className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </div>
                <CardTitle className="font-serif">{t("recurringInvoices.whoShouldUseIt")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                  <li>• {t("recurringInvoices.whoShouldUseItItem1")}</li>
                  <li>• {t("recurringInvoices.whoShouldUseItItem2")}</li>
                  <li>• {t("recurringInvoices.whoShouldUseItItem3")}</li>
                  <li>• {t("recurringInvoices.whoShouldUseItItem4")}</li>
                  <li>• {t("recurringInvoices.whoShouldUseItItem5")}</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("recurringInvoices.stepByStepGuide")}</h2>
        <div className="space-y-6">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <Plus className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("recurringInvoices.step1Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("recurringInvoices.step1Item1")}</li>
                  <li>{t("recurringInvoices.step1Item2")}</li>
                  <li>{t("recurringInvoices.step1Item3")}</li>
                  <li>{t("recurringInvoices.step1Item4")}</li>
                  <li>{t("recurringInvoices.step1Item5")}</li>
                  <li>{t("recurringInvoices.step1Item6")}</li>
                  <li>{t("recurringInvoices.step1Item7")}</li>
                  <li>{t("recurringInvoices.step1Item8")}</li>
                  <li>{t("recurringInvoices.step1Item9")}</li>
                  <li>{t("recurringInvoices.step1Item10")}</li>
                  <li>{t("recurringInvoices.step1Item11")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <Settings className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("recurringInvoices.step2Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("recurringInvoices.step2Item1")}</li>
                  <li>{t("recurringInvoices.step2Item2")}</li>
                  <li>{t("recurringInvoices.step2Item3")}</li>
                  <li>{t("recurringInvoices.step2Item4")}</li>
                  <li>{t("recurringInvoices.step2Item5")}</li>
                  <li>{t("recurringInvoices.step2Item6")}</li>
                  <li>{t("recurringInvoices.step2Item7")}</li>
                  <li>{t("recurringInvoices.step2Item8")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <Calendar className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("recurringInvoices.step3Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("recurringInvoices.step3Item1")}</li>
                  <li>{t("recurringInvoices.step3Item2")}</li>
                  <li>{t("recurringInvoices.step3Item3")}</li>
                  <li>{t("recurringInvoices.step3Item4")}</li>
                  <li>{t("recurringInvoices.step3Item5")}</li>
                  <li>{t("recurringInvoices.step3Item6")}</li>
                  <li>{t("recurringInvoices.step3Item7")}</li>
                  <li>{t("recurringInvoices.step3Item8")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("recurringInvoices.billingFrequencies")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Calendar className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("recurringInvoices.monthly")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("recurringInvoices.monthlyDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Calendar className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("recurringInvoices.quarterly")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("recurringInvoices.quarterlyDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Calendar className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("recurringInvoices.annually")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("recurringInvoices.annuallyDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <GlassCard>
          <Card className="border-0 bg-transparent">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-500" />
              </div>
              <CardTitle className="font-serif">{t("recurringInvoices.tipsBestPractices")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                <li>• {t("recurringInvoices.tipsItem1")}</li>
                <li>• {t("recurringInvoices.tipsItem2")}</li>
                <li>• {t("recurringInvoices.tipsItem3")}</li>
                <li>• {t("recurringInvoices.tipsItem4")}</li>
                <li>• {t("recurringInvoices.tipsItem5")}</li>
                <li>• {t("recurringInvoices.tipsItem6")}</li>
                <li>• {t("recurringInvoices.tipsItem7")}</li>
                <li>• {t("recurringInvoices.tipsItem8")}</li>
              </ul>
            </CardContent>
          </Card>
        </GlassCard>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("recurringInvoices.useCases")}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <CardTitle className="font-serif">{t("recurringInvoices.saasSubscription")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif mb-3">
                  {t("recurringInvoices.saasSubscriptionDescription1")}
                </p>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("recurringInvoices.saasSubscriptionDescription2")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <CardTitle className="font-serif">{t("recurringInvoices.monthlyRetainer")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif mb-3">
                  {t("recurringInvoices.monthlyRetainerDescription1")}
                </p>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("recurringInvoices.monthlyRetainerDescription2")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>
    </div>
  )
}
