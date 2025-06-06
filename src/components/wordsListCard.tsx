import { Tooltip } from './ui/tooltip'

interface WordsListCardProps {
  position: number
  word: string
  value: number
}

export default function WordsListCard({
  position,
  word,
  value,
}: WordsListCardProps) {
  return (
    <div
      key={position}
      className="w-full text-center font-bold align-middle rounded-2xl justify-between p-4 border border-primary"
    >
      <div className="flex justify-between">
        <p className="text-text-info p-4">{position + 1}.</p>
        <p className="text-text-primary p-4 truncate">{word}</p>
        <Tooltip
          content={`A palavra "${word}" aparece ${value} ${value > 1 ? 'vezes' : 'vez'} no seu texto.`}
        >
          <p className="bg-details/20 rounded-2xl p-4 text-text-primary shadow shadow-shadow">
            {value}x
          </p>
        </Tooltip>
      </div>
    </div>
  )
}
