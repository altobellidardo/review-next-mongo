/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import DeleteButton from '@/components/DeleteButton'
import Stars from '@/components/StarsInput'
import { IconLoader, IconSend } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

function Loading () {
  return (
    <p className='text-2xl flex justify-center items-center gap-3 mt-2'>
      <IconLoader className='animate-spin' />
      Getting review...
    </p>
  )
}

const fetchReview = async (id) => {
  const res = await fetch(`/api/reviews/${id}`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch data')
  const data = await res.json()
  return data
}

export default function Page ({ params }) {
  const [review, setReview] = useState({})
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetchReview(params.id)
      .then((data) => setReview(data))
      .finally(() => setLoading(false))
  }, [])

  const handleInput = (e) => {
    const { id, value } = e.target
    setReview({ ...review, [id]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch(`/api/reviews/${review._id}`, {
      method: 'PUT',
      body: JSON.stringify(review),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    router.replace(`/reviews/${review._id}`)
    router.refresh()
  }

  if (loading) return <Loading />

  return (
    <main>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-fit mx-auto mt-5'>
        <div>
          <label htmlFor='Restaurant' className='block'>
            Restaurant
          </label>
          <input
            value={review.Restaurant}
            className='w-80 p-2 text-slate-900'
            type='text'
            id='Restaurant'
            placeholder='italpast'
            onInput={handleInput}
          />
        </div>

        <div>
          <label htmlFor='Description' className='block'>
            Description
          </label>
          <textarea
            value={review.Description}
            className='w-80 p-2 text-slate-900'
            id='Description'
            placeholder='a good expierience...'
            onInput={handleInput}
          />
        </div>

        {['Food', 'Service', 'Quality/Price', 'Enviroment'].map((item) => (
          <Stars key={item} prop={item} data={review} setData={setReview} />
        ))}

        <div className='flex flex-col gap-2'>
          <button type='submit' className='w-80 bg-slate-700 py-2 rounded-xl flex gap-2 justify-center hover:text-slate-700 hover:bg-slate-400'>
            Save
            <IconSend width={20} />
          </button>
          <DeleteButton id={review._id} stylesProp='w-80 bg-slate-700 py-2 rounded-xl flex gap-2 justify-center hover:text-slate-700 hover:bg-slate-400' />
        </div>
      </form>
    </main>
  )
}
