"use client"

import { motion } from "framer-motion"
import { Wallet, CreditCard, Receipt, Download, CheckCircle2, AlertCircle, Calendar, FileText } from "lucide-react"

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

export function BillingPage() {
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
          {t("billing.title")}
        </motion.h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed font-serif">
          {t("billing.description")}
        </p>
      </Section>

      <Section>
        <GlassCard>
          <Card className="border-0 bg-transparent">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                <Wallet className="h-6 w-6 text-red-600 dark:text-red-500" />
              </div>
              <CardTitle className="text-2xl font-serif">{t("billing.overview")}</CardTitle>
              <CardDescription className="text-base font-serif">
                {t("billing.overviewQuestion")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed font-serif mb-4">
                {t("billing.overviewDescription1")}
              </p>
              <p className="text-muted-foreground leading-relaxed font-serif">
                {t("billing.overviewDescription2")}
              </p>
            </CardContent>
          </Card>
        </GlassCard>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("billing.purposeBenefits")}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("billing.whyUseBilling")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                  <li>• {t("billing.whyUseBillingItem1")}</li>
                  <li>• {t("billing.whyUseBillingItem2")}</li>
                  <li>• {t("billing.whyUseBillingItem3")}</li>
                  <li>• {t("billing.whyUseBillingItem4")}</li>
                  <li>• {t("billing.whyUseBillingItem5")}</li>
                  <li>• {t("billing.whyUseBillingItem6")}</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800/10 dark:bg-gray-700/20 border border-gray-500/20 dark:border-gray-500/10">
                  <Wallet className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </div>
                <CardTitle className="font-serif">{t("billing.whoShouldUseIt")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                  <li>• {t("billing.whoShouldUseItItem1")}</li>
                  <li>• {t("billing.whoShouldUseItItem2")}</li>
                  <li>• {t("billing.whoShouldUseItItem3")}</li>
                  <li>• {t("billing.whoShouldUseItItem4")}</li>
                  <li>• {t("billing.whoShouldUseItItem5")}</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("billing.stepByStepGuide")}</h2>
        <div className="space-y-6">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <FileText className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("billing.step1Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("billing.step1Item1")}</li>
                  <li>{t("billing.step1Item2")}</li>
                  <li>{t("billing.step1Item3")}</li>
                  <li>{t("billing.step1Item4")}</li>
                  <li>{t("billing.step1Item5")}</li>
                  <li>{t("billing.step1Item6")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <CreditCard className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("billing.step2Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("billing.step2Item1")}</li>
                  <li>{t("billing.step2Item2")}</li>
                  <li>{t("billing.step2Item3")}</li>
                  <li>{t("billing.step2Item4")}</li>
                  <li>{t("billing.step2Item5")}</li>
                  <li>{t("billing.step2Item6")}</li>
                  <li>{t("billing.step2Item7")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <Download className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("billing.step3Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("billing.step3Item1")}</li>
                  <li>{t("billing.step3Item2")}</li>
                  <li>{t("billing.step3Item3")}</li>
                  <li>{t("billing.step3Item4")}</li>
                  <li>{t("billing.step3Item5")}</li>
                  <li>{t("billing.step3Item6")}</li>
                  <li>{t("billing.step3Item7")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("billing.keyFeatures")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Calendar className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("billing.billingCycles")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("billing.billingCyclesDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Receipt className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("billing.invoiceHistory")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("billing.invoiceHistoryDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <CreditCard className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("billing.paymentSecurity")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("billing.paymentSecurityDescription")}
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
              <CardTitle className="font-serif">{t("billing.tipsBestPractices")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                <li>• {t("billing.tipsItem1")}</li>
                <li>• {t("billing.tipsItem2")}</li>
                <li>• {t("billing.tipsItem3")}</li>
                <li>• {t("billing.tipsItem4")}</li>
                <li>• {t("billing.tipsItem5")}</li>
                <li>• {t("billing.tipsItem6")}</li>
                <li>• {t("billing.tipsItem7")}</li>
                <li>• {t("billing.tipsItem8")}</li>
              </ul>
            </CardContent>
          </Card>
        </GlassCard>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("billing.useCases")}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <CardTitle className="font-serif">{t("billing.planUpgrade")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif mb-3">
                  {t("billing.planUpgradeDescription1")}
                </p>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("billing.planUpgradeDescription2")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <CardTitle className="font-serif">{t("billing.paymentMethodUpdate")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif mb-3">
                  {t("billing.paymentMethodUpdateDescription1")}
                </p>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("billing.paymentMethodUpdateDescription2")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>
    </div>
  )
}
