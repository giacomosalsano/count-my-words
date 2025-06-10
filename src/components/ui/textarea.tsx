import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'p-6 bg-menu-bg/20 place-self-center justify-center mt-2 min-w-96 min-h-42 text-text-primary placeholder:text-center rounded-2xl border-2 border-border hover:border-border hover:bg-menu-bg/30 shadow-lg shadow-shadow placeholder:text-text-primary focus-visible:outline-none dark:bg-input/30 field-sizing-content focus-visible:ring-1 ',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
