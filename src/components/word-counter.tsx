'use client'
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import Card, { CardProps } from "./card";
import { TbSpaceOff, TbAbc, TbTextCaption } from "react-icons/tb";
import { VscWholeWord } from "react-icons/vsc";
import { MdOutlineShortText } from "react-icons/md";
import WordsList, { TopWordsProps } from "./wordsList";

export default function WordCounter() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [characterCountWithoutSpaces, setCharacterCountWithoutSpaces] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const [topWords, setTopWords] = useState<TopWordsProps[]>([]);

  const cardsContent: CardProps[] = [
    {
      title: 'Palavras',
      icon: <VscWholeWord size={'1.5rem'}/>,
      value: wordCount
    },
    {
      title: 'Frases',
      icon: <MdOutlineShortText size={'1.5rem'}/>,
      value: sentenceCount
    },
    {
      title: 'Parágrafos',
      icon: <TbTextCaption size={'1.5rem'}/>,
      value: paragraphCount
    },
    {
      title: 'Sem Espaços',
      icon: <TbSpaceOff size={'1.5rem'}/>,
      value: characterCountWithoutSpaces
    }
  ]


useEffect(() => {
  setWordCount(text.trim() === '' ? 0 : text.trim().split(/\s+/).length)

  setCharacterCount(text.length)

  setCharacterCountWithoutSpaces(text.replace(/\s/g, '').length)

  setSentenceCount(text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length)

  setParagraphCount(text.split(/\n+/).filter(p => p.trim().length > 0).length)

  const words = text
  .toLowerCase()
  .match(/\b\w+\b/g);

if (words) {
  const freq: Record<string, number> = {};

  words.forEach(word => {
    freq[word] = (freq[word] || 0) + 1;
  });

  const sorted = Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([word, value]) => ({ word, value }));

  setTopWords(sorted);
} else {
  setTopWords([]);
}
}, [text])


  return (
    <div className="items-center justify-center text-xl space-y-2 xl:space-y-6">
        <div className="bg-details rounded-xl p-4 flex flex-col max-w-6xl mx-auto shadow-xs xl:shadow-xl shadow-shadow">
            <h2 
              className="text-4xl font-extrabold text-center align-middle justify-center p-1">Counter</h2>
          <div>
            <Textarea 
              value={text}
              onChange={(e) => setText(e.target.value)}
              name='textArea-value'  
              placeholder="type or paste your text here" 
              className="flex w-full text-bold max-h-96 max-w-6xl"/>
            </div>
          </div>
      <div className="items-center justify-center xl:flex space-y-2 xl:space-x-2 xl:space-y-0">
        <div className="flex flex-col">
          <Card title='Caracteres'
            icon={<TbAbc size={'1.5rem'}/>} 
            value={characterCount}/>
          </div>
        <div className="grid grid-cols-2 gap-2 xl:flex xl:gap-0 xl:space-x-2">
          {cardsContent.map(({title, icon, value}) => (
            <Card key={title} title={title}
            icon={icon} 
            value={value}/>
            ))}
        </div>
        </div>
      <div className="flex gap-2 text-center align-middle justify-center">
        <WordsList title='Top Words:' topWords={topWords}/>
        </div>
    </div>
  )
}