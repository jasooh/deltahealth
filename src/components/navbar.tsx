'use client'

import { Button } from '@/components/ui/button'
import { Activity } from 'lucide-react'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="font-semibold text-xl">DeltaHealth</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/emergency">Emergency Contacts</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/catalogue">Catalogue</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
