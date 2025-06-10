import React, { ButtonHTMLAttributes, useMemo } from 'react'

import { VariantProps, tv } from 'tailwind-variants'
import { Skeleton } from './skeleton'

const buttonStyles = tv({
  base: 'flex border-2 border-transparent rounded-2xl transition-all font-bold cursor-pointer items-center justify-center text-text-white',
  variants: {
    typeColor: {
      primary: 'bg-primary-color hover:bg-primary-color/60',
      secondary: 'bg-secondary-color hover:bg-secondary-color/60',
    },
    block: {
      true: 'w-full',
      false: 'h-fit',
    },
    size: {
      sm: 'text-sm py-1 px-2',
      md: 'text-md py-2 px-4',
      lg: 'text-xl py-3 px-6',
    },
  },
})

type ButtonVariants = VariantProps<typeof buttonStyles>

export type ButtonTypeColor = 'primary' | 'secondary'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  skeleton?: boolean
  icon?: React.ReactNode
  children?: React.ReactNode
}

export default function Button({
  typeColor = 'primary',
  disabled,
  skeleton = true,
  children,
  block = false,
  icon,
  size = 'md',
  ...props
}: ButtonProps) {
  const content = useMemo(() => {
    return (
      <div className="flex items-center gap-2">
        {icon && <div className="w-4 h-4">{icon}</div>}
        {children}
      </div>
    )
  }, [children, icon])

  return skeleton ? (
    <Skeleton
      className={`${buttonStyles({
        block,
        size,
      })} bg-details w-20 h-10 rounded-2xl `}
    />
  ) : (
    <button
      disabled={disabled}
      {...props}
      className={buttonStyles({
        block,
        size,
        typeColor,
      })}
    >
      {content}
    </button>
  )
}
