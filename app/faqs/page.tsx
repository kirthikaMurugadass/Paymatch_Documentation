"use client"

import { Section } from "@/components/section"
import { GlassCard } from "@/components/glass-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How does PayMatch automatically match payments with transactions?",
    answer:
      "PayMatch uses intelligent matching algorithms that compare incoming payments with merchant transactions based on transaction references, payment amounts, dates, customer information, and other matching criteria. The system automatically identifies matches and flags exceptions for manual review.",
  },
  {
    question: "What happens when a payment cannot be matched?",
    answer:
      "When a payment cannot be automatically matched, it is flagged as an exception and appears in the unmatched payments section. Merchants can review these payments, see why they couldn't be matched, and manually match them with the correct transaction or resolve discrepancies.",
  },
  {
    question: "How often does PayMatch run reconciliation?",
    answer:
      "Reconciliation schedules can be configured per merchant. Common options include daily, weekly, or monthly reconciliation runs. The system can also perform real-time matching as payments are received, depending on your configuration.",
  },
  {
    question: "How do I get started as a merchant?",
    answer:
      "To get started, register for a merchant account through the PayMatch registration process. Complete your business information, verify your email, and submit required verification documents. Once your account is approved by an administrator, you can configure matching rules, connect payment sources, and start reconciling payments.",
  },
  {
    question: "What payment sources can PayMatch reconcile?",
    answer:
      "PayMatch can reconcile payments from various sources including bank transfers, payment gateways, digital wallets, and other payment processors. The system integrates with multiple payment providers to automatically receive payment data for matching.",
  },
  {
    question: "Can I integrate PayMatch with my accounting system?",
    answer:
      "Yes, PayMatch provides a comprehensive RESTful API that allows you to integrate reconciliation data with your existing accounting systems, ERP software, and financial reporting tools. We offer detailed API documentation and developer support.",
  },
  {
    question: "What reconciliation reports are available?",
    answer:
      "PayMatch provides various reconciliation reports including matching status reports, unmatched payment reports, reconciliation summaries, and settlement reports. All reports can be exported in CSV, PDF, or Excel formats for accounting and audit purposes.",
  },
  {
    question: "How accurate is the automatic payment matching?",
    answer:
      "PayMatch's matching algorithms are highly accurate, typically achieving matching rates of 90% or higher depending on data quality. The system uses multiple matching criteria and can be configured with custom matching rules to improve accuracy for specific business needs.",
  },
  {
    question: "What kind of support is available?",
    answer:
      "PayMatch offers comprehensive support including documentation, API guides, email support, and for enterprise customers, dedicated account managers. We also provide training on reconciliation workflows and best practices.",
  },
  {
    question: "Is PayMatch compliant with data protection regulations?",
    answer:
      "Yes, PayMatch is compliant with major data protection regulations including GDPR (for EU users), PCI DSS (for payment data), and other regional requirements. We implement strict data protection measures, encryption, and privacy controls to secure all payment and transaction data.",
  },
]

export default function FAQsPage() {
  return (
    <div className="space-y-12">
      <Section>
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Find answers to common questions about PayMatch, its features, and how to use
            the platform effectively.
          </p>
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
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-4">
              If you can't find the answer you're looking for, please don't hesitate to
              reach out to our support team. We're here to help!
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Email: support@paymatch.app</li>
              <li>• Documentation: Check our comprehensive API documentation</li>
              <li>• Community: Join our developer community for discussions</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
