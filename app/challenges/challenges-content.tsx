'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Progress } from "@/app/components/ui/progress"
import { Badge } from "@/app/components/ui/badge"
import { Trophy, Clock, Star, ArrowRight } from "lucide-react"

// Mock challenges data
const challenges = [
  {
    id: 1,
    title: "Basic Data Types",
    description: "Learn about fundamental data types in programming",
    difficulty: "Beginner",
    estimatedTime: "15 min",
    points: 100,
    progress: 0,
  },
  {
    id: 2,
    title: "Control Flow",
    description: "Master if statements, loops, and conditional logic",
    difficulty: "Beginner",
    estimatedTime: "20 min",
    points: 150,
    progress: 0,
  },
  {
    id: 3,
    title: "Functions & Methods",
    description: "Understanding functions, parameters, and return values",
    difficulty: "Intermediate",
    estimatedTime: "25 min",
    points: 200,
    progress: 0,
  },
]

export function ChallengesContent() {
  const router = useRouter()

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
      <div>
        <h1 className="text-3xl font-bold mb-2">Challenges</h1>
        <p className="text-muted-foreground">
          Complete coding challenges to test and improve your skills.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge) => (
          <Card 
            key={challenge.id}
            className="transition-all duration-300 hover:shadow-lg"
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{challenge.title}</CardTitle>
                <Badge className={getDifficultyColor(challenge.difficulty)}>
                  {challenge.difficulty}
                </Badge>
              </div>
              <CardDescription>{challenge.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
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
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Trophy className="h-4 w-4 mr-1" />
                    Progress: {challenge.progress}%
                  </div>
                  <Button 
                    variant="default"
                    size="sm"
                    onClick={() => router.push(`/challenges/${challenge.id}`)}
                  >
                    Start
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 