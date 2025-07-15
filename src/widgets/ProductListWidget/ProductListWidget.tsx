'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/shared/types/product';
import { getBaseUrl } from '@/shared/helpers/getBaseUrl';
import ProductItem from '@/entities/product/Product';
import Spinner from '@/shared/ui/Spinner/Spinner';
import styles from './productList.module.scss';

export default function ProductListWidget() {
    const [products, setProducts] = useState<Product[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`${getBaseUrl()}/api/products`);
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                setError('Failed to load products');
            }
        };

        fetchProducts();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    if (!products) {
        return <Spinner />;
    }

    return (
        <div className={styles.container}>
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}
