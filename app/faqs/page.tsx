"use client"

import { Section } from "@/components/section"
import { GlassCard } from "@/components/glass-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/lib/translations"

export default function FAQsPage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  const faqs = Array.from({ length: 10 }, (_, i) => ({
    question: t(`faqs.question${i + 1}` as any),
    answer: t(`faqs.answer${i + 1}` as any),
  }))

  return (
    <div className="space-y-12">
      <Section>
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">{t("faqs.title")}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{t("faqs.description")}</p>
        </div>
      </Section>

      <Section>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard key={index} delay={index * 0.05}>
              <Card className="border-0 bg-transparent">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-1">
                      <HelpCircle className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{faq.question}</CardTitle>
                      <CardContent className="p-0">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="p-6 rounded-lg bg-muted/50 border">
            <h2 className="text-2xl font-bold mb-4">{t("faqs.stillHaveQuestions")}</h2>
            <p className="text-muted-foreground mb-4">{t("faqs.stillHaveQuestionsDescription")}</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• {t("faqs.supportEmail")}</li>
              <li>• {t("faqs.supportDocumentation")}</li>
              <li>• {t("faqs.supportCommunity")}</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
