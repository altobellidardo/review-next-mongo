'use client'

import Link from 'next/link'
import { IconPencilPlus } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'

function Navbar () {
  const pathname = usePathname()

  return (
    <nav className='flex items-center justify-between p-4'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>Review App</h1>
      </Link>
      {
        pathname !== '/create' &&
          <Link href='/create'>
            <IconPencilPlus />
          </Link>
      }
    </nav>
  )
}

export default Navbar
