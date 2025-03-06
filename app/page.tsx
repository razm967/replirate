import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import Link from "next/link"
import { ArrowRight, Code2, Palette, Star } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Pattern */}
      <section className="relative overflow-hidden py-20 md:py-32 px-4">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:bg-gradient-to-t dark:from-background"></div>
        <div className="relative mx-auto max-w-6xl text-center">
          <div className="inline-block animate-float">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 mb-6 ring-1 ring-purple-300/30">
              ✨ Master UI Development
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-transparent bg-clip-text animate-gradient">
            RepliRate
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Level up your UI skills by replicating real-world components. Get instant feedback and improve with each challenge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="group">
              <Link href="/library">
                Start Practice
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/examples">
                View Examples
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Everything you need to <span className="text-purple-600 dark:text-purple-400">master UI development</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-all border-purple-100 dark:border-purple-900/50">
            <CardHeader>
              <div className="mb-4 inline-block rounded-lg bg-purple-100 p-3 dark:bg-purple-900/30">
                <Palette className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle>Choose Theme</CardTitle>
              <CardDescription>
                Select from various UI themes and color schemes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 group-hover:scale-110 transition-transform"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-green-500 group-hover:scale-110 transition-transform delay-75"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-yellow-500 group-hover:scale-110 transition-transform delay-150"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all border-blue-100 dark:border-blue-900/50">
            <CardHeader>
              <div className="mb-4 inline-block rounded-lg bg-blue-100 p-3 dark:bg-blue-900/30">
                <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle>Replicate UI</CardTitle>
              <CardDescription>
                Practice by recreating reference components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-16 border-2 border-dashed border-blue-200 dark:border-blue-800 rounded-md flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 group-hover:border-blue-400 dark:group-hover:border-blue-600 transition-colors">
                <span className="text-blue-600 dark:text-blue-400 font-mono text-sm">&lt;Your Code Here /&gt;</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all border-green-100 dark:border-green-900/50">
            <CardHeader>
              <div className="mb-4 inline-block rounded-lg bg-green-100 p-3 dark:bg-green-900/30">
                <Star className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle>Get Feedback</CardTitle>
              <CardDescription>
                Receive instant feedback and similarity scores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 flex-1 bg-gradient-to-r from-green-500 to-green-400 rounded group-hover:scale-x-105 origin-left transition-transform"></div>
                  <span className="font-mono text-green-600 dark:text-green-400">95%</span>
                </div>
                <div className="flex items-center gap-2 opacity-60">
                  <div className="h-2 w-3/4 bg-gradient-to-r from-green-500 to-green-400 rounded group-hover:scale-x-105 origin-left transition-transform delay-75"></div>
                  <span className="font-mono text-green-600 dark:text-green-400">75%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-6xl px-4 py-20 bg-slate-50 dark:bg-slate-900/50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-12 items-start justify-center text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] md:w-2/3 h-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent -z-10"></div>
          <div className="flex-1 group">
            <div className="text-4xl mb-6 bg-white dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">1️⃣</div>
            <h3 className="text-xl font-semibold mb-3">Select Challenge</h3>
            <p className="text-muted-foreground">Choose from our curated collection of UI components to replicate</p>
          </div>
          <div className="flex-1 group">
            <div className="text-4xl mb-6 bg-white dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">2️⃣</div>
            <h3 className="text-xl font-semibold mb-3">Code Solution</h3>
            <p className="text-muted-foreground">Write your code in our interactive editor with real-time preview</p>
          </div>
          <div className="flex-1 group">
            <div className="text-4xl mb-6 bg-white dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">3️⃣</div>
            <h3 className="text-xl font-semibold mb-3">Get Rated</h3>
            <p className="text-muted-foreground">Receive detailed feedback and scores to track your progress</p>
          </div>
        </div>
      </section>
    </main>
  )
} 