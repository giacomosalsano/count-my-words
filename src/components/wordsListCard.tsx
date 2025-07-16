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
      className="w-full text-center font-bold align-middle rounded-2xl justify-between p-4 border-2 border-primary-color/30 hover:z-10 hover:scale-110 hover:bg-primary-accent hover:shadow-primary-glow/20 hover:shadow-2xl hover:transition-all text-xl"
    >
      <div className="flex justify-between">
        <p className="text-primary-color p-4">{position + 1}.</p>
        <p className="text-text-primary p-4 truncate">{word}</p>
        <Tooltip
          content={`A palavra "${word}" aparece ${value} ${value > 1 ? 'vezes' : 'vez'} no seu texto.`}
        >
          <p className="bg-primary-color text-text-white rounded-2xl p-4 shadow shadow-shadow">
            {value}x
          </p>
        </Tooltip>
      </div>
    </div>
  )
}
