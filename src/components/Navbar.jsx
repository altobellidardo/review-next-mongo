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

      <div className='flex gap-4'>
        {
          pathname !== '/create' &&
            <Link href='/create'>
              <IconPencilPlus />
            </Link>
        }
        <Link href='/user'>User</Link>
        <Link href='/auth/register'>
          Register
        </Link>
        <Link href='/api/auth/signout'>
          Signout
        </Link>
        <Link href='/api/auth/signin'>
          Signin
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
