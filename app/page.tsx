'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
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
      user: 'justboereh',
    },
  ])

  return (
    <main className='min-h-screen p-4'>
      <div className='max-w-5xl w-full'>
        <div>
          {messages.map((msg) => {
            return (
              <div
                key={msg.id}
                className='space-y-1'
              >
                <p className='text-xs text-white/70'>@{msg.user}</p>

                <div className='bg-neutral-800 px-3 py-1 w-fit rounded max-w-xs'>{msg.text}</div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
