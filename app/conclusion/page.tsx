"use client"

import { Section } from "@/components/section"
import { GlassCard } from "@/components/glass-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, BookOpen, Code, Shield } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/lib/translations"

export default function ConclusionPage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  return (
    <div className="space-y-12">
      <Section>
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">{t("conclusion.title")}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{t("conclusion.description")}</p>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold mb-6">{t("conclusion.keyTakeaways")}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <Shield className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle>{t("conclusion.automatedReconciliation")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{t("conclusion.automatedReconciliationDescription")}</p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800/10 dark:bg-gray-700/20 border border-gray-500/20 dark:border-gray-500/10">
                  <Code className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </div>
                <CardTitle>{t("conclusion.intelligentMatching")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{t("conclusion.intelligentMatchingDescription")}</p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle>{t("conclusion.comprehensiveReporting")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{t("conclusion.comprehensiveReportingDescription")}</p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.3}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                  <BookOpen className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>{t("conclusion.comprehensiveSupport")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{t("conclusion.comprehensiveSupportDescription")}</p>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-4">{t("conclusion.nextSteps")}</h2>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="p-6 rounded-lg bg-muted/50 border">
              <h3 className="text-xl font-semibold mb-3">{t("conclusion.forDevelopers")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside mb-4">
                <li>{t("conclusion.forDevelopersItem1")}</li>
                <li>{t("conclusion.forDevelopersItem2")}</li>
                <li>{t("conclusion.forDevelopersItem3")}</li>
                <li>{t("conclusion.forDevelopersItem4")}</li>
              </ul>
              <Link href="/architecture" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                {t("conclusion.viewApiDocumentation")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="p-6 rounded-lg bg-muted/50 border">
              <h3 className="text-xl font-semibold mb-3">{t("conclusion.forMerchants")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside mb-4">
                <li>{t("conclusion.forMerchantsItem1")}</li>
                <li>{t("conclusion.forMerchantsItem2")}</li>
                <li>{t("conclusion.forMerchantsItem3")}</li>
                <li>{t("conclusion.forMerchantsItem4")}</li>
              </ul>
              <Link href="/features" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                {t("conclusion.exploreFeatures")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="p-8 rounded-lg bg-gradient-to-br from-red-600/10 via-red-800/10 to-gray-900/10 dark:from-red-950/20 dark:via-gray-900/20 dark:to-gray-950/20 border border-red-500/20 dark:border-red-500/10">
            <h2 className="text-2xl font-bold mb-4">{t("conclusion.readyToGetStarted")}</h2>
            <p className="text-muted-foreground mb-6">{t("conclusion.readyToGetStartedDescription")}</p>
            <div className="flex gap-4">
              <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                {t("conclusion.backToHome")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/faqs" className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent">
                {t("conclusion.viewFaqs")}
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
