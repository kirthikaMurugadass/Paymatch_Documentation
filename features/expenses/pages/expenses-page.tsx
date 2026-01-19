"use client"

import { motion } from "framer-motion"
import { DollarSign, Plus, Receipt, CheckCircle2, AlertCircle, FolderOpen, Tag, TrendingUp, Upload } from "lucide-react"

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

export function ExpensesPage() {
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
          {t("expenses.title")}
        </motion.h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed font-serif">
          {t("expenses.description")}
        </p>
      </Section>

      <Section>
        <GlassCard>
          <Card className="border-0 bg-transparent">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                <DollarSign className="h-6 w-6 text-red-600 dark:text-red-500" />
              </div>
              <CardTitle className="text-2xl font-serif">{t("expenses.overview")}</CardTitle>
              <CardDescription className="text-base font-serif">
                {t("expenses.overviewQuestion")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed font-serif mb-4">
                {t("expenses.overviewDescription1")}
              </p>
              <p className="text-muted-foreground leading-relaxed font-serif">
                {t("expenses.overviewDescription2")}
              </p>
            </CardContent>
          </Card>
        </GlassCard>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("expenses.purposeBenefits")}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("expenses.whyUseExpenses")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                  <li>• {t("expenses.whyUseExpensesItem1")}</li>
                  <li>• {t("expenses.whyUseExpensesItem2")}</li>
                  <li>• {t("expenses.whyUseExpensesItem3")}</li>
                  <li>• {t("expenses.whyUseExpensesItem4")}</li>
                  <li>• {t("expenses.whyUseExpensesItem5")}</li>
                  <li>• {t("expenses.whyUseExpensesItem6")}</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800/10 dark:bg-gray-700/20 border border-gray-500/20 dark:border-gray-500/10">
                  <DollarSign className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </div>
                <CardTitle className="font-serif">{t("expenses.whoShouldUseIt")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                  <li>• {t("expenses.whoShouldUseItItem1")}</li>
                  <li>• {t("expenses.whoShouldUseItItem2")}</li>
                  <li>• {t("expenses.whoShouldUseItItem3")}</li>
                  <li>• {t("expenses.whoShouldUseItItem4")}</li>
                  <li>• {t("expenses.whoShouldUseItItem5")}</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("expenses.stepByStepGuide")}</h2>
        <div className="space-y-6">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <Plus className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("expenses.step1Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("expenses.step1Item1")}</li>
                  <li>{t("expenses.step1Item2")}</li>
                  <li>{t("expenses.step1Item3")}</li>
                  <li>{t("expenses.step1Item4")}</li>
                  <li>{t("expenses.step1Item5")}</li>
                  <li>{t("expenses.step1Item6")}</li>
                  <li>{t("expenses.step1Item7")}</li>
                  <li>{t("expenses.step1Item8")}</li>
                  <li>{t("expenses.step1Item9")}</li>
                  <li>{t("expenses.step1Item10")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <Upload className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("expenses.step2Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("expenses.step2Item1")}</li>
                  <li>{t("expenses.step2Item2")}</li>
                  <li>{t("expenses.step2Item3")}</li>
                  <li>{t("expenses.step2Item4")}</li>
                  <li>{t("expenses.step2Item5")}</li>
                  <li>{t("expenses.step2Item6")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <TrendingUp className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("expenses.step3Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("expenses.step3Item1")}</li>
                  <li>{t("expenses.step3Item2")}</li>
                  <li>{t("expenses.step3Item3")}</li>
                  <li>{t("expenses.step3Item4")}</li>
                  <li>{t("expenses.step3Item5")}</li>
                  <li>{t("expenses.step3Item6")}</li>
                  <li>{t("expenses.step3Item7")}</li>
                  <li>{t("expenses.step3Item8")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("expenses.expenseCategories")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Tag className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("expenses.travelTransportation")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("expenses.travelTransportationDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <FolderOpen className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("expenses.officeSupplies")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("expenses.officeSuppliesDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Receipt className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("expenses.utilitiesServices")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("expenses.utilitiesServicesDescription")}
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
              <CardTitle className="font-serif">{t("expenses.tipsBestPractices")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                <li>• {t("expenses.tipsItem1")}</li>
                <li>• {t("expenses.tipsItem2")}</li>
                <li>• {t("expenses.tipsItem3")}</li>
                <li>• {t("expenses.tipsItem4")}</li>
                <li>• {t("expenses.tipsItem5")}</li>
                <li>• {t("expenses.tipsItem6")}</li>
                <li>• {t("expenses.tipsItem7")}</li>
                <li>• {t("expenses.tipsItem8")}</li>
              </ul>
            </CardContent>
          </Card>
        </GlassCard>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("expenses.useCases")}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <CardTitle className="font-serif">{t("expenses.smallBusinessOwner")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif mb-3">
                  {t("expenses.smallBusinessOwnerDescription1")}
                </p>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("expenses.smallBusinessOwnerDescription2")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <CardTitle className="font-serif">{t("expenses.freelancer")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif mb-3">
                  {t("expenses.freelancerDescription1")}
                </p>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("expenses.freelancerDescription2")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>
    </div>
  )
}
