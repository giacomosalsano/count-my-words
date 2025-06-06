import { Card, CardContent } from '@/components/ui/card'
import { Target, Shield, Zap, LucideIcon } from 'lucide-react'
import SectionCreate from './sectionCreate'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

type Audience = {
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Target,
    title: 'Precisão',
    description:
      'Análise precisa e confiável do seu texto com algoritmos otimizados.',
  },
  {
    icon: Shield,
    title: 'Privacidade',
    description:
      'Seu texto permanece seguro - todo processamento é feito localmente.',
  },
  {
    icon: Zap,
    title: 'Velocidade',
    description:
      'Resultados instantâneos conforme você digita ou cola seu texto.',
  },
]

const audiences: Audience[] = [
  {
    title: 'Para Escritores',
    description:
      'Monitore o progresso dos seus textos, controle o tamanho de artigos e identifique palavras repetitivas.',
  },
  {
    title: 'Para Estudantes',
    description:
      'Garanta que seus trabalhos atendam aos requisitos de tamanho e melhore a qualidade da escrita.',
  },
  {
    title: 'Para Profissionais',
    description:
      'Otimize comunicações, relatórios e apresentações com análises detalhadas de texto.',
  },
  {
    title: 'Para Todos',
    description:
      'Interface simples, resultados instantâneos e total privacidade dos seus dados.',
  },
]

const FeatureCard = ({ icon: Icon, title, description }: Feature) => (
  <Card className="text-center p-6">
    <CardContent className="pt-6">
      <div className="flex justify-center mb-4">
        <Icon className="h-12 w-12 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
)

const AudienceCard = ({ title, description }: Audience) => (
  <div>
    <h4 className="font-semibold text-foreground mb-2">{title}</h4>
    <p className="text-muted-foreground">{description}</p>
  </div>
)

export default function AboutSection() {
  const content = (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Por que usar o Count My Words?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {audiences.map((audience) => (
            <AudienceCard key={audience.title} {...audience} />
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <SectionCreate
      title="Sobre Nós"
      description="O Count My Words é uma ferramenta gratuita e fácil de usar para análise de texto. Desenvolvida para escritores, estudantes, profissionais e qualquer pessoa que precise analisar estatísticas de texto de forma rápida e precisa"
      content={content}
    />
  )
}
