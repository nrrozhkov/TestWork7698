import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import {User} from "@/shared/types/user";
import api from "@/shared/api/axios";
import {API_ROUTES} from "@/shared/api/apiRoutes";

export async function POST(req: NextRequest) {
    const { username, password } = await req.json();

    try {
        const res = await api.post<User>(API_ROUTES.AUTH, {
            username,
            password,
        });


        const accessToken = res.data.accessToken;
        const user: User = {
            id: res.data.id,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            email: res.data.email,
            accessToken
        };



        (await cookies()).set('token', accessToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 24,
            path: '/',
        });

        return NextResponse.json({ user });
    } catch (e) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }
}
