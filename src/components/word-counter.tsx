'use client'
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import Card from "./cards";
import { TbSpaceOff, TbAbc, TbTextCaption, TbSortAscendingNumbers } from "react-icons/tb";
import { VscWholeWord } from "react-icons/vsc";
import { MdOutlineShortText } from "react-icons/md";

export default function WordCounter() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [characterCountWithoutSpaces, setCharacterCountWithoutSpaces] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const [topWords, setTopWords] = useState<{ word: string, count: number }[]>([]);


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
    .map(([word, count]) => ({ word, count }));

  setTopWords(sorted);
} else {
  setTopWords([]);
}
}, [text])


  return (
    <div className=" items-center justify-center text-xl">
      <Textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        name='textArea-value'  
        placeholder="type or paste your text here" 
        className=" xl:w-500 max-h-96"/>
      <div className="grid grid-cols-2 xl:flex m-2 gap-2 items-center xl:gap-6">
        <Card title='Palavras'
          icon={<VscWholeWord size={'1.5rem'}/>} 
          value={wordCount}/>
        <Card title='Frases' 
        icon={<MdOutlineShortText size={'1.5rem'}/>} 
          value={sentenceCount}/>
        <Card title='Parágrafos' 
          icon={<TbTextCaption size={'1.5rem'}/>} 
          value={paragraphCount}/>
        <Card title='Caracteres' 
          icon={<TbAbc size={'1.5rem'}/>} 
          value={characterCount}/>
        <Card title='Caracteres (sem espaços)'
          icon={<TbSpaceOff size={'1.5rem'}/>}
          value={characterCountWithoutSpaces}/>
        </div>
      <div>
        <span><TbSortAscendingNumbers /></span>
      {topWords.map(({ word, count }, i) => (
      <li key={i} className="flex justify-between border-b pb-1">
        <span>{word}</span>
        <span className="text-text-info ">{count}x</span>
      </li>
       ))}
      </div>

      
    </div>
  )
}