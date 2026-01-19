import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { defaultMetadata } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
      >
        <script dangerouslySetInnerHTML={{ __html: `(() => {
          try {
            const key = 'paymatch-theme'
            const stored = localStorage.getItem(key)
            if (stored === 'light' || stored === 'dark') {
              document.documentElement.classList.add(stored)
              document.documentElement.classList.remove(stored === 'dark' ? 'light' : 'dark')
            } else {
              const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
              document.documentElement.classList.add(prefersDark ? 'dark' : 'light')
            }
          } catch (e) {
            // ignore
          }
        })();` }} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="paymatch-theme"
        >
          <LanguageProvider>
            <div className="min-h-screen bg-background relative">
              <Header />
              <div className="flex">
                <Sidebar />
                <main className="flex-1 lg:ml-64 pt-4">
                  <div className="container mx-auto px-4 sm:px-6 pb-16">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
