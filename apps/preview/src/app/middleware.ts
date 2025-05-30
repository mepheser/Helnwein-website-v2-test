import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {draftMode} from "next/headers";

export async function middleware(request: NextRequest) {
    const draftMode1 = await draftMode();
    draftMode1.enable()
    return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
    matcher: '/preview/:path*',
}