'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'


export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="font-semibold text-xl hidden md:block">DELTAHEALTH</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/emergency">Contacts</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/catalogue">Catalogue</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/analyzer">Analyzer</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
