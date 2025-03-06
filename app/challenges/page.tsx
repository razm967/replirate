import { Metadata } from "next"
import { ChallengesContent } from "./challenges-content"

export const metadata: Metadata = {
  title: "Challenges",
  description: "Complete coding challenges to test and improve your skills.",
}

export default function ChallengesPage() {
  return (
    <main>
      <ChallengesContent />
    </main>
  )
} 