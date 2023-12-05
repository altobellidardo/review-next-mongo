'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import '../styles.css'

function LoginPage () {
  const [errorState, setError] = useState(null)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password')
    }

    const nextAuthRes = await signIn('credentials', {
      username: data.username,
      password: data.password,
      redirect: false
    })
    if (nextAuthRes?.ok) return router.push('/')
    else setError(nextAuthRes.error)
  }

  return (
    <main className='auth'>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        {errorState &&
          <p className='w-60 bg-red-400 text-slate-800 text-center py-1 rounded-sm leading-tight'>
            {errorState}
          </p>}

        <input
          type='text'
          placeholder='Username'
          name='username'
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
        />
        <button type='submit'>
          Login
        </button>
      </form>
      <Link href='/auth/register' className='text-blue-500 opacity-50 hover:opacity-100 underline'>
        go to Register
      </Link>
    </main>
  )
}

export default LoginPage