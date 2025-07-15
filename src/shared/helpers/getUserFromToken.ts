import { cookies } from 'next/headers';
import axios from 'axios';
import { API_URL } from '@/constants/constants';
import { API_ROUTES } from '@/shared/api/apiRoutes';

export async function getUserFromToken() {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) return null;

    try {
        const res = await axios.get(API_URL + API_ROUTES.ME, {
            headers: { Authorization: `Bearer ${token}` },
        });

        return res.data;
    } catch {
        cookieStore.delete('token');
        return null;
    }
}
