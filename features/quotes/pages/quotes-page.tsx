"use client"

import { motion } from "framer-motion"
import { FileText, Plus, Send, CheckCircle2, XCircle, Clock, AlertCircle, ArrowRight } from "lucide-react"

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

export function QuotesPage() {
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
          {t("quotes.title")}
        </motion.h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed font-serif">
          {t("quotes.description")}
        </p>
      </Section>

      <Section>
        <GlassCard>
          <Card className="border-0 bg-transparent">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                <FileText className="h-6 w-6 text-red-600 dark:text-red-500" />
              </div>
              <CardTitle className="text-2xl font-serif">{t("quotes.overview")}</CardTitle>
              <CardDescription className="text-base font-serif">
                {t("quotes.overviewQuestion")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed font-serif mb-4">
                {t("quotes.overviewDescription1")}
              </p>
              <p className="text-muted-foreground leading-relaxed font-serif">
                {t("quotes.overviewDescription2")}
              </p>
            </CardContent>
          </Card>
        </GlassCard>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("quotes.purposeBenefits")}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("quotes.whyUseQuotes")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                  <li>• {t("quotes.whyUseQuotesItem1")}</li>
                  <li>• {t("quotes.whyUseQuotesItem2")}</li>
                  <li>• {t("quotes.whyUseQuotesItem3")}</li>
                  <li>• {t("quotes.whyUseQuotesItem4")}</li>
                  <li>• {t("quotes.whyUseQuotesItem5")}</li>
                  <li>• {t("quotes.whyUseQuotesItem6")}</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800/10 dark:bg-gray-700/20 border border-gray-500/20 dark:border-gray-500/10">
                  <FileText className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </div>
                <CardTitle className="font-serif">{t("quotes.whoShouldUseIt")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                  <li>• {t("quotes.whoShouldUseItItem1")}</li>
                  <li>• {t("quotes.whoShouldUseItItem2")}</li>
                  <li>• {t("quotes.whoShouldUseItItem3")}</li>
                  <li>• {t("quotes.whoShouldUseItItem4")}</li>
                  <li>• {t("quotes.whoShouldUseItItem5")}</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("quotes.stepByStepGuide")}</h2>
        <div className="space-y-6">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <Plus className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("quotes.step1Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("quotes.step1Item1")}</li>
                  <li>{t("quotes.step1Item2")}</li>
                  <li>{t("quotes.step1Item3")}</li>
                  <li>{t("quotes.step1Item4")}</li>
                  <li>{t("quotes.step1Item5")}</li>
                  <li>{t("quotes.step1Item6")}</li>
                  <li>{t("quotes.step1Item7")}</li>
                  <li>{t("quotes.step1Item8")}</li>
                  <li>{t("quotes.step1Item9")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <Send className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("quotes.step2Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("quotes.step2Item1")}</li>
                  <li>{t("quotes.step2Item2")}</li>
                  <li>{t("quotes.step2Item3")}</li>
                  <li>{t("quotes.step2Item4")}</li>
                  <li>{t("quotes.step2Item5")}</li>
                  <li>{t("quotes.step2Item6")}</li>
                  <li>{t("quotes.step2Item7")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <ArrowRight className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("quotes.step3Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("quotes.step3Item1")}</li>
                  <li>{t("quotes.step3Item2")}</li>
                  <li>{t("quotes.step3Item3")}</li>
                  <li>{t("quotes.step3Item4")}</li>
                  <li>{t("quotes.step3Item5")}</li>
                  <li>{t("quotes.step3Item6")}</li>
                  <li>{t("quotes.step3Item7")}</li>
                  <li>{t("quotes.step3Item8")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("quotes.quoteStatusTracking")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Clock className="h-6 w-6 text-gray-700 dark:text-gray-300 mb-2" />
                <CardTitle className="font-serif">{t("quotes.draft")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("quotes.draftDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Send className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("quotes.sent")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("quotes.sentDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <CheckCircle2 className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("quotes.accepted")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("quotes.acceptedDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.3}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <XCircle className="h-6 w-6 text-gray-700 dark:text-gray-300 mb-2" />
                <CardTitle className="font-serif">{t("quotes.rejected")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("quotes.rejectedDescription")}
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
              <CardTitle className="font-serif">{t("quotes.tipsBestPractices")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                <li>• {t("quotes.tipsItem1")}</li>
                <li>• {t("quotes.tipsItem2")}</li>
                <li>• {t("quotes.tipsItem3")}</li>
                <li>• {t("quotes.tipsItem4")}</li>
                <li>• {t("quotes.tipsItem5")}</li>
                <li>• {t("quotes.tipsItem6")}</li>
                <li>• {t("quotes.tipsItem7")}</li>
                <li>• {t("quotes.tipsItem8")}</li>
              </ul>
            </CardContent>
          </Card>
        </GlassCard>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("quotes.useCases")}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <CardTitle className="font-serif">{t("quotes.projectBasedServices")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif mb-3">
                  {t("quotes.projectBasedServicesDescription1")}
                </p>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("quotes.projectBasedServicesDescription2")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <CardTitle className="font-serif">{t("quotes.b2bSalesProcess")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif mb-3">
                  {t("quotes.b2bSalesProcessDescription1")}
                </p>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("quotes.b2bSalesProcessDescription2")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>
    </div>
  )
}
