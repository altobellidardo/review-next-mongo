import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

const privatePaths = ['/*']
const isPrivate = (path) => {
  return privatePaths.find((x) =>
    path.match(new RegExp(`^${x}$`.replace('*$', '($|/)')))
  )
}

const authMiddleware = withAuth(
  function onSuccess (req) {
    console.log('entering a private route')
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null
    },
    pages: {
      signIn: '/auth/login'
    },
    secret: process.env.NEXTAUTH_SECRET
  }
)

export default function middleware (req) {
  if (isPrivate(req.nextUrl.pathname)) {
    return (authMiddleware)(req)
  }
  return NextResponse.next()
}
export const config = {
  matcher: ['/', '/create', '/update/:path*', '/reviews/:path*', '/user']
}
