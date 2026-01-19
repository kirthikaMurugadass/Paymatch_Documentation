"use client"

import { motion } from "framer-motion"
import { Users2, UserPlus, Shield, CheckCircle2, AlertCircle, Mail, Settings, UserX, Key } from "lucide-react"

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

export function TeamPage() {
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
          {t("team.title")}
        </motion.h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed font-serif">
          {t("team.description")}
        </p>
      </Section>

      <Section>
        <GlassCard>
          <Card className="border-0 bg-transparent">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                <Users2 className="h-6 w-6 text-red-600 dark:text-red-500" />
              </div>
              <CardTitle className="text-2xl font-serif">{t("team.overview")}</CardTitle>
              <CardDescription className="text-base font-serif">
                {t("team.overviewQuestion")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed font-serif mb-4">
                {t("team.overviewDescription1")}
              </p>
              <p className="text-muted-foreground leading-relaxed font-serif">
                {t("team.overviewDescription2")}
              </p>
            </CardContent>
          </Card>
        </GlassCard>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("team.purposeBenefits")}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <CheckCircle2 className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("team.whyUseTeamManagement")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                  <li>• {t("team.whyUseTeamManagementItem1")}</li>
                  <li>• {t("team.whyUseTeamManagementItem2")}</li>
                  <li>• {t("team.whyUseTeamManagementItem3")}</li>
                  <li>• {t("team.whyUseTeamManagementItem4")}</li>
                  <li>• {t("team.whyUseTeamManagementItem5")}</li>
                  <li>• {t("team.whyUseTeamManagementItem6")}</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800/10 dark:bg-gray-700/20 border border-gray-500/20 dark:border-gray-500/10">
                  <Users2 className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </div>
                <CardTitle className="font-serif">{t("team.whoShouldUseIt")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                  <li>• {t("team.whoShouldUseItItem1")}</li>
                  <li>• {t("team.whoShouldUseItItem2")}</li>
                  <li>• {t("team.whoShouldUseItItem3")}</li>
                  <li>• {t("team.whoShouldUseItItem4")}</li>
                  <li>• {t("team.whoShouldUseItItem5")}</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("team.stepByStepGuide")}</h2>
        <div className="space-y-6">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <UserPlus className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("team.step1Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("team.step1Item1")}</li>
                  <li>{t("team.step1Item2")}</li>
                  <li>{t("team.step1Item3")}</li>
                  <li>{t("team.step1Item4")}</li>
                  <li>{t("team.step1Item5")}</li>
                  <li>{t("team.step1Item6")}</li>
                  <li>{t("team.step1Item7")}</li>
                  <li>{t("team.step1Item8")}</li>
                  <li>{t("team.step1Item9")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <Shield className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("team.step2Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("team.step2Item1")}</li>
                  <li>{t("team.step2Item2")}</li>
                  <li>{t("team.step2Item3")}</li>
                  <li>{t("team.step2Item4")}</li>
                  <li>{t("team.step2Item5")}</li>
                  <li>{t("team.step2Item6")}</li>
                  <li>{t("team.step2Item7")}</li>
                  <li>{t("team.step2Item8")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20 dark:border-red-500/10">
                  <UserX className="h-5 w-5 text-red-600 dark:text-red-500" />
                </div>
                <CardTitle className="font-serif">{t("team.step3Title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground font-serif list-decimal list-inside">
                  <li>{t("team.step3Item1")}</li>
                  <li>{t("team.step3Item2")}</li>
                  <li>{t("team.step3Item3")}</li>
                  <li>{t("team.step3Item4")}</li>
                  <li>{t("team.step3Item5")}</li>
                  <li>{t("team.step3Item6")}</li>
                  <li>{t("team.step3Item7")}</li>
                  <li>{t("team.step3Item8")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("team.commonRoles")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Key className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("team.administrator")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("team.administratorDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Settings className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("team.manager")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("team.managerDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <Users2 className="h-6 w-6 text-red-600 dark:text-red-500 mb-2" />
                <CardTitle className="font-serif">{t("team.staff")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("team.staffDescription")}
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
              <CardTitle className="font-serif">{t("team.tipsBestPractices")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                <li>• {t("team.tipsItem1")}</li>
                <li>• {t("team.tipsItem2")}</li>
                <li>• {t("team.tipsItem3")}</li>
                <li>• {t("team.tipsItem4")}</li>
                <li>• {t("team.tipsItem5")}</li>
                <li>• {t("team.tipsItem6")}</li>
                <li>• {t("team.tipsItem7")}</li>
                <li>• {t("team.tipsItem8")}</li>
              </ul>
            </CardContent>
          </Card>
        </GlassCard>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold font-serif mb-6">{t("team.useCases")}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <CardTitle className="font-serif">{t("team.growingBusiness")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif mb-3">
                  {t("team.growingBusinessDescription1")}
                </p>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("team.growingBusinessDescription2")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <CardTitle className="font-serif">{t("team.roleChange")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-serif mb-3">
                  {t("team.roleChangeDescription1")}
                </p>
                <p className="text-sm text-muted-foreground font-serif">
                  {t("team.roleChangeDescription2")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>
    </div>
  )
}
