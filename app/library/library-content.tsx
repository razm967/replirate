'use client'

import { useState, useMemo } from "react"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"
import Link from "next/link"
import { Search, Filter, ArrowRight } from "lucide-react"
import { SidebarNav } from "@/app/components/sidebar-nav"

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'
type Category = 'Cards' | 'Navigation' | 'Layout'

interface Component {
  id: number
  title: string
  category: Category
  difficulty: Difficulty
  image: string
  completions: number
  avgScore: number
}

// Category-specific placeholder images
const placeholderImages: Record<Category, string> = {
  Cards: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=800&auto=format&fit=crop&q=60",
  Navigation: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&auto=format&fit=crop&q=60",
  Layout: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60"
}

const components: Component[] = [
  {
    id: 1,
    title: "Modern Card",
    category: "Cards",
    difficulty: "Beginner",
    image: placeholderImages.Cards,
    completions: 1234,
    avgScore: 85,
  },
  {
    id: 2,
    title: "Navigation Menu",
    category: "Navigation",
    difficulty: "Intermediate",
    image: placeholderImages.Navigation,
    completions: 856,
    avgScore: 78,
  },
  {
    id: 3,
    title: "Hero Section",
    category: "Layout",
    difficulty: "Advanced",
    image: placeholderImages.Layout,
    completions: 567,
    avgScore: 92,
  },
  {
    id: 4,
    title: "Profile Card",
    category: "Cards",
    difficulty: "Beginner",
    image: placeholderImages.Cards,
    completions: 2341,
    avgScore: 88,
  },
  {
    id: 5,
    title: "Sidebar Menu",
    category: "Navigation",
    difficulty: "Intermediate",
    image: placeholderImages.Navigation,
    completions: 943,
    avgScore: 82,
  },
  {
    id: 6,
    title: "Dashboard Grid",
    category: "Layout",
    difficulty: "Advanced",
    image: placeholderImages.Layout,
    completions: 432,
    avgScore: 95,
  },
]

interface DifficultyStyle {
  bg: string
  text: string
  darkBg: string
  darkText: string
}

const difficultyColors: Record<Difficulty, DifficultyStyle> = {
  Beginner: {
    bg: "bg-green-500/10",
    text: "text-green-500",
    darkBg: "dark:bg-green-900/30",
    darkText: "dark:text-green-300",
  },
  Intermediate: {
    bg: "bg-yellow-500/10",
    text: "text-yellow-500",
    darkBg: "dark:bg-yellow-900/30",
    darkText: "dark:text-yellow-300",
  },
  Advanced: {
    bg: "bg-red-500/10",
    text: "text-red-500",
    darkBg: "dark:bg-red-900/30",
    darkText: "dark:text-red-300",
  },
}

export function LibraryContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")

  const filteredComponents = useMemo(() => {
    return components.filter(component => {
      const matchesSearch = component.title.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || component.category.toLowerCase() === selectedCategory
      const matchesDifficulty = selectedDifficulty === "all" || component.difficulty.toLowerCase() === selectedDifficulty

      return matchesSearch && matchesCategory && matchesDifficulty
    })
  }, [searchQuery, selectedCategory, selectedDifficulty])

  const categories = [...new Set(components.map(c => c.category))]

  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1 pl-4 p-4 md:p-8 lg:p-12">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Component Library</h1>
          <p className="text-muted-foreground text-lg">
            Choose a component to practice your UI development skills
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search components..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category.toLowerCase()} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Component Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComponents.map((component) => (
              <Link 
                key={component.id} 
                href={`/practice/${component.id}`}
                className="block group"
              >
                <Card className="group/card hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span>{component.title}</span>
                      <span className={`text-sm font-normal px-2 py-1 rounded-full 
                        ${difficultyColors[component.difficulty].bg} 
                        ${difficultyColors[component.difficulty].text}
                        ${difficultyColors[component.difficulty].darkBg}
                        ${difficultyColors[component.difficulty].darkText}`}>
                        {component.difficulty}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative aspect-video overflow-hidden rounded-md bg-slate-50 dark:bg-slate-900/50">
                    <img
                      src={component.image}
                      alt={component.title}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity flex items-end justify-end p-4">
                      <Button variant="secondary" size="sm" className="gap-2 pointer-events-none">
                        Start Practice <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between text-sm text-muted-foreground">
                    <span>{component.completions.toLocaleString()} completions</span>
                    <span>Avg. Score: {component.avgScore}%</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          {/* No Results Message */}
          {filteredComponents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No components found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                  setSelectedDifficulty("all")
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
} 