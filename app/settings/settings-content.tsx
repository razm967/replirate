'use client'

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Label } from "@/app/components/ui/label"
import { Switch } from "@/app/components/ui/switch"
import { Button } from "@/app/components/ui/button"
import { Separator } from "@/app/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import {
  BarChart3,
  Moon,
  Sun,
  Trophy,
  Upload,
  User,
  Clock,
  Star,
  Settings2,
} from "lucide-react"

export function SettingsContent() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://github.com/shadcn.png",
    stats: {
      completedChallenges: 47,
      averageScore: 88,
      totalTime: "32h 15m",
      highestStreak: 12,
    },
  }

  const handleAvatarUpload = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="p-4 md:p-8 lg:p-12 max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your profile, preferences, and account settings.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Profile Section */}
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              Manage your public profile information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src={user.avatar} />
                <AvatarFallback>
                  <User className="h-8 w-8" />
                </AvatarFallback>
              </Avatar>
              <Button 
                variant="outline" 
                onClick={handleAvatarUpload}
                disabled={isLoading}
              >
                <Upload className="h-4 w-4 mr-2" />
                {isLoading ? "Uploading..." : "Change Avatar"}
              </Button>
            </div>
            <div className="space-y-2">
              <Label>Display Name</Label>
              <p className="text-lg font-medium">{user.name}</p>
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <p className="text-lg font-medium">{user.email}</p>
            </div>
          </CardContent>
        </Card>

        {/* Stats Section */}
        <Card>
          <CardHeader>
            <CardTitle>Your Stats</CardTitle>
            <CardDescription>
              Track your progress and achievements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="flex items-center text-muted-foreground">
                  <Trophy className="h-4 w-4 mr-2" />
                  Completed
                </div>
                <p className="text-2xl font-bold">{user.stats.completedChallenges}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center text-muted-foreground">
                  <Star className="h-4 w-4 mr-2" />
                  Avg. Score
                </div>
                <p className="text-2xl font-bold">{user.stats.averageScore}%</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  Total Time
                </div>
                <p className="text-2xl font-bold">{user.stats.totalTime}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center text-muted-foreground">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Best Streak
                </div>
                <p className="text-2xl font-bold">{user.stats.highestStreak}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preferences Section */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>
              Customize your experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 rounded-lg bg-accent/50">
              <div className="space-y-0.5">
                <Label className="text-base">Theme Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Switch between light and dark themes
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Sun 
                  className={`h-5 w-5 transition-all duration-500 transform ${
                    theme === 'dark' 
                      ? 'opacity-50 scale-90' 
                      : 'text-yellow-500 scale-100 rotate-0'
                  }`} 
                />
                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={(checked) => {
                    setTheme(checked ? "dark" : "light")
                  }}
                  className="data-[state=checked]:bg-blue-600 transition-all duration-500"
                />
                <Moon 
                  className={`h-5 w-5 transition-all duration-500 transform ${
                    theme === 'dark' 
                      ? 'text-blue-400 scale-100 rotate-0' 
                      : 'opacity-50 scale-90'
                  }`} 
                />
              </div>
            </div>

            <Separator className="transition-colors duration-500" />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Editor Settings</Label>
                <p className="text-sm text-muted-foreground">
                  Configure your coding environment
                </p>
              </div>
              <Button variant="outline" size="sm">
                <Settings2 className="h-4 w-4 mr-2" />
                Configure
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 