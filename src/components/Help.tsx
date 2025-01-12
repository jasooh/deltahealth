'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface Contact {
  name: string
  number: string
  description: string
}

const emergencyContacts: Contact[] = [
  {
    name: 'Emergency Services',
    number: '911',
    description:
      'For immediate assistance from police, fire, or medical services.',
  },
  {
    name: 'Mental Health and Suicide Prevention',
    number: '988',
    description:
      'Provides bilingual, trauma-informed, and culturally appropriate mental health and suicide prevention support. Available 24/7.',
  },
  {
    name: 'Talk Suicide Canada',
    number: '1-833-456-4566',
    description:
      'Offers confidential suicide prevention and support. Available 24/7.',
  },
  {
    name: 'Kids Help Phone',
    number: '1-800-668-6868',
    description:
      'Provides mental health support and crisis services for children and young adults. Available 24/7.',
  },
  {
    name: 'Hope for Wellness Helpline',
    number: '1-855-242-3310',
    description:
      'Offers immediate, culturally competent, trauma-informed emotional support for Indigenous Peoples across Canada. Available 24/7.',
  },
  {
    name: 'Ontario Victim Support Line',
    number: '1-888-579-2888',
    description:
      'Provides services to victims of crime across Ontario, including counselling and financial assistance.',
  },
  {
    name: 'Good2Talk',
    number: '1-866-925-5454',
    description:
      'A free, confidential support service for post-secondary students in Ontario offering counselling and referrals.',
  },
  {
    name: 'Gerstein Crisis Centre',
    number: '416-929-5200',
    description:
      'Provides crisis intervention and support for individuals experiencing mental health crises in Toronto.',
  },
  {
    name: 'Toronto Distress Centre',
    number: '416-408-4357',
    description:
      'Offers emotional support, crisis intervention, and suicide prevention services.',
  },
  {
    name: 'Durham Crisis and Mental Health Line',
    number: '905-666-0483',
    description:
      'Provides crisis support and intervention for residents of the Durham region.',
  },
  {
    name: 'Distress Centre Halton - Oakville',
    number: '905-849-4541',
    description:
      'Offers support for residents of Oakville experiencing distress or crisis.',
  },
  {
    name: 'Distress Centre Halton - Burlington',
    number: '905-681-1488',
    description:
      'Provides support for residents of Burlington in distress or crisis.',
  },
  {
    name: 'Distress Centre Halton - Milton/Halton Hills',
    number: '905-877-1211',
    description:
      'Offers support for residents of Milton and Halton Hills experiencing distress or crisis.',
  },
  {
    name: 'Ottawa Distress Line',
    number: '613-238-3311',
    description:
      'Provides confidential support and information for individuals in distress in Ottawa.',
  },
  {
    name: 'Thunder Bay Crisis Line',
    number: '807-346-8282',
    description:
      'Offers crisis support for individuals experiencing a mental health crisis in Thunder Bay.',
  },
]

export default function EmergencyContacts() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredContacts = emergencyContacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.number.includes(searchTerm) ||
      contact.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full"
      />
      <Accordion type="single" collapsible className="w-full">
        {filteredContacts.map((contact, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-left">
              <div>
                <h2 className="text-lg font-semibold">{contact.name}</h2>
                <p className="text-sm text-gray-500">{contact.number}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 mb-4">{contact.description}</p>
              <Button
                onClick={() => (window.location.href = `tel:${contact.number}`)}
                className="w-full sm:w-auto"
              >
                Call {contact.number}
              </Button>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {filteredContacts.length === 0 && (
        <p className="text-center text-gray-500">No contacts found.</p>
      )}
    </div>
  )
}
