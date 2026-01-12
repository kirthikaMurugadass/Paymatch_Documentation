import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SecurityPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Security</h1>

      <div className="grid md:grid-cols-2 gap-6">
        
        <Card>
          <CardHeader>
            <CardTitle>Authentication</CardTitle>
            <CardDescription>
              Multi-layer access security
            </CardDescription>
          </CardHeader>

          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li>JWT-based authentication</li>
              <li>Role-based access control</li>
              <li>Session validation</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Protection</CardTitle>
            <CardDescription>
              Secure transaction handling
            </CardDescription>
          </CardHeader>

          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li>Encrypted data storage</li>
              <li>HTTPS enforced</li>
              <li>Secure API access</li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
