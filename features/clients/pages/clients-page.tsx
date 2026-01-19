"use client"

import { motion } from "framer-motion"
import { Users, UserPlus, Building2, MapPin, FileText, CheckCircle2, AlertCircle } from "lucide-react"

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

export function ClientsPage() {
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
          {t("clients.title")}
        </motion.h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed font-serif">
          {t("clients.description")}
        </p>
      </Section>

      <Section>
        <GlassCard>
          <Card className="border-0 bg-transparent">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                <Users className="h-6 w-6 text-red-600 dark:text-red-500" />
              </div>
              <CardTitle className="text-2xl font-serif">{t("clients.overview")}</CardTitle>
              <CardDescription className="text-base font-serif">
                {t("clients.overviewQuestion")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed font-serif mb-4">
                {t("clients.overviewDescription1")}
              </p>
              <p className="text-muted-foreground leading-relaxed font-serif">
                {t("clients.overviewDescription2")}
              </p>
            </CardContent>
          </Card>
        </GlassCard>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("clients.purposeBenefits")}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("clients.whyUseClients")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                  <li>• {t("clients.whyUseClientsItem1")}</li>
                  <li>• {t("clients.whyUseClientsItem2")}</li>
                  <li>• {t("clients.whyUseClientsItem3")}</li>
                  <li>• {t("clients.whyUseClientsItem4")}</li>
                  <li>• {t("clients.whyUseClientsItem5")}</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800/10 dark:bg-gray-700/20 border border-gray-500/20 dark:border-gray-500/10">
                  <Users className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </div>
                <CardTitle className="font-serif">{t("clients.whoShouldUseIt")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                  <li>• {t("clients.whoShouldUseItItem1")}</li>
                  <li>• {t("clients.whoShouldUseItItem2")}</li>
                  <li>• {t("clients.whoShouldUseItItem3")}</li>
                  <li>• {t("clients.whoShouldUseItItem4")}</li>
                  <li>• {t("clients.whoShouldUseItItem5")}</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("clients.stepByStepGuide")}</h2>
        <div className="space-y-6">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <UserPlus className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("clients.step1Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("clients.step1Item1")}</li>
                  <li>{t("clients.step1Item2")}</li>
                  <li>{t("clients.step1Item3")}</li>
                  <li>{t("clients.step1Item4")}</li>
                  <li>{t("clients.step1Item5")}</li>
                  <li>{t("clients.step1Item6")}</li>
                  <li>{t("clients.step1Item7")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <FileText className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("clients.step2Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("clients.step2Item1")}</li>
                  <li>{t("clients.step2Item2")}</li>
                  <li>{t("clients.step2Item3")}</li>
                  <li>{t("clients.step2Item4")}</li>
                  <li>{t("clients.step2Item5")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <Building2 className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("clients.step3Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("clients.step3Item1")}</li>
                  <li>{t("clients.step3Item2")}</li>
                  <li>{t("clients.step3Item3")}</li>
                  <li>{t("clients.step3Item4")}</li>
                  <li>{t("clients.step3Item5")}</li>
                  <li>{t("clients.step3Item6")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("clients.keyFeatures")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <MapPin className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("clients.multipleAddresses")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("clients.multipleAddressesDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <FileText className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("clients.transactionHistory")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("clients.transactionHistoryDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <CheckCircle2 className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("clients.customFields")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("clients.customFieldsDescription")}
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
              <CardTitle className="font-serif">{t("clients.tipsBestPractices")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                <li>• {t("clients.tipsItem1")}</li>
                <li>• {t("clients.tipsItem2")}</li>
                <li>• {t("clients.tipsItem3")}</li>
                <li>• {t("clients.tipsItem4")}</li>
                <li>• {t("clients.tipsItem5")}</li>
                <li>• {t("clients.tipsItem6")}</li>
              </ul>
            </CardContent>
          </Card>
        </GlassCard>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("clients.useCases")}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <CardTitle className="font-serif">{t("clients.serviceBasedBusiness")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif mb-3">
                  {t("clients.serviceBasedBusinessDescription1")}
                </p>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("clients.serviceBasedBusinessDescription2")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <CardTitle className="font-serif">{t("clients.ecommerceRetail")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif mb-3">
                  {t("clients.ecommerceRetailDescription1")}
                </p>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("clients.ecommerceRetailDescription2")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>
    </div>
  )
}
