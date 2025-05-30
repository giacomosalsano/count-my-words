import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "p-2 bg-ghost/50 place-self-center justify-center mt-2 px-3 min-w-96 min-h-24 text-text-primary placeholder:text-center rounded-xl border  shadow-xs outline-non  placeholder:text-text-primary focus-visible:outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 field-sizing-content transition-[color,box-shadow] focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
