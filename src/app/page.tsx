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
