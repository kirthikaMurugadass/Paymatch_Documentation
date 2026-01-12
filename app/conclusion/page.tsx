"use client"

import { Section } from "@/components/section"
import { GlassCard } from "@/components/glass-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, BookOpen, Code, Shield } from "lucide-react"
import Link from "next/link"

export default function ConclusionPage() {
  return (
    <div className="space-y-12">
      <Section>
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Conclusion</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Thank you for exploring the PayMatch documentation. We hope this guide has
            provided you with a comprehensive understanding of PayMatch's payment reconciliation
            platform, automated matching capabilities, and how to effectively use the system
            to streamline your reconciliation processes.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold mb-6">Key Takeaways</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                  <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Automated Reconciliation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  PayMatch automates payment matching and reconciliation, reducing manual work
                  and errors while maintaining high accuracy rates through intelligent matching algorithms.
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                  <Code className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Intelligent Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Advanced matching algorithms automatically match payments with transactions
                  using multiple criteria, achieving high accuracy rates and reducing exceptions.
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Comprehensive Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Detailed reconciliation reports, matching analytics, and export capabilities
                  provide full visibility into your payment reconciliation process.
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.3}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                  <BookOpen className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>Comprehensive Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Extensive documentation, support resources, and a dedicated team to help
                  you succeed with PayMatch.
                </p>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-4">Next Steps</h2>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="p-6 rounded-lg bg-muted/50 border">
              <h3 className="text-xl font-semibold mb-3">For Developers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside mb-4">
                <li>Review the API documentation for integration</li>
                <li>Set up your development environment</li>
                <li>Integrate PayMatch with your payment sources</li>
                <li>Configure matching rules and test reconciliation</li>
              </ul>
              <Link
                href="/architecture"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                View API Documentation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="p-6 rounded-lg bg-muted/50 border">
              <h3 className="text-xl font-semibold mb-3">For Merchants</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside mb-4">
                <li>Complete merchant registration and verification</li>
                <li>Configure matching rules and preferences</li>
                <li>Connect payment sources and transaction data</li>
                <li>Start automatic payment reconciliation</li>
              </ul>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Explore Features
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="p-8 rounded-lg bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 border border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              PayMatch is ready to help you automate your payment reconciliation. Whether
              you're a developer looking to integrate or a merchant ready to streamline reconciliation,
              we're here to support you every step of the way.
            </p>
            <div className="flex gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Back to Home
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/faqs"
                className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
              >
                View FAQs
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
