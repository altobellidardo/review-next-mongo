'use client'

import Link from 'next/link'
import { IconPencilPlus } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import './NavBar.css'

function Navbar () {
  const pathname = usePathname()
  const { status } = useSession()

  const loggedIn = status === 'authenticated'
  const showCreate = pathname !== '/create' && status === 'authenticated'
  const showUser = pathname !== '/user'
  const showAuth = pathname !== '/auth/login' && pathname !== '/auth/register'

  return (
    <nav className='flex items-center justify-between p-4'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>Review App</h1>
      </Link>

      <div className='flex gap-2'>
        {
          showCreate &&
            <Link href='/create' className='NavBarButton'>
              <IconPencilPlus />
            </Link>
        }
        {
          loggedIn
            ? (
              <>
                {
                  showUser &&
                    <Link href='/user' className='NavBarButton'>User</Link>
                }
                <button onClick={() => signOut()} className='NavBarButton'>
                  Signout
                </button>
              </>
              )
            : (
                showAuth &&
                  <Link href='/auth/login' className='NavBarButton'>
                    Login / Register
                  </Link>
              )
        }
      </div>
    </nav>
  )
}

export default Navbar
