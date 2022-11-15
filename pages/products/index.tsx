import Product_Item from "./components/Product_Item";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Products({ _products }: any) {

    const [products, setProducts] = useState([]);
    const router = useRouter();
    const { query } = router;

    useEffect(() => {
        if (Object.keys(query).length !== 0) {
            const filterdProducts = _products.filter((product: any) => {

                const title: string = product.title.toLowerCase();

                if (title.includes(`${query?.q}`)) {
                    return product
                }

            })

            setProducts(filterdProducts);
        }
        else {
            setProducts(_products)
        }
    }, [])

    return (
        <>

            <div
                className="h-full w-full grid grid-cols-1 gap-0"
            >

                {products.map((product: any) => {
                    return (
                        <Product_Item
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            description={product.description}
                            price={product.price}
                            rating={product.rating}
                        />
                    )
                })}

            </div>

        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/products.json');
    const _products = await res.json()

    return {
        props: { _products }
    }
}