'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

type Message = {
  id: number
  text: string
  date: Date
  user: string
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: 'Hello world',
      date: new Date(),
      user: 'bam',
    },
  ])

  return (
    <main className='min-h-screen p-4'>
      <div className='max-w-5xl w-full'>hello</div>
    </main>
  )
}
