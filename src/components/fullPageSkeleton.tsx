import { Skeleton } from './ui/skeleton'

export default function FullPageSkeleton() {
  return (
    <div className="bg-blue-100">
      <section>
        <Skeleton className="h-[80px] w-full bg-details rounded-2xl" />
        <Skeleton className="h-[16px] w-[16px] bg-details" />
      </section>
    </div>
  )
}
