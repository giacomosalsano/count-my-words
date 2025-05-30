import ToggleButton from '@/components/toggleButton'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='flex w-full  justify-between items-center align-middle bg-ghost p-2 rounded-2xl text-primary'>
      <Image src='/count-my-word-full-logo-black-Photoroom.png' alt='Logo' width={100} height={100} />
      <nav>
        <ul className='flex gap-2'>
          <Button>Counter</Button>
          <Button>FAQ</Button>
          <Button>About Us</Button>
        </ul>
      </nav>
      <ToggleButton/>
    </div>
  )
}