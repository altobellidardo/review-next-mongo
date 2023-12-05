'use client'

import { useState } from 'react'
import { IconSend } from '@tabler/icons-react'
import Stars from '@/components/StarsInput'
import { useRouter } from 'next/navigation'

const INITIAL_DATA = {
  Restaurant: '',
  Description: '',
  Food: 0,
  Service: 0,
  'Quality/Price': 0,
  Enviroment: 0
}

function CreatePage () {
  const [data, setData] = useState(INITIAL_DATA)
  const router = useRouter()

  const handleInput = (e) => {
    const { id, value } = e.target
    setData({ ...data, [id]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch('/api/reviews', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    setData(INITIAL_DATA)
    router.replace('/')
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-fit mx-auto mt-5'>
      <div>
        <label htmlFor='Restaurant' className='block'>
          Restaurant
        </label>
        <input
          value={data.Restaurant}
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
          value={data.Description}
          className='w-80 p-2 text-slate-900'
          id='Description'
          placeholder='a good expierience...'
          onInput={handleInput}
        />
      </div>

      {['Food', 'Service', 'Quality/Price', 'Enviroment'].map((item) => (
        <Stars key={item} prop={item} data={data} setData={setData} />
      ))}

      <button type='submit' className='w-80 bg-slate-700 py-2 rounded-xl flex gap-2 justify-center hover:text-slate-700 hover:bg-slate-400'>
        Submit
        <IconSend width='20px' />
      </button>
    </form>
  )
}

export default CreatePage
