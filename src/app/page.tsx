import Header from "./header";
import WordCounter from "../components/word-counter";


export default function Home() {

  
  return (
    <div className="font-galindo m-2 xl:m-4 space-y-4">
      <Header/>
      <WordCounter/>
    </div>
  );
}
