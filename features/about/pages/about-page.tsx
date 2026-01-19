"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/section"
import { GlassCard } from "@/components/glass-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Globe, Award } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/lib/translations"

export function AboutPage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
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
            {t("about.title")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
          >
            {t("about.description")}
          </motion.p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-muted border border-border">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>{t("about.ourMission")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("about.ourMissionDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-muted border border-border">
                  <Users className="h-5 w-5 text-foreground" />
                </div>
                <CardTitle>{t("about.whoWeServe")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("about.whoWeServeDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-muted border border-border">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>{t("about.paymentMatching")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("about.paymentMatchingDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.3}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-muted border border-border">
                  <Award className="h-5 w-5 text-foreground" />
                </div>
                <CardTitle>{t("about.industryStandards")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("about.industryStandardsDescription")}
                </p>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-4">{t("about.platformOverview")}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            {t("about.platformOverviewDescription")}
          </p>
          <ul className="space-y-3 list-disc list-inside text-muted-foreground">
            <li>{t("about.platformItem1")}</li>
            <li>{t("about.platformItem2")}</li>
            <li>{t("about.platformItem3")}</li>
            <li>{t("about.platformItem4")}</li>
            <li>{t("about.platformItem5")}</li>
            <li>{t("about.platformItem6")}</li>
            <li>{t("about.platformItem7")}</li>
            <li>{t("about.platformItem8")}</li>
          </ul>
        </div>
      </Section>
    </div>
  )
}
