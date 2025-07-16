'use client'
import { useEffect, useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import CountCard, { CountCardProps } from './countCard'
import { TbSpaceOff, TbAbc, TbTextCaption } from 'react-icons/tb'
import { VscWholeWord } from 'react-icons/vsc'
import { MdOutlineShortText } from 'react-icons/md'
import WordsList, { TopWordsProps } from './wordsList'
import SectionCreate from './sectionCreate'

interface WordCounterProps {
  skeleton?: boolean
}

export default function WordCounter({ skeleton = false }: WordCounterProps) {
  const [text, setText] = useState('')
  const [wordCount, setWordCount] = useState(0)
  const [characterCount, setCharacterCount] = useState(0)
  const [characterCountWithoutSpaces, setCharacterCountWithoutSpaces] =
    useState(0)
  const [sentenceCount, setSentenceCount] = useState(0)
  const [paragraphCount, setParagraphCount] = useState(0)
  const [topWords, setTopWords] = useState<TopWordsProps[]>([])

  const cardsContent: CountCardProps[] = [
    {
      title: 'Palavras',
      icon: <VscWholeWord size={'1.5rem'} />,
      value: wordCount,
      tooltipDescription: 'Número Total de Palavras',
    },
    {
      title: 'Frases',
      icon: <MdOutlineShortText size={'1.5rem'} />,
      value: sentenceCount,
      tooltipDescription: 'Número Total de Frases',
    },
    {
      title: 'Parágrafos',
      icon: <TbTextCaption size={'1.5rem'} />,
      value: paragraphCount,
      tooltipDescription: 'Número Total de Parágrafos',
    },
    {
      title: 'Sem Espaços',
      icon: <TbSpaceOff size={'1.5rem'} />,
      value: characterCountWithoutSpaces,
      tooltipDescription: 'Número Total de Caracteres sem contar os Espaços',
    },
  ]

  useEffect(() => {
    setWordCount(text.trim() === '' ? 0 : text.trim().split(/\s+/).length)

    setCharacterCount(text.length)

    setCharacterCountWithoutSpaces(text.replace(/\s/g, '').length)

    setSentenceCount(
      text.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0)
        .length,
    )

    setParagraphCount(
      text.split(/\n+/).filter((p) => p.trim().length > 0).length,
    )

    const words = text.toLowerCase().match(/\b\w+\b/g)

    if (words) {
      const freq: Record<string, number> = {}

      words.forEach((word) => {
        freq[word] = (freq[word] || 0) + 1
      })

      const sorted = Object.entries(freq)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([word, value]) => ({ word, value }))

      setTopWords(sorted)
    } else {
      setTopWords([])
    }
  }, [text])

  const content = (
    <div className="items-center justify-center text-lg space-y-2 xl:space-y-6 ">
      <div>
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="textArea-value"
          placeholder="type or paste your text here"
          className="flex w-full text-bold max-h-96 max-w-6xl border-2 border-primary-color/20 focus:border-primary-color focus:ring-2 focus:ring-primary-color/20 transition-all"
        />
      </div>
      <div className="items-center justify-center xl:flex space-y-2 xl:space-x-2 xl:space-y-0">
        <div className="flex flex-col">
          <CountCard
            title="Caracteres"
            icon={<TbAbc size={'1.5rem'} />}
            value={characterCount}
            tooltipDescription="Número Total de Caracteres"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 xl:flex xl:gap-0 xl:space-x-2">
          {cardsContent.map(({ title, icon, value, tooltipDescription }) => (
            <CountCard
              key={title}
              title={title}
              icon={icon}
              value={value}
              tooltipDescription={tooltipDescription}
            />
          ))}
        </div>
      </div>

      <WordsList title="Top Words:" topWords={topWords} />
    </div>
  )

  return (
    <SectionCreate
      title="Contador de Palavras"
      description="Cole ou digite seu texto abaixo para analisar suas estatísticas"
      content={content}
      skeleton={skeleton}
    />
  )
}
