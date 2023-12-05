import { IconStarFilled } from '@tabler/icons-react'

function Stars ({ number, extend = false }) {
  return (
    <span className='text-sm flex '>
      {Array(5).fill(0).map((_, index) => {
        if (index <= number - 1) return <IconStarFilled key={index} className='text-yellow-400' width='20px' />
        else return <IconStarFilled key={index} opacity={0.2} width='20px' />
      })}
      {extend &&
        <span className='ml-3'>
          {`(${number}/5)`}
        </span>}
    </span>
  )
}

export default Stars
