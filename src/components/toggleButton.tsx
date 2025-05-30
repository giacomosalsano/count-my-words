'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function ToggleButton() {
  const [isLightMode, setIsLightMode] = useState(false)


  useEffect(() => {
    const html = document.documentElement

    if (isLightMode) {
      html.classList.add('light_mode')
    } else {
      html.classList.remove('light_mode')
    }
  }, [isLightMode])

  const toggleMode = () => {
    setIsLightMode((prev) => !prev)
  }

  return (
    <button
      onClick={toggleMode}
      className="p-2 flex items-center gap-2 transition-colors"
      aria-label="Toggle LightMode/DarkMode"
    >
      {isLightMode ? (
        <div className='bg-details/50 hover:bg-details rounded-full p-1'> <Image src="/mini-moon.svg" alt="Moon icon" width={20} height={20} /></div>
      ) : (
        <div className='bg-details/50 hover:bg-details rounded-full p-1'> <Image src="/mini-sun.svg" alt="Sun icon" width={20} height={20} /></div>
      )}
    </button>
  )
}
