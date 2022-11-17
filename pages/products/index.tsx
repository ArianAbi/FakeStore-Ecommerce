import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Product_Item from "./components/Product_Item";
import SearchIcon from '@mui/icons-material/Search';
import CategoryIcon from '@mui/icons-material/Category';


export default function Products({ _products }: any) {

    const [products, setProducts] = useState([]);
    const router = useRouter();
    const { query } = router;

    useEffect(() => {

        let _filterdProducts = _products;

        _filterdProducts = query.category ? filterByCategory(query.category, _filterdProducts) : _filterdProducts;
        _filterdProducts = query.q ? filterBySearchTerm(query.q, _filterdProducts) : _filterdProducts;

        setProducts(_filterdProducts);

    }, [])

    return (
        <>

            <Head>
                <title>Products</title>
            </Head>

            <div
                className="flex items-end gap-2 pt-3 px-3 font-semibold md:scale-100 [&>span]:text-[0.7rem] [&>span]:md:text-[0.85rem]"
            >
                {query.category &&
                    <span
                        className="gl_filter_tag"
                        onClick={() => {
                            delete router.query.category;
                            router.push(router).then(router.reload)
                        }}
                    >
                        <span className="pr-2"><CategoryIcon fontSize="small" /></span>
                        {query.category}
                        <span className="pl-2 scale-90 font-semibold">&#x2715;</span>
                    </span>
                }

                {query.q &&
                    <span
                        className="gl_filter_tag"
                        onClick={() => {
                            delete router.query.q;
                            router.push(router).then(router.reload)
                        }}
                    >
                        <span className="pr-2"><SearchIcon fontSize="small" /></span>
                        {query.q}
                        <span className="pl-2 scale-90 font-semibold">&#x2715;</span>
                    </span>
                }
            </div>


            <div
                className="h-full w-full grid grid-cols-1 gap-0 
                md:grid-cols-3 md:gap-4 md:px-4 md:py-4
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

    function filterBySearchTerm(term: string | string[], dataToFilter: any[]) {
        const filterdedData = _products.filter((product: any) => {

            const title: string = product.title.toLowerCase();

            if (title.includes(`${query.q}`)) {
                return product
            }

        })

        return filterdedData
    }

    function filterByCategory(category: string | string[] | undefined, dataToFilter: any) {

        const filterdData = _products.filter((product: any) => {
            if (product.category === category) {
                return product
            }
        })

        return filterdData
    }
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.REACT_APP_URL}/products.json`);
    const _products = await res.json() as any[]

    return {
        props: { _products }
    }
}