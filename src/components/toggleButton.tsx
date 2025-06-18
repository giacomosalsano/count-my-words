'use client'
import { useEffect, useState } from 'react'
import { getSystemTheme } from '@/shared/utils/getSystemTheme'
import { Skeleton } from './ui/skeleton'
import { Moon, SunDim } from 'lucide-react'

interface ToggleButtonProps {
  skeleton?: boolean
}

export default function ToggleButton({ skeleton = false }: ToggleButtonProps) {
  const [isLightMode, setIsLightMode] = useState<boolean>(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsLightMode(savedTheme === 'light')
    } else {
      const userPrefersLight = getSystemTheme() === 'light'
      setIsLightMode(userPrefersLight)
    }
  }, [])

  useEffect(() => {
    const html = document.documentElement
    if (isLightMode) {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }, [isLightMode])

  const toggleMode = () => {
    setIsLightMode((prev) => !prev)
  }

  return skeleton ? (
    <Skeleton className="w-10 h-10 rounded-full bg-details p-2" />
  ) : (
    <button
      onClick={toggleMode}
      className="p-2 flex items-center transition-colors"
      aria-label="Toggle LightMode/DarkMode"
    >
      {isLightMode ? (
        <div className="bg-background/50 hover:bg-background rounded-full p-2">
          {' '}
          <Moon size={20} className="text-text-info fill-text-info" />
        </div>
      ) : (
        <div className="bg-background hover:bg-background/50 rounded-full p-2">
          {' '}
          <SunDim size={20} className="text-text-warning fill-text-warning" />
        </div>
      )}
    </button>
  )
}
