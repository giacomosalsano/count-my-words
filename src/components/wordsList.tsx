import { TbSortAscendingNumbers, TbReportSearch } from 'react-icons/tb'
import { Tooltip } from './ui/tooltip'
import SectionCreate from './sectionCreate'
import WordsListCard from './wordsListCard'

export interface TopWordsProps {
  word: string
  value: number
}

export interface WordsListProps {
  topWords: TopWordsProps[]
  title: string
}

export default function WordsList({ title, topWords }: WordsListProps) {
  const content =
    topWords.length > 0 ? (
      <div
        className={`${
          topWords.length > 1
            ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center'
            : 'flex justify-center'
        } w-full`}
      >
        {topWords.map(({ word, value }, index) => (
          <WordsListCard
            key={index}
            position={index}
            word={word}
            value={value}
          />
        ))}
      </div>
    ) : (
      <div className="flex items-center justify-center border border-foreground rounded-2xl">
        <Tooltip content="Cole seu texto na área acima e veja aqui as 10 palavras mais frequentes">
          <div className="flex flex-col items-center justify-center gap-3 m-4 p-4">
            <p>
              As palavras mais frequentes do seu texto serão exibidas aqui...
            </p>
            <TbReportSearch size={32} />
          </div>
        </Tooltip>
      </div>
    )

  return (
    <SectionCreate
      title={title}
      icon={<TbSortAscendingNumbers size={18} />}
      description="As 10 palavras que mais aparecem no seu texto"
      content={content}
      shadowOn={false}
    />
  )
}
