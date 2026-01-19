"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  TrendingUp, 
  Play, 
  Check, 
  UserPlus, 
  Building2, 
  LogIn, 
  Package, 
  FileText, 
  Receipt,
  ArrowRightIcon
} from "lucide-react"

import { Section } from "@/components/section"
import { GlassCard } from "@/components/glass-card"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/lib/translations"

export function HomePage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const processSteps = [
    { icon: UserPlus, title: t("home.processStep1Title"), description: t("home.processStep1Description") },
    { icon: Building2, title: t("home.processStep2Title"), description: t("home.processStep2Description") },
    { icon: LogIn, title: t("home.processStep3Title"), description: t("home.processStep3Description") },
    { icon: Package, title: t("home.processStep4Title"), description: t("home.processStep4Description") },
    { icon: FileText, title: t("home.processStep5Title"), description: t("home.processStep5Description") },
    { icon: Receipt, title: t("home.processStep6Title"), description: t("home.processStep6Description") },
  ]

  return (
    <div className="space-y-24 md:space-y-32 intro-page">

      {/* ================= HERO SECTION - What is PayMatch ================= */}
      <Section className="pt-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6 shadow-sm"
          >
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">{t("home.intelligentPaymentReconciliation")}</span>
          </motion.div>

          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground intro-heading-welcome">
            {t("home.welcomeTitle")}
          </h1>

          <p className="mb-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {t("home.welcomeDescription")}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-lg bg-card border border-border shadow-sm"
            >
              <h3 className="text-lg font-semibold text-card-foreground mb-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {t("home.theProblem")}
              </h3>
              <p className="text-muted-foreground">
                {t("home.theProblemDescription")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-lg bg-card border border-border shadow-sm"
            >
              <h3 className="text-lg font-semibold text-card-foreground mb-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {t("home.theSolution")}
              </h3>
              <p className="text-muted-foreground">
                {t("home.theSolutionDescription")}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* ================= PRICING HIGHLIGHT SECTION ================= */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            >
              {t("home.chooseYourPlan")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              {t("home.chooseYourPlanDescription")}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Free Trial Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative rounded-lg bg-card border border-border p-8 transition-opacity shadow-sm hover:opacity-90"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-card-foreground">{t("home.freeTrial")}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-card-foreground">{t("home.freeTrialPrice")}</span>
                    <span className="text-muted-foreground">{t("home.perMonth")}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{t("home.freeTrialFeature1")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{t("home.freeTrialFeature2")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{t("home.freeTrialFeature3")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{t("home.freeTrialFeature4")}</span>
                  </li>
                </ul>
                <motion.button
                  whileHover={{ opacity: 0.9 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-lg bg-secondary text-secondary-foreground dark:bg-[#1A1A1A] px-6 py-3 font-semibold transition-opacity flex items-center justify-center gap-2"
                >
                  {t("home.startFreeTrial")}
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </motion.div>

              {/* Pro Plan Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ opacity: 0.95 }}
                className="relative rounded-lg bg-card border-2 border-primary p-8 transition-opacity shadow-sm"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {t("home.popular")}
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-card-foreground">{t("home.proPlan")}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-card-foreground">{t("home.proPlanPrice")}</span>
                    <span className="text-muted-foreground">{t("home.perMonth")}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{t("home.proPlanFeature1")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{t("home.proPlanFeature2")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{t("home.proPlanFeature3")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{t("home.proPlanFeature4")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{t("home.proPlanFeature5")}</span>
                  </li>
                </ul>
                <motion.button
                  whileHover={{ opacity: 0.9 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold transition-opacity flex items-center justify-center gap-2"
                >
                  {t("home.getStarted")}
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </motion.div>
            </div>
        </div>
      </Section>

      {/* ================= DEMO VIDEO SECTION ================= */}
      {/* <Section>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:!text-white mb-4 intro-heading-video">
              {t("home.seePayMatchInAction")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("home.seePayMatchDescription")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl aspect-video group"
          >
           
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Play className="h-12 w-12 text-white ml-1" />
                  </div>
                  <p className="text-white/70 text-sm">{t("home.demoVideo")}</p>
                </div>
              </div>
            </div>

           
            {!isVideoPlaying && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsVideoPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all cursor-pointer group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-24 rounded-full bg-primary flex items-center justify-center transition-opacity group-hover:opacity-90"
                >
                  <Play className="h-10 w-10 text-white ml-1" />
                </motion.div>
              </motion.button>
            )}

      
            {isVideoPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-gray-800 flex items-center justify-center"
              >
                <div className="text-white text-center">
                  <p className="text-lg mb-2">{t("home.videoPlayer")}</p>
                  <p className="text-sm text-gray-400">{t("home.replaceWithVideo")}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Section> */}

      {/* ================= ANIMATED PROCESS FLOWCHART ================= */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 intro-heading-how-it-works">
              {t("home.howItWorks")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("home.howItWorksDescription")}
            </p>
          </motion.div>

          {/* Desktop Flowchart */}
          <div className="hidden lg:block relative py-8">
            {/* Connecting lines */}
            <div className="absolute inset-0 flex items-center pointer-events-none" style={{ top: '50%', transform: 'translateY(-50%)' }}>
              {processSteps.slice(0, -1).map((_, index) => {
                return (
                  <motion.div
                    key={index}
                    className="flex-1 h-0.5 mx-2 bg-border"
                    style={{ 
                      backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 5px, currentColor 5px, currentColor 10px)',
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  />
                )
              })}
            </div>

            <div className="grid grid-cols-6 gap-4 relative z-10">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="relative"
                  >
                    <GlassCard className="text-center p-6 h-full group">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm z-20">
                        {index + 1}
                      </div>
                      <motion.div
                        className="mb-4 flex justify-center"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-16 h-16 rounded-full bg-muted border border-border flex items-center justify-center transition-all">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </motion.div>
                      <h3 className="font-semibold text-card-foreground mb-2 text-sm">
                        {step.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {step.description}
                      </p>
                    </GlassCard>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Mobile/Tablet Vertical Flowchart */}
          <div className="lg:hidden space-y-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connecting line */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      className="absolute left-8 top-full w-0.5 h-6 bg-border origin-top"
                    />
                  )}

                  <GlassCard className="flex items-center gap-4 p-6 relative">
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm z-10">
                      {index + 1}
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <div className="w-16 h-16 rounded-full bg-muted border border-border flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <ArrowRightIcon className="h-5 w-5 text-primary flex-shrink-0" />
                    )}
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* ================= FEATURES OVERVIEW ================= */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 intro-heading-features">
            {t("home.keyFeatures")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("home.keyFeaturesDescription")}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <GlassCard>
            <Card className="group border-0 bg-transparent">
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted border border-border">
                  <Zap className="h-5 w-5 text-primary transition-opacity group-hover:opacity-80" />
                </div>
                <CardTitle>{t("home.keyFeatures")}</CardTitle>
                <CardDescription>
                  {t("home.keyFeaturesDescription")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  {t("common.learnMore")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="group border-0 bg-transparent">
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted border border-border">
                  <Shield className="h-5 w-5 text-primary transition-opacity group-hover:opacity-80" />
                </div>
                <CardTitle>{t("home.securityCompliance")}</CardTitle>
                <CardDescription>
                  {t("home.securityComplianceDescription")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/security"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  {t("common.learnMore")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="group border-0 bg-transparent">
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted border border-border">
                  <TrendingUp className="h-5 w-5 text-primary transition-opacity group-hover:opacity-80" />
                </div>
                <CardTitle>{t("home.architecture")}</CardTitle>
                <CardDescription>
                  {t("home.architectureDescription")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/architecture"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  {t("common.learnMore")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>
    </div>
  )
}
