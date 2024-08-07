import withAuth, { NextAuthMiddlewareOptions, NextRequestWithAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'


const middleware = (request: NextRequestWithAuth) => {
    console.log('[MIDDLEWARE_TOLEN]: ', request.nextauth.token)

    const isPrivateRoutes = request.nextUrl.pathname.startsWith('/dashboard')
    const isAdminUser = request.nextauth.token?.role === 'admin'

    if(isPrivateRoutes && !isAdminUser) {
        return NextResponse.rewrite(new URL('/denied', request.url))
    }
}

const callbackOptions: NextAuthMiddlewareOptions = {}

export default withAuth(middleware, callbackOptions)

export const config = {
    matcher: ['/dashboard/:path*'],
}