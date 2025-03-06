import { Metadata } from "next"
import { ChallengeContent } from "./challenge-content"

interface ChallengePageProps {
  params: {
    id: string
  }
}

export const metadata: Metadata = {
  title: "Challenge",
  description: "Complete the coding challenge.",
}

export default function ChallengePage({ params }: ChallengePageProps) {
  return (
    <main>
      <ChallengeContent id={parseInt(params.id)} />
    </main>
  )
} 