import { TbSortAscendingNumbers, TbReportSearch } from "react-icons/tb";

export interface TopWordsProps {
  word: string
  value: number
}

export interface WordsListProps {
  topWords: TopWordsProps[]
  title: string
}



export default function WordsList({title, topWords}: WordsListProps) {
  return(
    <div className="bg-details rounded-xl font-bold">
      <div className="flex text-center align-middle justify-center font-bold gap-2 my-4">
        <TbSortAscendingNumbers />
        <h3>Top Words:</h3>
        </div>
      <div className="grid grid-cols-2 xl:w-6xl">
       
          {topWords.length > 0 ? topWords.map(({word, value}, i) => (
            <div className="text-center align-middle bg-ghost/50 rounded-xl justify-between p-4 m-4 max-w-6xl" key={i}>
              <div className="flex justify-between">
                <p className="text-text-warning p-4">{i + 1}.</p>
                <p className="text-text-primary p-4 truncate">{word}</p>
                <p className="bg-details/50 rounded-xl p-4 text-text-primary">{value}x</p>
                </div>
            </div>
         
          ))
         : <div className="flex flex-col w-full text-center align-middle justify-center items-center bg-blue-50">
                <p className="">As palavras mais frequentes do texto serão exibidas aqui...</p>
                <TbReportSearch size={32}/>
                </div>}
         
        </div>
    </div>
  )
}