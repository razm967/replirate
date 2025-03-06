import { Metadata } from "next"
import { PracticeContent } from "./practice-content"

interface PracticePageProps {
  params: {
    id: string
  }
}

export const metadata: Metadata = {
  title: "Practice Component",
  description: "Practice building UI components and improve your skills.",
}

export default function PracticePage({ params }: PracticePageProps) {
  return (
    <main>
      <PracticeContent id={parseInt(params.id)} />
    </main>
  )
} 