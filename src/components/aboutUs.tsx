import { Card, CardContent } from '@/components/ui/card'
import { Target, Shield, Zap, LucideIcon } from 'lucide-react'
import SectionCreate from './sectionCreate'

interface AboutSectionProps {
  skeleton?: boolean
}

type FeatureType = {
  icon: LucideIcon
  title: string
  description: string
}

type AudienceType = {
  title: string
  description: string
}

const features: FeatureType[] = [
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

const audiences: AudienceType[] = [
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

const FeatureCard = ({ icon: Icon, title, description }: FeatureType) => (
  <Card className="text-center p-6 hover:z-10 hover:scale-105 2xl:hover:scale-110 hover:bg-background hover:shadow-2xl hover:shadow-shadow hover:transition-all">
    <CardContent className="p-2">
      <div className="flex justify-center mb-4">
        <Icon className="h-12 w-12 text-menu-bg" />
      </div>
      <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </CardContent>
  </Card>
)

const AudienceCard = ({ title, description }: AudienceType) => (
  <div className="bg-menu-bg/30 rounded-xl p-4 hover:z-10 hover:scale-105 2xl:hover:scale-110  hover:shadow-2xl hover:shadow-shadow hover:transition-all">
    <h4 className="font-semibold text-text-primary mb-2">{title}</h4>
    <p className="text-text-secondary">{description}</p>
  </div>
)

export default function AboutSection({ skeleton = false }: AboutSectionProps) {
  const content = (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-bold text-text-primary mb-4">
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
      skeleton={skeleton}
    />
  )
}
