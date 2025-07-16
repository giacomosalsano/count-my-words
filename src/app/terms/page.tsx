import Header from '@/components/header'
import Footer from '@/components/footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-background-accent rounded-2xl p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-primary-color mb-6">
            Termos de Uso – Count My Words
          </h1>

          <p className="text-text-secondary mb-8">
            Última atualização: 15 de janeiro de 2025
          </p>

          <div className="space-y-6 text-text-secondary">
            <section>
              <h2 className="text-xl font-semibold text-primary-color mb-3">
                Bem-vindo ao Count My Words!
              </h2>
              <p>
                Este site foi desenvolvido com o objetivo de fornecer uma
                ferramenta simples e gratuita para contar palavras, caracteres e
                outras estatísticas de texto.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-color mb-3">
                1. Uso do Serviço
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  O uso deste site é totalmente gratuito e aberto ao público.
                </li>
                <li>
                  Você pode utilizar a ferramenta livremente, desde que respeite
                  estes Termos.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-color mb-3">
                2. Armazenamento de Dados
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  O Count My Words não coleta nem armazena dados pessoais dos
                  usuários.
                </li>
                <li>
                  A única informação salva é a preferência de tema visual (claro
                  ou escuro), que fica armazenada no seu navegador via
                  localStorage.
                </li>
                <li>
                  Essa informação não é compartilhada, enviada a servidores ou
                  usada para fins de rastreamento.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-color mb-3">
                3. Limitação de Responsabilidade
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  O desenvolvedor não se responsabiliza por eventuais perdas,
                  erros ou danos causados pelo uso do site.
                </li>
                <li>
                  O serviço é oferecido &quot;como está&quot;, sem garantias de
                  disponibilidade ou precisão absoluta.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-color mb-3">
                4. Modificações
              </h2>
              <p>
                O site e estes Termos de Uso podem ser atualizados a qualquer
                momento, sem aviso prévio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-color mb-3">
                5. Contato
              </h2>
              <p>
                Em caso de dúvidas ou sugestões, você pode entrar em contato com
                o desenvolvedor por meio dos canais divulgados no site.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
