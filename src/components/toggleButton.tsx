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
        <div className='bg-gray-300 rounded-full p-1'> <Image src="/mini-moon.svg" alt="Moon icon" width={24} height={24} /></div>
      ) : (
        <div className='bg-gray-300/20  rounded-full p-1'> <Image src="/mini-sun.svg" alt="Sun icon" width={24} height={24} /></div>
      )}
    </button>
  )
}
