interface SectionCreateProps {
  title: string
  icon?: React.ReactNode
  description: string
  content: React.ReactElement
  shadowOn?: boolean
}

export default function SectionCreate({
  title,
  icon,
  description,
  content,
  shadowOn = true,
}: SectionCreateProps) {
  const titleContent = icon ? (
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
      className={`py-16 ${shadowOn ? 'shadow-2xl' : ''} rounded-2xl`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {titleContent}
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div>{content}</div>
        </div>
      </div>
    </section>
  )
}
