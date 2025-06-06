'use client'
import ToggleButton from '@/components/toggleButton'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="flex w-full justify-between items-center align-middle bg-ghost p-2 xl:p-4 rounded-2xl text-primary shadow-xs shadow-shadow">
      <Image
        src="/count-my-word-full-logo-black-Photoroom.png"
        alt="Logo"
        width={100}
        height={100}
      />
      <nav>
        <ul className="flex gap-2 xl:gap-6 xl:text-xl">
          <Button onClick={() => scrollToSection('contadordepalavras-section')}>
            Counter
          </Button>
          <Button onClick={() => scrollToSection('sobrenos-section')}>
            About Us
          </Button>
          <Button onClick={() => scrollToSection('faq-section')}>FAQ</Button>
        </ul>
      </nav>
      <ToggleButton />
    </div>
  )
}
