import Link from "next/link"
import Head from "next/head";

export default function LandingPage() {

  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>

      <div className="h-screen w-screen flex flex-col items-center justify-center gap-4 bg-black">
        <h2 className="text-4xl">
          Still in Development
        </h2>
        <Link
          className="text-cyan-400 text-lg underline"
          href="/products"
        >
          visit /products or click on this link
        </Link>
      </div>
    </>
  )
}