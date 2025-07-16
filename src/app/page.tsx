'use client'
import { FAQSection } from '@/components/faqSection'
import Header from '../components/header'
import WordCounter from '../components/wordCounter'
import AboutSection from '@/components/aboutUs'
import { useEffect, useState } from 'react'
import Footer from '@/components/footer'

export default function Home() {
  const [isPageLoading, setIsPageLoading] = useState(true)

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsPageLoading(false)
    } else {
      const handleLoad = () => setIsPageLoading(false)
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.getElementById(hash.substring(1))
        if (element) {
          const headerOffset = 80
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - headerOffset

          setTimeout(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            })
          }, 100)
        }
      }
    }

    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="grid m-2 xl:m-4 gap-2 transition-all">
      <Header skeleton={isPageLoading} />
      <WordCounter skeleton={isPageLoading} />
      <AboutSection skeleton={isPageLoading} />
      <FAQSection skeleton={isPageLoading} />
      <Footer />
    </div>
  )
}
