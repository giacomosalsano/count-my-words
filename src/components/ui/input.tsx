import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground rounded-2xl border hover:border-2  hover:border-foreground bg-transparent p-3 shadow-xs outline-none",
  
        className
      )}
      {...props}
    />
  )
}

export { Input }
