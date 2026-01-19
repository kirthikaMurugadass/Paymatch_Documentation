"use client"

import { motion } from "framer-motion"
import { User, Edit, Mail, Phone, MapPin, CheckCircle2, AlertCircle, Shield, Bell } from "lucide-react"

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

export function ProfilePage() {
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
          {t("profile.title")}
        </motion.h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed font-serif">
          {t("profile.description")}
        </p>
      </Section>

      <Section>
        <GlassCard>
          <Card className="border-0 bg-transparent">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                <User className="h-6 w-6 text-red-600 dark:text-red-500" />
              </div>
              <CardTitle className="text-2xl font-serif">{t("profile.overview")}</CardTitle>
              <CardDescription className="text-base font-serif">
                {t("profile.overviewQuestion")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed font-serif mb-4">
                {t("profile.overviewDescription1")}
              </p>
              <p className="text-muted-foreground leading-relaxed font-serif">
                {t("profile.overviewDescription2")}
              </p>
            </CardContent>
          </Card>
        </GlassCard>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("profile.purposeBenefits")}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("profile.whyUpdateYourProfile")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                  <li>• {t("profile.whyUpdateYourProfileItem1")}</li>
                  <li>• {t("profile.whyUpdateYourProfileItem2")}</li>
                  <li>• {t("profile.whyUpdateYourProfileItem3")}</li>
                  <li>• {t("profile.whyUpdateYourProfileItem4")}</li>
                  <li>• {t("profile.whyUpdateYourProfileItem5")}</li>
                  <li>• {t("profile.whyUpdateYourProfileItem6")}</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800/10 dark:bg-gray-700/20 border border-gray-500/20 dark:border-gray-500/10">
                  <User className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </div>
                <CardTitle className="font-serif">{t("profile.whoShouldUseIt")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                  <li>• {t("profile.whoShouldUseItItem1")}</li>
                  <li>• {t("profile.whoShouldUseItItem2")}</li>
                  <li>• {t("profile.whoShouldUseItItem3")}</li>
                  <li>• {t("profile.whoShouldUseItItem4")}</li>
                  <li>• {t("profile.whoShouldUseItItem5")}</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("profile.stepByStepGuide")}</h2>
        <div className="space-y-6">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <Edit className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("profile.step1Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("profile.step1Item1")}</li>
                  <li>{t("profile.step1Item2")}</li>
                  <li>{t("profile.step1Item3")}</li>
                  <li>{t("profile.step1Item4")}</li>
                  <li>{t("profile.step1Item5")}</li>
                  <li>{t("profile.step1Item6")}</li>
                  <li>{t("profile.step1Item7")}</li>
                  <li>{t("profile.step1Item8")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <Bell className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("profile.step2Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("profile.step2Item1")}</li>
                  <li>{t("profile.step2Item2")}</li>
                  <li>{t("profile.step2Item3")}</li>
                  <li>{t("profile.step2Item4")}</li>
                  <li>{t("profile.step2Item5")}</li>
                  <li>{t("profile.step2Item6")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <Shield className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("profile.step3Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("profile.step3Item1")}</li>
                  <li>{t("profile.step3Item2")}</li>
                  <li>{t("profile.step3Item3")}</li>
                  <li>{t("profile.step3Item4")}</li>
                  <li>{t("profile.step3Item5")}</li>
                  <li>{t("profile.step3Item6")}</li>
                  <li>{t("profile.step3Item7")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("profile.profileInformation")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Mail className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("profile.contactDetails")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("profile.contactDetailsDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <MapPin className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("profile.businessAddress")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("profile.businessAddressDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Bell className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("profile.notifications")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("profile.notificationsDescription")}
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
              <CardTitle className="font-serif">{t("profile.tipsBestPractices")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                <li>• {t("profile.tipsItem1")}</li>
                <li>• {t("profile.tipsItem2")}</li>
                <li>• {t("profile.tipsItem3")}</li>
                <li>• {t("profile.tipsItem4")}</li>
                <li>• {t("profile.tipsItem5")}</li>
                <li>• {t("profile.tipsItem6")}</li>
                <li>• {t("profile.tipsItem7")}</li>
                <li>• {t("profile.tipsItem8")}</li>
              </ul>
            </CardContent>
          </Card>
        </GlassCard>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("profile.useCases")}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <CardTitle className="font-serif">{t("profile.useCase1Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif mb-3">
                  {t("profile.useCase1Description1")}
                </p>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("profile.useCase1Description2")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <CardTitle className="font-serif">{t("profile.useCase2Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif mb-3">
                  {t("profile.useCase2Description1")}
                </p>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("profile.useCase2Description2")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>
    </div>
  )
}
