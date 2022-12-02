import Link from 'next/link';
import { useEffect } from 'react'
import { useRouter } from 'next/router';
import useMediaQuery from '../../hooks/useMediaQuery';
import Head from 'next/head';
import Image from 'next/image';
import styles from '/styles/product_dynamic_route.module.css';
import AddToCard_Mobile from './components/AddToCard_Mobile';
import StarIcon from '@mui/icons-material/Star';

export default function Product_Detail(product: any) {

    const router = useRouter();
    const isMd = useMediaQuery('(max-width: 768px)');

    return (
        <>

            <Head>
                <title>{product.title}</title>
            </Head>

            <div
                className="max-h-fit w-full flex flex-col gap-3 p-4 mx-auto
                md:flex-row md:justify-center md:p-8 md:min-h-[70vh]"
            >

                <div className='flex-col md:w-[100%] md:border-2 md:p-6 md:rounded-md md:shadow-sm  '>
                    <div className={styles.breedcrumb}>
                        <span><Link href='/products'>Products</Link></span> / <span className={styles.active}>{product.id}</span>
                    </div>

                    <div
                        className='h-[40vh] p-10 bg-white flex justify-center items-center
                        md:h-[50vh] md:max-h-[650px] md:w-full md:max-w-[1024px] md:p-4'
                    >
                        <Image
                            className='max-h-full w-auto'
                            src={product.image}
                            alt={product.title}
                            loading="eager"
                            width={1024}
                            height={1024}
                        />
                    </div>

                    <span className={"gl_filter_tag md:block md:mt-8"}>
                        <Link
                            href="#"
                            onClick={() => {
                                delete router.query.id
                                router.pathname = "/products"
                                router.query.category = product.category
                                router.push(router)
                            }}
                        >
                            {product.category}
                        </Link>
                    </span>
                </div>

                <div className='pb-6 max-h-fit 
                md:w-[650px] md:flex md:flex-col md:justify-between md:px-12 md:border-2 md:rounded-md md:shadow-sm'
                >
                    <>
                        <h2
                            className="text-xl text-black font-semibold py-4 border-y-2
                        md:border-t-0 md:border-b-2
                        "
                        >
                            {product.title}
                        </h2>



                        <p className={styles.rating}>
                            <StarIcon />
                            {product.rating.rate}
                        </p>
                    </>

                    <h3 className='text-black text-lg font-semibold'>
                        Description :
                        <p className={styles.description}>
                            {product.description}
                        </p>
                    </h3>

                    {/* render add to card if we are desktop size */}
                    {!isMd &&

                        <div className='flex w-full justify-between mt-auto'>
                            <p className="font-bold text-xl text-green-600">
                                {product.price}&#8202;$
                            </p>

                            <button className={styles.add_to_cart_button}>
                                Add To Card
                            </button>
                        </div>

                    }
                </div>


                {isMd &&
                    <AddToCard_Mobile price={product.price} />
                }
            </div>



        </>
    )
}

export async function getServerSideProps(context: any) {

    const { id } = context.query;

    const res = await (await fetch(`${process.env.REACT_APP_URL}/products.json`)).json()
    const products = res.filter((product: any) => {

        const ID_AS_NUMBER = parseInt(id);

        if (product.id === ID_AS_NUMBER) {
            return product
        }
    })

    if (products.length !== 1) {
        return { notFound: true }
    }

    const productToShow = products[0]



    return {
        props: productToShow
    }
}