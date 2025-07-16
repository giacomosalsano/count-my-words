import { Tooltip } from './ui/tooltip'

export interface CountCardProps {
  title: string
  icon?: React.ReactNode
  value: number
  tooltipDescription?: string
}

export default function CountCard({
  title,
  icon,
  value,
  tooltipDescription,
}: CountCardProps) {
  const cardContent = (
    <div className="text-center text-text-primary bg-transparent border-primary-color/30 border-2 min-w-56 rounded-2xl text-xl font-bold pb-1 shadow-shadow shadow-lg hover:z-10 hover:scale-105 2xl:hover:scale-110 hover:bg-primary-accent hover:shadow-primary-glow/20 hover:shadow-2xl 2xl:hover:mx-4 2xl:hover:my-0 hover:transition-all">
      <h3 className="flex items-center justify-center gap-2 m-4 text-primary-color">
        {icon && <span>{icon}</span>}
        {title}:
      </h3>
      <p className="p-4 m-4 bg-primary-color text-text-white shadow rounded-2xl">
        {value}
      </p>
    </div>
  )

  return tooltipDescription ? (
    <Tooltip content={tooltipDescription}>{cardContent}</Tooltip>
  ) : (
    cardContent
  )
}
