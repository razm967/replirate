'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/app/lib/utils"
import {
  Home,
  Library,
  Trophy,
  Settings,
  Heart,
  Star,
  Users,
  Bookmark,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/app/components/ui/button"

const navItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Library",
    href: "/library",
    icon: Library,
  },
  {
    title: "Challenges",
    href: "/challenges",
    icon: Trophy,
  },
  {
    title: "Community",
    href: "/community",
    icon: Users,
  },
  {
    title: "Favorites",
    href: "/favorites",
    icon: Heart,
  },
  {
    title: "Bookmarks",
    href: "/bookmarks",
    icon: Bookmark,
  },
  {
    title: "Top Rated",
    href: "/top-rated",
    icon: Star,
  },
]

export function SidebarNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Close sidebar when route changes on mobile
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  if (!isMounted) {
    return null
  }

  return (
    <div className="md:relative">
      {/* Mobile Menu Button - Now positioned relative to content */}
      <Button
        variant="secondary"
        size="lg"
        className={cn(
          "fixed left-4 top-4 z-[100] md:hidden p-6",
          isOpen && "left-4" // Keep button on left when sidebar is open
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-8 w-8" />
        ) : (
          <Menu className="h-8 w-8" />
        )}
      </Button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 top-0 h-screen w-64 border-r bg-background px-4 py-8 z-50",
        "transition-transform duration-300 ease-in-out md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "md:sticky md:block"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 px-2 mb-8">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600"></div>
            <span className="text-xl font-bold">RepliRate</span>
          </Link>

          {/* Navigation Items */}
          <nav className="space-y-2 flex-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:text-foreground",
                    "hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href && "bg-accent text-accent-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              )
            })}
          </nav>

          {/* Bottom Section */}
          <div className="border-t pt-4 space-y-2">
            <Link
              href="/settings"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:text-foreground",
                "hover:bg-accent hover:text-accent-foreground",
                pathname === "/settings" && "bg-accent text-accent-foreground"
              )}
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
            <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
              <LogOut className="h-5 w-5" />
              <span>Log Out</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 