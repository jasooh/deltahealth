'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Mic } from 'lucide-react'
import { useState } from 'react'
import { Toggle } from '@/components/ui/toggle'

const symptoms = [
  'Fever',
  'Headache',
  'Fatigue',
  'Nausea',
  'Dizziness',
  'Cough',
  'Shortness of breath',
  'Chest pain',
  'Muscle aches',
  'Sore throat',
]

let recognition: any = null

export default function Home() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [description, setDescription] = useState('')
  const [isListening, setIsListening] = useState(false)

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    )
  }
  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window) {
      // Initialize recognition only once
      if (!recognition) {
        recognition = new (window as any).webkitSpeechRecognition()
        recognition.continuous = true
        recognition.interimResults = true

        recognition.onstart = () => {
          setIsListening(true)
        }

        recognition.onresult = (event: any) => {
          const transcript = Array.from(event.results)
            .map((result: any) => result[0])
            .map((result) => result.transcript)
            .join('')
          setDescription(transcript)
        }

        recognition.onend = () => {
          setIsListening(false)
        }
      }

      try {
        if (isListening) {
          recognition.stop()
        } else {
          recognition.start()
        }
      } catch (error) {
        console.error('Speech recognition error:', error)
        setIsListening(false)
      }
    } else {
      alert('Speech recognition is not supported in your browser.')
    }
  }

  // const handleVoiceInput = () => {
  //   if ('webkitSpeechRecognition' in window) {
  //     const recognition = new (window as any).webkitSpeechRecognition()
  //     recognition.continuous = true
  //     recognition.interimResults = true

  //     recognition.onstart = () => {
  //       setIsListening(true)
  //     }

  //     recognition.onresult = (event: any) => {
  //       const transcript = Array.from(event.results)
  //         .map((result: any) => result[0])
  //         .map((result) => result.transcript)
  //         .join('')
  //       setDescription(transcript)
  //     }

  //     recognition.onend = () => {
  //       setIsListening(false)
  //     }

  //     if (isListening) {
  //       recognition.stop()
  //     } else {
  //       recognition.start()
  //     }
  //   } else {
  //     alert('Speech recognition is not supported in your browser.')
  //   }
  // }

  const handleSubmit = async () => {
    // TODO: Implement Gemini API integration
    console.log({
      symptoms: selectedSymptoms,
      description,
    })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6">
            What symptoms are you dealing with?
          </h2>

          <div className="flex flex-wrap gap-2 mb-6">
            {symptoms.map((symptom) => (
              <Toggle
                key={symptom}
                pressed={selectedSymptoms.includes(symptom)}
                onPressedChange={() => toggleSymptom(symptom)}
                variant="outline"
              >
                {symptom}
              </Toggle>
            ))}
          </div>

          <div className="relative">
            <Textarea
              placeholder="Describe your medical condition or symptoms you are feeling"
              className="min-h-[150px] mb-4"
              maxLength={200}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button
              size="icon"
              variant={isListening ? 'destructive' : 'outline'}
              className="absolute bottom-8 right-2"
              onClick={handleVoiceInput}
            >
              <Mic className={isListening ? 'animate-pulse' : ''} />
            </Button>
            <div className="text-sm text-muted-foreground text-right">
              {description.length}/200 characters
            </div>
          </div>

          <Button
            className="w-full mt-4"
            size="lg"
            onClick={handleSubmit}
            disabled={selectedSymptoms.length === 0 && !description.trim()}
          >
            Get Analysis
          </Button>
        </Card>
      </div>
    </main>
  )
}
