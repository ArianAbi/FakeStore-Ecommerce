import Link from "next/link"
import Head from "next/head";
import styles from '/styles/landing.module.css';

export default function LandingPage() {

  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>

      {/* <div className="h-screen w-full  flex flex-col items-center justify-center gap-4 bg-black">
        <h2 className="text-4xl">
          Still in Development
        </h2>
        <Link
          className="text-cyan-400 text-lg underline"
          href="/products"
        >
          visit /products or click on this link
        </Link>
      </div> */}

      <div className="flex flex-col justify-start items-center pt-6 w-full min-h-screen">

        <h2 className="text-xl text-black font-bold mb-4 md:text-2xl lg:text-3xl">Welcome to FakeStore</h2>

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
      </div>
    </>
  )
}