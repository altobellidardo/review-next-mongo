'use client'

import { IconStarFilled } from '@tabler/icons-react'

function Star ({ opacity, number, setStars }) {
  const handleClick = () => {
    setStars(number)
  }

  return (
    <button
      onClick={handleClick}
      className={`text-lg ${opacity ? 'opacity-100 text-yellow-400' : 'opacity-30'}`}
      type='button'
    >
      <IconStarFilled />
    </button>
  )
}
export default function Stars ({ prop, data, setData }) {
  const stars = data[prop]
  const setStars = (number) => {
    setData({ ...data, [prop]: number })
  }
  const handleReset = () => {
    if (stars !== 0) setStars(0)
  }
  return (
    <section className='flex items-center'>
      <span className='inline-block w-28'>
        {prop}
      </span>

      {Array(5).fill(0).map((_, index) => {
        return <Star key={index} number={index + 1} opacity={stars >= index + 1} setStars={setStars} />
      })}

      <span className='mx-2'>( {stars} )</span>

      <button
        className={`text-md ${stars === 0 ? 'opacity-10' : 'opacity-100'}`}
        onClick={handleReset}
        type='button'
      >
        reset
      </button>
    </section>
  )
}
