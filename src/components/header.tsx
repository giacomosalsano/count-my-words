'use client'
import ToggleButton from '@/components/toggleButton'
import Image from 'next/image'
import Button from './ui/button'
import { useMemo } from 'react'
import { Skeleton } from './ui/skeleton'

interface HeaderProps {
  skeleton?: boolean
}

export default function Header({ skeleton = false }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const buttonsContent = useMemo(() => {
    return (
      <>
        <div className="flex gap-2 xl:gap-6 xl:text-xl">
          <Button
            typeColor="secondary"
            onClick={() => scrollToSection('contadordepalavras-section')}
            skeleton={skeleton}
          >
            Counter
          </Button>
          <Button
            typeColor="secondary"
            onClick={() => scrollToSection('sobrenos-section')}
            skeleton={skeleton}
          >
            About Us
          </Button>
          <Button
            typeColor="secondary"
            onClick={() => scrollToSection('faq-section')}
            skeleton={skeleton}
          >
            FAQ
          </Button>
        </div>
        <ToggleButton skeleton={skeleton} />
      </>
    )
  }, [skeleton])

  return skeleton ? (
    <Skeleton className="sticky top-2 flex w-full justify-between items-center align-middle bg-menu-bg p-2 xl:p-4 rounded-2xl text-primary shadow-xl shadow-shadow">
      <Skeleton className="w-32 h-18 bg-details rounded-lg" />
      {buttonsContent}
    </Skeleton>
  ) : (
    <div className="sticky top-2 flex w-full justify-between items-center align-middle bg-menu-bg p-2 xl:p-4 rounded-2xl text-primary shadow-xl shadow-shadow z-99">
      <Image
        src="/count-my-word-full-logo-black-Photoroom.png"
        alt="Logo"
        width={100}
        height={100}
      />
      {buttonsContent}
    </div>
  )
}
