'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import '../styles.css'

export default function RegisterPage () {
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

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (res.ok) setError(null)
      else throw new Error(await res.text())

      const nextAuthRes = await signIn('credentials', {
        username: data.username,
        password: data.password,
        redirect: false
      })
      if (nextAuthRes?.ok) return router.push('/user')
    } catch (error) {
      const errorObj = JSON.parse(error.message)
      setError(errorObj.message)
    }
  }

  return (
    <main className='auth'>
      <h1>Register</h1>

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
          type='email'
          placeholder='Email'
          name='email'
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
        />
        <button type='submit'>
          Register
        </button>
      </form>
      <Link href='/auth/login' className='text-blue-500 opacity-50 hover:opacity-100 underline'>
        go to Login
      </Link>
    </main>
  )
}
