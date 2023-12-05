import { IconEye, IconEdit } from '@tabler/icons-react'
import Link from 'next/link'
import Stars from '@/components/StarsDisplay'
import DeleteButton from '@/components/DeleteButton'
import './ReviewCard.css'

function ReviewCard ({ review }) {
  return (
    <div className='flex flex-col bg-slate-600 p-4 rounded-md text-sm'>
      <div className='ml-10 w-[70%]'>
        <p>Resto:</p>
        <p className='text-xl mb-3'> {review.Restaurant[0].toUpperCase() + review.Restaurant.slice(1)}</p>
        <p className='flex justify-between mb-1'>Food: <Stars number={review.Food} /></p>
        <p className='flex justify-between mb-1'>Service: <Stars number={review.Service} /></p>
        <p className='flex justify-between mb-1'>Quality/Price: <Stars number={review['Quality/Price']} /></p>
        <p className='flex justify-between mb-1'>Enviroment: <Stars number={review.Enviroment} /></p>
      </div>

      <div className='flex mt-3 gap-1'>
        <Link href={'/reviews/' + review._id} className='ReviewCardButton'>
          Look<IconEye width='20px' />
        </Link>
        <Link href={`/update/${review._id}`} className='ReviewCardButton'>
          Update <IconEdit width='20px' />
        </Link>
        <DeleteButton id={review._id} stylesProp='ReviewCardButton' />
      </div>
    </div>
  )
}

export default ReviewCard
