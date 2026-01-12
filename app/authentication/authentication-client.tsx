"use client"

import { Section } from "@/components/section"
import { GlassCard } from "@/components/glass-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogIn, Shield, Key, UserCheck, Lock, RefreshCw } from "lucide-react"

export function AuthenticationPageClient() {
  return (
    <div className="space-y-12">
      <Section>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text dark:gradient-text-2">
            Authentication & User Onboarding
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            PayMatch implements a secure authentication system and streamlined onboarding process
            that ensures only authorized users can access the platform and perform actions based
            on their role.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                  <LogIn className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>User Onboarding Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
                  <li>User registers with email and creates password</li>
                  <li>Email verification link is sent</li>
                  <li>User verifies email address</li>
                  <li>Merchant completes business information and verification</li>
                  <li>Admin approves merchant account (if required)</li>
                  <li>User completes profile setup and preferences</li>
                  <li>User gains access to appropriate dashboard</li>
                </ol>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.1}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                  <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Security Measures</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Password hashing with bcrypt</li>
                  <li>• JWT tokens for session management</li>
                  <li>• Rate limiting on login attempts</li>
                  <li>• IP-based security checks</li>
                  <li>• Account lockout after failed attempts</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.2}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                  <Key className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Password Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Minimum 8 characters required</li>
                  <li>• Must include uppercase, lowercase, and numbers</li>
                  <li>• Password reset via secure email link</li>
                  <li>• Password expiration policies</li>
                  <li>• Password history to prevent reuse</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>

          <GlassCard delay={0.3}>
            <Card className="border-0 bg-transparent">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                  <UserCheck className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>Multi-Factor Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Optional 2FA via authenticator apps</li>
                  <li>• SMS-based verification codes</li>
                  <li>• Email verification for sensitive operations</li>
                  <li>• Biometric authentication support</li>
                </ul>
              </CardContent>
            </Card>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-4">Authentication Flow Diagram</h2>
          <div className="mt-6 p-6 rounded-lg bg-muted/50 border">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">1. Registration</h4>
                  <p className="text-sm text-muted-foreground">User creates account with email and password</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Key className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">2. Email Verification</h4>
                  <p className="text-sm text-muted-foreground">User verifies email address via verification link</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">3. Profile Setup</h4>
                  <p className="text-sm text-muted-foreground">Merchant completes business information and verification documents</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <RefreshCw className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">4. Account Activation</h4>
                  <p className="text-sm text-muted-foreground">Admin approves account and user gains full platform access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
