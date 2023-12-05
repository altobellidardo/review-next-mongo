import Link from 'next/link'

export default function Custom404 () {
  return (
    <main className='flex flex-col items-center pt-10'>
      <h1 className='text-3xl'>
        404 Error
      </h1>
      <p>Page not found</p>

      <Link href='/' className='text-blue-500'>
        Go Home
      </Link>
    </main>
  )
}
