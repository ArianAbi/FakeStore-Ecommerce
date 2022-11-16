import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Product_Item from "./components/Product_Item";

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

            <Head>
                <title>Products</title>
            </Head>

            <div
                className="h-full w-full grid grid-cols-1 gap-0 
                md:grid-cols-3 md:gap-4 md:px-4 md:py-8
                lg:grid-cols-4 lg:px-6
                xl:grid-cols-5
                "
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
                            rate={product.rating.rate}
                        />
                    )
                })}

            </div>

        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.REACT_APP_URL}/products.json`);
    const _products = await res.json()

    return {
        props: { _products }
    }
}