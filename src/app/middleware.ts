import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;
    console.log(token);
    return NextResponse.next()
}

export const config = {
    matcher: ['/:path*']
}