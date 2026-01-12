"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/section"
import { GlassCard } from "@/components/glass-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Globe, Award } from "lucide-react"

export function AboutPageClient() {
  return (
    <div className="space-y-12">
      <Section>
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text dark:gradient-text-2"
          >
            About PayMatch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
          >
            PayMatch is an intelligent payment reconciliation platform designed to automate the matching
            of incoming payments with merchant transactions. The platform reduces manual reconciliation
            work, minimizes errors, and accelerates the settlement process for businesses of all sizes.
          </motion.p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                  <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To eliminate manual payment reconciliation work by providing an automated, intelligent
                  matching system that accurately matches incoming payments with transactions, reducing
                  errors and processing time while maintaining the highest security standards.
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                  <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Who We Serve</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  PayMatch serves merchants who need to reconcile payments, administrators who manage
                  the platform and user accounts, and customers who make payments. Each user role has
                  specific permissions and access tailored to their responsibilities.
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                  <Globe className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Payment Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  PayMatch automatically matches incoming payments with merchant transactions using
                  intelligent algorithms that compare transaction references, amounts, dates, and
                  customer information to ensure accurate reconciliation.
                </p>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.3}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                  <Award className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>Industry Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Compliant with PCI DSS, GDPR, and other international standards to ensure
                  the highest level of security and data protection.
                </p>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-4">Platform Overview</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            PayMatch provides a comprehensive payment reconciliation solution, including:
          </p>
          <ul className="space-y-3 list-disc list-inside text-muted-foreground">
            <li>Automated payment matching using intelligent algorithms</li>
            <li>Real-time transaction monitoring and reconciliation status</li>
            <li>Automated settlement and reconciliation reporting</li>
            <li>Multi-role user management with role-based access control</li>
            <li>Advanced security features and data encryption</li>
            <li>Comprehensive API for integration with payment gateways and accounting systems</li>
            <li>Dashboard analytics showing matching rates and reconciliation metrics</li>
            <li>Exception handling for unmatched payments and discrepancies</li>
          </ul>
        </div>
      </Section>
    </div>
  )
}
