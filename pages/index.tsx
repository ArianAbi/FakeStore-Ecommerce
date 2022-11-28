import Link from "next/link"
import Head from "next/head";
import styles from '/styles/landing.module.css';
import GitHub from "@mui/icons-material/GitHub";

export default function LandingPage() {

  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>

      <div className="flex flex-col justify-start items-center pt-6 mb-6 w-full min-h-screen">

        <div className={styles.container}>
          <Link
            href="/products?category=men%27s+clothing"
            className={`${styles.category_item} bg-[url('/landing_page/men.webp')]`}
          >
            Mens Clothing
          </Link>

          <Link
            href="/products?category=women%27s+clothing"
            className={`${styles.category_item} bg-[url('/landing_page/women.webp')]`}
          >
            Womens Clothing
          </Link>

          <Link
            href="/products?category=electronics"
            className={`${styles.category_item} bg-[url('/landing_page/electronics.webp')]`}
          >
            Electronics
          </Link>

          <Link
            href="/products?category=jewelery"
            className={`${styles.category_item} bg-[url('/landing_page/jewelery.webp')]`}
          >
            Jewelery
          </Link>

          <Link
            href="/products"
            className={`${styles.all_category_item} bg-[url('/landing_page/all.webp')]`}
          >
            All Products
          </Link>
        </div>

        <div className="flex flex-col items-center gap-6 px-6 max-w-[1024px]">
          <h2 className="text-xl font-semibold">What is This Site?</h2>

          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus alias reiciendis illo exercitationem distinctio veritatis ipsam ea quam, nemo, eveniet facere voluptate quidem vel eius dicta ad. Voluptate, aperiam excepturi?
          </p>

          <Link href="https://github.com/ArianAbi/FakeStore-Ecommerce" target="_blank" rel="noreferrer">
            <button className="flex items-center gap-2 bg-green-600 text-white font-semibold py-2 px-5 rounded-md transition-colors hover:bg-green-700">
              Go To Github <GitHub fontSize="small" />
            </button>
          </Link>
        </div>



      </div>
    </>
  )
}