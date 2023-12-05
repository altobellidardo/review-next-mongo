import ReviewCard from '@/components/ReviewCard'

const fetchReviews = async () => {
  const res = await fetch(process.env.HOST + '/api/reviews', { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch data')
  const data = await res.json()
  return data
}
export default async function Home () {
  try {
    const reviews = await fetchReviews()
    if (reviews.length === 0) {
      return (
        <p className='text-xl italic mt-2 w-full text-center px-20'>
          No reviews yet, click the pen icon to add one
        </p>
      )
    }

    return (
      <main className='grid px-5 md:grid-cols-2 gap-3 mb-2'>
        {
          reviews.map(review => (
            <ReviewCard key={review._id} review={review} />
          ))
        }
      </main>
    )
  } catch (error) {
    return <p className='text-center mt-6 text-lg'>Something went wrong</p>
  }
}
