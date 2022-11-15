import styles from '/styles/product_dynamic_route.module.css';
import AddToCard from './components/AddToCard';
import StarIcon from '@mui/icons-material/Star';

export default function Product_Detail(product: any) {
    return (
        <>

            <div
                className={styles.container}
            >

                <div className={styles.breedcrumb}>
                    <span><a href='/products'>Products</a></span> / <span className={styles.active}>{product.id}</span>
                </div>

                <div className='h-[50vh] p-10 bg-white flex justify-center items-center'>
                    <img
                        className='max-h-full w-auto'
                        src={product.image}
                    />
                </div>

                <span className={styles.category_tag}>
                    <a href='/products'>{product.category}</a>
                </span>

                <div className=' pb-6 max-h-fit'>
                    <h2
                        className={styles.title}
                    >
                        {product.title}
                    </h2>



                    <p className={styles.rating}>
                        <StarIcon />
                        {product.rating.rate}
                    </p>

                    <h3 className='text-black text-2xl font-semibold'>
                        Description :
                        <p className={styles.description}>
                            {product.description}
                        </p>
                    </h3>
                </div>


                <AddToCard price={product.price} />

                {/* this is to cover lost height of AddToCard component */}
                <div className='h-[90px] w-full -z-10' />
            </div>



        </>
    )
}

export async function getServerSideProps(context: any) {

    const { id } = context.query;

    const res = await (await fetch('http://localhost:3000/products.json')).json()
    const products = res.filter((product: any) => {

        const ID_AS_NUMBER = parseInt(id);

        if (product.id === ID_AS_NUMBER) {
            return product
        }
    })

    if (products.length !== 1) {
        throw new Error('product not found')
    }

    const productToShow = products[0]



    return {
        props: productToShow
    }
}