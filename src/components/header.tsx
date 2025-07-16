'use client'
import ToggleButton from '@/components/toggleButton'
import Image from 'next/image'
import Button from './ui/button'
import { useMemo, useCallback } from 'react'
import { Skeleton } from './ui/skeleton'
import { useRouter, usePathname } from 'next/navigation'

interface HeaderProps {
  skeleton?: boolean
}

export default function Header({ skeleton = false }: HeaderProps) {
  const router = useRouter()
  const pathname = usePathname()
  const isTermsPage = pathname === '/terms'

  const scrollToSection = useCallback(
    (sectionId: string) => {
      if (isTermsPage) {
        router.push(`/#${sectionId}`)
      } else {
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
    },
    [isTermsPage, router],
  )

  const buttonsContent = useMemo(() => {
    return (
      <>
        <div className="flex gap-2 xl:gap-6 xl:text-xl">
          <Button
            typeColor="primary"
            onClick={() => scrollToSection('contadordepalavras-section')}
            skeleton={skeleton}
          >
            Counter
          </Button>
          <Button
            typeColor="primary"
            onClick={() => scrollToSection('sobrenos-section')}
            skeleton={skeleton}
          >
            About Us
          </Button>
          <Button
            typeColor="primary"
            onClick={() => scrollToSection('faq-section')}
            skeleton={skeleton}
          >
            FAQ
          </Button>
        </div>
        <ToggleButton skeleton={skeleton} />
      </>
    )
  }, [skeleton, scrollToSection])

  return skeleton ? (
    <Skeleton className="sticky top-2 flex w-full justify-between items-center align-middle bg-menu-bg p-2 xl:p-4 rounded-2xl text-primary shadow-xl shadow-shadow border-2 border-primary-color/20">
      <Skeleton className="w-32 h-18 bg-details rounded-lg" />
      {buttonsContent}
    </Skeleton>
  ) : (
    <div className="sticky top-2 flex w-full justify-between items-center align-middle bg-menu-bg p-2 xl:p-4 rounded-2xl text-primary shadow-xl shadow-shadow z-99 border-2 border-primary-color/20 hover:border-primary-color/40 transition-all">
      <Image
        src="/count-my-word-full-logo-black-Photoroom.png"
        alt="Logo"
        width={100}
        height={100}
        className="hover:scale-105 transition-transform cursor-pointer"
        onClick={() => router.push('/')}
      />
      {buttonsContent}
    </div>
  )
}
