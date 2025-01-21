import { NextResponse } from 'next/server'
import { getToken } from "next-auth/jwt"

export async function middleware(request) {

    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
    const pathname = request.nextUrl.pathname;

    const excludedPaths = [
        '/admin/admin-login',
        '/creator/register',
        '/creator/login',
        '/creator/set-password',
        '/login',
        '/register',
    ];

    if (excludedPaths.includes(pathname)) {
        return NextResponse.next();
    }

    if (!token) {
        if (pathname.startsWith('/admin')) {
            return NextResponse.redirect(new URL('/admin/admin-login', request.url));
        }
        if (pathname.startsWith('/creator')) {
            return NextResponse.redirect(new URL('/creator/login', request.url));
        }
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (token.role !== "Admin" && pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL('/admin/admin-login', request.url));
    } else if (token.role !== "Creator" && pathname.startsWith("/creator")) {
        return NextResponse.redirect(new URL('/creator/login', request.url));
    } else if (token.role !== "User" && !pathname.startsWith("/creator") && !pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (token.role == "User" && pathname.startsWith("/new-order") && !token.language) {
        return NextResponse.redirect(new URL('/language', request.url))
    }


}

export const config = {
    matcher: ['/admin/:path*', '/creator/:path*', '/new-order', '/order', '/add-funds', '/wallet', '/'],
};