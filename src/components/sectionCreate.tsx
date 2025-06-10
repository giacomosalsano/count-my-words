import { Skeleton } from './ui/skeleton'

interface SectionCreateProps {
  title: string
  icon?: React.ReactNode
  description: string
  content: React.ReactElement
  shadowOn?: boolean
  skeleton?: boolean
}

export default function SectionCreate({
  title,
  icon,
  description,
  content,
  shadowOn = true,
  skeleton = false,
}: SectionCreateProps) {
  const titleContent = skeleton ? (
    <div className="mb-4 ">
      <Skeleton className="max-w-xl m-auto h-12 bg-details rounded-2xl" />
    </div>
  ) : icon ? (
    <section className="flex align-middle gap-2 text-center items-center justify-center mb-4">
      {icon}
      <h2 className="text-3xl font-bold text-foreground ">{title}</h2>
    </section>
  ) : (
    <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
  )

  const formattedID = `${title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '')
    .toLowerCase()}-section`

  return (
    <section
      id={formattedID}
      className={`py-16 ${shadowOn ? 'shadow-2xl shadow-shadow' : ''} rounded-2xl`}
    >
      <div className={`rounded-2xl container mx-auto px-4`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {titleContent}
            {skeleton ? (
              <Skeleton className="max-w-2xl m-auto h-24 bg-details rounded-2xl" />
            ) : (
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>

          <div>
            {skeleton ? (
              <Skeleton className="max-w-6xl h-62 bg-details rounded-2xl" />
            ) : (
              content
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
