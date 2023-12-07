import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

const privatePaths = ['/*']
const isPrivate = (path) => {
  return privatePaths.find((x) =>
    path.match(new RegExp(`^${x}$`.replace('*$', '($|/)')))
  )
}

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  function onSuccess (req) {
    console.log('entering a private route')
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null
    },
    pages: {
      signIn: '/auth/login',
      signOut: '/'
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
  // Skip all paths that covered by the middleware. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*|.svg|.png|auth/login).*)']
}
