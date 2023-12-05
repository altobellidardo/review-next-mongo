'use client'

import { IconTrash } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

export default function DeleteButton ({ id, stylesProp }) {
  const router = useRouter()

  function handleDelete () {
    fetch(`/api/reviews/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    router.replace('/')
    router.refresh()
  }
  return (
    <button className={stylesProp} onClick={handleDelete}>
      Delete
      <IconTrash width='20px' />
    </button>
  )
}
