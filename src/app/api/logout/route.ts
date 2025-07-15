import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
    try {
        const cookieStore = await cookies();
        cookieStore.delete('token');

        return NextResponse.json({ message: 'Logged out' }, { status: 200 });
    } catch (error) {
        console.error('Logout error:', error);

        return NextResponse.json(
            { message: 'Logout failed', error: String(error) },
            { status: 500 }
        );
    }
}
