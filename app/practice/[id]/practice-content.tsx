'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"
import { ArrowLeft, Code, Eye, Lightbulb } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"

// Mock component data (this should be fetched from an API in a real app)
const components = [
  {
    id: 1,
    title: "Modern Card",
    description: "A modern card component with hover effects and responsive design",
    difficulty: "Beginner",
    category: "Cards",
    requirements: [
      "Create a card component with a title, description, and image",
      "Add hover effects for elevation and image scaling",
      "Make it responsive for different screen sizes",
      "Include proper padding and spacing",
      "Implement dark mode support"
    ],
    tips: [
      "Use CSS Grid or Flexbox for layout",
      "Consider using transform for hover effects",
      "Use CSS variables for theming",
      "Test on different screen sizes"
    ],
    code: `// Example structure
<div class="card">
  <div class="card-image">
    <img src="..." alt="..." />
  </div>
  <div class="card-content">
    <h3>Title</h3>
    <p>Description</p>
  </div>
</div>

/* Basic styles */
.card {
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}`
  },
  {
    id: 2,
    title: "Navigation Menu",
    description: "A responsive navigation menu with dropdown support",
    difficulty: "Intermediate",
    category: "Navigation",
    requirements: [
      "Create a responsive navigation bar",
      "Add dropdown menus for nested items",
      "Implement mobile menu with hamburger icon",
      "Add hover and active states",
      "Ensure keyboard navigation works"
    ],
    tips: [
      "Use semantic HTML elements",
      "Consider using a CSS-in-JS solution",
      "Test keyboard navigation",
      "Ensure ARIA labels are present"
    ],
    code: `// Example structure
<nav class="navbar">
  <div class="logo">Logo</div>
  <ul class="nav-items">
    <li><a href="#">Home</a></li>
    <li class="dropdown">
      <a href="#">Products</a>
      <ul class="dropdown-menu">
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
      </ul>
    </li>
  </ul>
</nav>`
  },
  // Add more components as needed
]

interface PracticeContentProps {
  id: number
}

export function PracticeContent({ id }: PracticeContentProps) {
  const router = useRouter()
  const component = components.find(c => c.id === id)
  const [activeTab, setActiveTab] = useState("requirements")

  if (!component) {
    return (
      <div className="p-4 md:p-8 lg:p-12 max-w-6xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => router.back()}
          className="mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Library
        </Button>
        <Card>
          <CardHeader>
            <CardTitle>Component Not Found</CardTitle>
            <CardDescription>
              The component you're looking for doesn't exist.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-500/10 text-green-500'
      case 'intermediate':
        return 'bg-yellow-500/10 text-yellow-500'
      case 'advanced':
        return 'bg-red-500/10 text-red-500'
      default:
        return 'bg-gray-500/10 text-gray-500'
    }
  }

  return (
    <div className="p-4 md:p-8 lg:p-12 max-w-6xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Library
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">{component.title}</CardTitle>
              <CardDescription className="mt-2">{component.description}</CardDescription>
            </div>
            <Badge className={getDifficultyColor(component.difficulty)}>
              {component.difficulty}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="requirements" className="space-y-6">
            <TabsList>
              <TabsTrigger value="requirements">
                <Code className="h-4 w-4 mr-2" />
                Requirements
              </TabsTrigger>
              <TabsTrigger value="tips">
                <Lightbulb className="h-4 w-4 mr-2" />
                Tips
              </TabsTrigger>
              <TabsTrigger value="preview">
                <Eye className="h-4 w-4 mr-2" />
                Example Code
              </TabsTrigger>
            </TabsList>

            <TabsContent value="requirements" className="space-y-4">
              <h3 className="text-lg font-semibold">Requirements:</h3>
              <ul className="list-disc list-inside space-y-2">
                {component.requirements.map((req, index) => (
                  <li key={index} className="text-muted-foreground">
                    {req}
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="tips" className="space-y-4">
              <h3 className="text-lg font-semibold">Tips & Best Practices:</h3>
              <ul className="list-disc list-inside space-y-2">
                {component.tips.map((tip, index) => (
                  <li key={index} className="text-muted-foreground">
                    {tip}
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="preview" className="space-y-4">
              <h3 className="text-lg font-semibold">Example Code:</h3>
              <pre className="p-4 rounded-lg bg-muted font-mono text-sm overflow-x-auto">
                {component.code}
              </pre>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
} 