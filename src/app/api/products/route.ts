import { NextRequest, NextResponse } from 'next/server';
import api from '@/shared/api/axios';
import { API_ROUTES } from '@/shared/api/apiRoutes';
import { Product } from '@/shared/types/product';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const limit = Number(searchParams.get('limit')) || 12;

    try {
        const response = await api.get<{ products: Product[] }>(API_ROUTES.PRODUCTS, {
            params: { limit },
        });

        return NextResponse.json(response.data.products);
    } catch (error) {
        return NextResponse.json(
            { message: 'Fetch error', error: String(error) },
            { status: 500 }
        );
    }
}
