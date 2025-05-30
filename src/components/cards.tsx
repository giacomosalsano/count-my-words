import { ReactNode } from "react"

interface CardProps {
  title: string
  icon?:  React.ReactNode
  value: number
}

export default function Card({title, icon, value}: CardProps) {
  return (
    <div className="text-center gap-4 text-text-info bg-red-50">
      <div className='flex text-center justify-center text-xl font-bold p-2'>
        {icon ? <>{icon} {title}</> : <>{title}</>}:
        </div>
      <div className="flex items-center justify-center p-4 bg-details shadow rounded-xl ">
        <p className="text-xl font-bold">{value}</p>
        </div>
    </div>
  )
}