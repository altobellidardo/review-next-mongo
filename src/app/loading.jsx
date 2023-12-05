import { IconLoader } from '@tabler/icons-react'

export default function Loading () {
  return (
    <p className='text-2xl flex justify-center items-center gap-3 mt-2'>
      <IconLoader className='animate-spin' />
      Loading
    </p>
  )
}
