'use client';

import { useAuth } from '@/features/auth/store/useAuth';
import {Product} from "@/shared/types/product";
import styles from './product.module.scss';

type Props = {
    product: Product;
};

export default function ProductItem({ product }: Props) {
    const isAuthenticated = useAuth((s) => s.isAuthenticated);
    const {thumbnail, title, category, price} = product;
    return (
        <div className={styles.card} style={{justifyContent: 'space-between'}}>
            <img src={thumbnail} alt={title}  />
            <div className={styles.cardContent}>
                <h3>{title}</h3>
                <p>{price}</p>
                <p>{category}</p>
            </div>
            {isAuthenticated && <button>Buy me!</button>}
        </div>


    )
}