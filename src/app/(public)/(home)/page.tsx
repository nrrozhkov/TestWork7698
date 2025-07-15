import {Suspense} from "react";
import Spinner from "@/shared/ui/Spinner/Spinner";
import ProductListWidget from "@/widgets/ProductListWidget/ProductListWidget";


export default function Home() {

    return (
        <Suspense fallback={<Spinner />}>
            <ProductListWidget />
        </Suspense>
    );
}

