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
    <div className="text-center text-text-primary bg-transparent border-border border-2 min-w-56 rounded-2xl text-xl font-bold pb-1 shadow-shadow shadow-lg hover:z-10 hover:scale-105 2xl:hover:scale-110 hover:bg-background hover:shadow-2xl 2xl:hover:mx-4 2xl:hover:my-0 hover:transition-all">
      <h3 className="flex items-center justify-center gap-2 m-4">
        {icon && <span>{icon}</span>}
        {title}:
      </h3>
      <p className="p-4 m-4 bg-menu-bg shadow rounded-2xl text-text-white">
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
