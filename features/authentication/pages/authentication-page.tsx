"use client"

import { Section } from "@/components/section"
import { GlassCard } from "@/components/glass-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogIn, Shield, Key, UserCheck, Lock, RefreshCw } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/lib/translations"

export function AuthenticationPage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  return (
    <div className="space-y-12">
      <Section>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t("authentication.title")}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {t("authentication.description")}
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-muted border border-border">
                  <LogIn className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>{t("authentication.userOnboardingFlow")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
                  <li>{t("authentication.onboardingItem1")}</li>
                  <li>{t("authentication.onboardingItem2")}</li>
                  <li>{t("authentication.onboardingItem3")}</li>
                  <li>{t("authentication.onboardingItem4")}</li>
                  <li>{t("authentication.onboardingItem5")}</li>
                  <li>{t("authentication.onboardingItem6")}</li>
                  <li>{t("authentication.onboardingItem7")}</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-muted border border-border">
                  <Shield className="h-5 w-5 text-foreground" />
                </div>
                <CardTitle>{t("authentication.securityMeasures")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {t("authentication.securityItem1")}</li>
                  <li>• {t("authentication.securityItem2")}</li>
                  <li>• {t("authentication.securityItem3")}</li>
                  <li>• {t("authentication.securityItem4")}</li>
                  <li>• {t("authentication.securityItem5")}</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-muted border border-border">
                  <Key className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>{t("authentication.passwordManagement")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {t("authentication.passwordItem1")}</li>
                  <li>• {t("authentication.passwordItem2")}</li>
                  <li>• {t("authentication.passwordItem3")}</li>
                  <li>• {t("authentication.passwordItem4")}</li>
                  <li>• {t("authentication.passwordItem5")}</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.3}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-muted border border-border">
                  <UserCheck className="h-5 w-5 text-foreground" />
                </div>
                <CardTitle>{t("authentication.multiFactorAuthentication")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {t("authentication.mfaItem1")}</li>
                  <li>• {t("authentication.mfaItem2")}</li>
                  <li>• {t("authentication.mfaItem3")}</li>
                  <li>• {t("authentication.mfaItem4")}</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-4">{t("authentication.authenticationFlowDiagram")}</h2>
          <div className="mt-6 p-6 rounded-lg bg-muted/50 border">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">1. {t("authentication.registration")}</h4>
                  <p className="text-sm text-muted-foreground">{t("authentication.registrationDescription")}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Key className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">2. {t("authentication.emailVerification")}</h4>
                  <p className="text-sm text-muted-foreground">{t("authentication.emailVerificationDescription")}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">3. {t("authentication.profileSetup")}</h4>
                  <p className="text-sm text-muted-foreground">{t("authentication.profileSetupDescription")}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <RefreshCw className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">4. {t("authentication.accountActivation")}</h4>
                  <p className="text-sm text-muted-foreground">{t("authentication.accountActivationDescription")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
