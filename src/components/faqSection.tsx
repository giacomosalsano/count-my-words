import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import SectionCreate from './sectionCreate'

const faqItems = [
  {
    question: 'Como funciona o contador de palavras?',
    answer:
      'Nosso contador analisa seu texto em tempo real, contando palavras, caracteres, frases e parágrafos. Também identifica as palavras mais frequentes para ajudar na análise do conteúdo.',
  },
  {
    question: 'O texto é armazenado em algum lugar?',
    answer:
      'Não! Todo o processamento acontece localmente no seu navegador. Seu texto não é enviado para nenhum servidor, garantindo total privacidade e segurança dos seus dados.',
  },
  {
    question: 'Posso usar textos em outros idiomas?',
    answer:
      'Sim! O contador funciona com textos em qualquer idioma que use o alfabeto latino. A contagem de palavras e caracteres é universal e funciona perfeitamente com português, inglês, espanhol e outros idiomas.',
  },
  {
    question: 'Há um limite de tamanho para o texto?',
    answer:
      'Não há limite rígido, mas para melhor performance recomendamos textos de até 100.000 caracteres. Para textos muito grandes, a análise pode ficar mais lenta dependendo do seu dispositivo.',
  },
]

const content = (
  <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
    {faqItems.map((item, index) => (
      <AccordionItem key={index} value={`item-${index}`}>
        <AccordionTrigger>{item.question}</AccordionTrigger>
        <AccordionContent>
          <p>{item.answer}</p>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
)

export function FAQSection() {
  return (
    <SectionCreate
      title="FAQ"
      description="Tire suas dúvidas sobre como usar o contador de palavras"
      content={content}
    />
  )
}
