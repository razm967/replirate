import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarNav } from "@/app/components/sidebar-nav"
import { ThemeProvider } from "@/app/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RepliRate - Master UI Development",
  description: "Practice and improve your UI development skills by replicating real-world components",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            <SidebarNav />
            <div className="flex-1 md:pl-64">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
