'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Progress } from "@/app/components/ui/progress"
import { Badge } from "@/app/components/ui/badge"
import { Trophy, Clock, Star, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

// Mock challenges data (this should be fetched from an API in a real app)
const challenges = [
  {
    id: 1,
    title: "Basic Data Types",
    description: "Learn about fundamental data types in programming",
    difficulty: "Beginner",
    estimatedTime: "15 min",
    points: 100,
    progress: 0,
    content: `
      // Challenge: Basic Data Types
      // Complete the following tasks:
      
      // 1. Create a variable 'name' and assign your name to it
      let name = ""
      
      // 2. Create a variable 'age' and assign your age to it
      let age = 0
      
      // 3. Create a variable 'isStudent' and assign a boolean value
      let isStudent = false
      
      // 4. Create an array 'hobbies' with at least 3 of your hobbies
      let hobbies = []
      
      // 5. Create an object 'person' with the above properties
      let person = {}
    `,
  },
  {
    id: 2,
    title: "Control Flow",
    description: "Master if statements, loops, and conditional logic",
    difficulty: "Beginner",
    estimatedTime: "20 min",
    points: 150,
    progress: 0,
    content: `
      // Challenge: Control Flow
      // Complete the following tasks:
      
      // 1. Write an if statement that checks if a number is positive, negative, or zero
      function checkNumber(num) {
        // Your code here
      }
      
      // 2. Create a for loop that counts from 1 to 10
      function countToTen() {
        // Your code here
      }
      
      // 3. Write a while loop that doubles a number until it's greater than 100
      function doubleUntil100(num) {
        // Your code here
      }
    `,
  },
  {
    id: 3,
    title: "Functions & Methods",
    description: "Understanding functions, parameters, and return values",
    difficulty: "Intermediate",
    estimatedTime: "25 min",
    points: 200,
    progress: 0,
    content: `
      // Challenge: Functions & Methods
      // Complete the following tasks:
      
      // 1. Create a function that takes two numbers and returns their sum
      function add(a, b) {
        // Your code here
      }
      
      // 2. Create a function that takes an array and returns its average
      function calculateAverage(arr) {
        // Your code here
      }
      
      // 3. Create a method that checks if a string is a palindrome
      function isPalindrome(str) {
        // Your code here
      }
    `,
  },
]

interface ChallengeContentProps {
  id: number
}

export function ChallengeContent({ id }: ChallengeContentProps) {
  const router = useRouter()
  const challenge = challenges.find(c => c.id === id)
  const [code, setCode] = useState(challenge?.content || "")

  if (!challenge) {
    return (
      <div className="p-4 md:p-8 lg:p-12 max-w-6xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => router.back()}
          className="mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Challenges
        </Button>
        <Card>
          <CardHeader>
            <CardTitle>Challenge Not Found</CardTitle>
            <CardDescription>
              The challenge you're looking for doesn't exist.
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
          Back to Challenges
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">{challenge.title}</CardTitle>
              <CardDescription className="mt-2">{challenge.description}</CardDescription>
            </div>
            <Badge className={getDifficultyColor(challenge.difficulty)}>
              {challenge.difficulty}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex justify-between text-sm">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {challenge.estimatedTime}
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1" />
                {challenge.points} pts
              </div>
            </div>

            <Progress value={challenge.progress} className="h-2" />

            <div className="flex items-center text-sm text-muted-foreground">
              <Trophy className="h-4 w-4 mr-1" />
              Progress: {challenge.progress}%
            </div>

            <div className="mt-6">
              <pre className="p-4 rounded-lg bg-muted font-mono text-sm">
                {code}
              </pre>
            </div>

            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => setCode(challenge.content)}>
                Reset
              </Button>
              <Button>
                Submit Solution
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 