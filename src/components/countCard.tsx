export interface CardProps {
  title: string
  icon?: React.ReactNode
  value: number
}

export default function Card({ title, icon, value }: CardProps) {
  return (
    <div className="text-center text-text-primary bg-transparent border border-primary min-w-56 rounded-2xl text-xl font-bold pb-1">
      <h3 className="flex align-middle text-center justify-center gap-2 m-4">
        {icon ? (
          <>
            {icon} {title}
          </>
        ) : (
          <>{title}</>
        )}
        :
      </h3>

      <p className="p-4 m-4 bg-ghost/20 shadow rounded-2xl">{value}</p>
    </div>
  )
}
