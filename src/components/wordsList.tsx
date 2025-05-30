import { TbSortAscendingNumbers, TbReportSearch } from "react-icons/tb";
import { Tooltip } from "./ui/tooltip";

export interface TopWordsProps {
  word: string;
  value: number;
}

export interface WordsListProps {
  topWords: TopWordsProps[];
  title: string;
}

export default function WordsList({ title, topWords }: WordsListProps) {
  return (
    <div className="bg-details rounded-xl w-full max-w-6xl shadow-xs xl:shadow-xl shadow-shadow">
      <div className="text-center font-bold my-4">
        <Tooltip content='Lista com as 10 palavras mais frequentes no seu texto.'>
          <div className="flex align-middle gap-2 text-center items-center">
            <TbSortAscendingNumbers />
            <h3>{title}</h3>
            </div>
        </Tooltip>
        </div>
      {topWords.length > 0 ? (
        <div className="grid grid-cols-2 xl:w-6xl">
          {topWords.map(({ word, value }, i) => (
            <div key={i} className="text-center font-bold align-middle bg-ghost/50 rounded-xl justify-between p-4 m-4 max-w-6xl ">
              <div className="flex justify-between">
                <p className="text-text-info p-4 ">{i + 1}.</p>
                <p className="text-text-primary p-4 truncate">{word}</p>
                <Tooltip content={`A palavra "${word}" aparece ${value} ${ value > 1 ? 'vezes' : 'vez'} no seu texto.`}>
                  <p className="bg-details/50 rounded-xl p-4 text-text-primary shadow shadow-shadow">{value}x</p>
                  </Tooltip>
              </div>
            </div>
          ))}
        </div>
      ) : (
      <Tooltip content='Cole seu texto na área acima e veja aqui as 10 palavras mais frequentes.'>
        <div className="flex flex-col items-center justify-center gap-3 m-4">
          <div>As palavras mais frequentes do seu texto serão exibidas aqui...</div>
          <div><TbReportSearch size={32}/></div>
          </div>
        </Tooltip>
        )}
    </div>
  );
}