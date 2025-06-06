import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'p-6 bg-ghost/20 place-self-center justify-center mt-2 min-w-96 min-h-42 text-text-primary placeholder:text-center rounded-2xl border border-primary hover:border-foreground hover:bg-ghost/70 shadow-xs shadow-shadow outline-non placeholder:text-text-primary focus-visible:outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 field-sizing-content  focus-visible:ring-1 focus-visible:ring-foreground disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
