import Image from 'next/image';
import {Product} from "@/shared/types/product.types";

const ProductCard = ({ image, price, title}: Product) => {
    return (
        <div style={{display: "flex", flexDirection: "column", gap: 5}}>
            <Image src={image} alt={title} width={200} height={150} />
            <h2>{title}</h2>
            <p>{price}</p>
        </div>
    );
};

export default ProductCard;