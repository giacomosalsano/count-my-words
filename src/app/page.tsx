import { FAQSection } from "@/components/faqSection";
import Header from "../components/header";
import WordCounter from "../components/wordCounter";


export default function Home() {

  
  return (
    <div className="font-galindo m-2 xl:m-4 space-y-4">
      <Header/>
      <WordCounter/>
      <FAQSection />
    </div>
  );
}
