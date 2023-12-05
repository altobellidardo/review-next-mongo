import DeleteButton from '@/components/DeleteButton'
import Stars from '@/components/StarsDisplay'
import { IconEdit } from '@tabler/icons-react'
import Link from 'next/link'

const fetchReview = async (id) => {
  const res = await fetch(process.env.HOST + '/api/reviews/' + id, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch data')
  const data = await res.json()
  return data
}

async function ReviewPage ({ params }) {
  const review = await fetchReview(params.id)

  return (
    <main className='mx-auto w-[80%]'>
      <section className='w-80 mx-auto'>
        <div className='my-2'>
          <p>Resto:</p>
          <span className='text-2xl font-bold'>
            {review.Restaurant[0].toUpperCase() + review.Restaurant.slice(1)}
          </span>
        </div>
        <div className='my-2'>
          <p>Review:</p>
          <p className='text-md'>{review.Description}</p>
        </div>
        <div className='my-2 flex justify-between'>
          <p>Food:</p>
          <Stars number={review.Food} extend />
        </div>
        <div className='my-2 flex justify-between'>
          <p>Service:</p>
          <Stars number={review.Service} extend />
        </div>
        <div className='my-2 flex justify-between'>
          <p>Quality/Price:</p>
          <Stars number={review['Quality/Price']} extend />
        </div>
        <div className='my-2 flex justify-between'>
          <p>Enviroment:</p>
          <Stars number={review.Enviroment} extend />
        </div>
      </section>

      <div className='flex flex-col mt-6 gap-2 w-80 mx-auto'>
        <Link className='bg-slate-700 py-2 rounded-xl flex gap-2 justify-center hover:text-slate-700 hover:bg-slate-400' href={`/update/${review._id}`}>
          Update <IconEdit width='20px' />
        </Link>
        <DeleteButton id={review._id} stylesProp='bg-slate-700 py-2 rounded-xl flex gap-2 justify-center hover:text-slate-700 hover:bg-slate-400' />
      </div>
    </main>
  )
}

export default ReviewPage
