import { FAQSection } from '@/components/faqSection'
import Header from '../components/header'
import WordCounter from '../components/wordCounter'
import AboutSection from '@/components/aboutUs'

export default function Home() {
  return (
    <div className="grid m-2 xl:m-4 gap-2">
      <Header />
      <WordCounter />
      <AboutSection />
      <FAQSection />
    </div>
  )
}
