'use client'
import { useSession } from 'next-auth/react'

function UserPage () {
  const { data: session, status } = useSession()

  const creation = new Date(session?.user?.createdAt)

  return (
    <main className='flex flex-col items-center'>
      <h1 className='text-xl'>User Page</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'authenticated' && (
        <>
          <p>username: {session?.user?.username}</p>
          <p>email: {session?.user?.email}</p>
          <p>Created at: {creation.getDate()}/{creation.getMonth() + 1}/{creation.getFullYear()}</p>
        </>
      )}
    </main>
  )
}

export default UserPage
