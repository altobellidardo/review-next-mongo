export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/', '/create', '/update/:path*', '/reviews/:path*']
}
