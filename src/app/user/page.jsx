'use client'
import { useSession } from 'next-auth/react'

function UserPage () {
  const { data: session, status } = useSession()

  return (
    <main className='flex flex-col items-center'>
      <h1 className='text-xl'>User Page</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'unauthenticated' && <p>Please sign in</p>}
      <p>username: {session?.user?.username}</p>
      <p>email: {session?.user?.email}</p>
    </main>
  )
}

export default UserPage
