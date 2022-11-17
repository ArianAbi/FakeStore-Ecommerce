import '../styles/globals.css'
import { useEffect, useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {

  const [atProductIdPage, setAtProductIdPage] = useState(false);
  const router = useRouter();
  const isMd = useMediaQuery('(max-width: 768px)');

  useEffect(() => {

    //checking to see if we are in /products/[id] route 
    //to add a div after footer so it dosent hide behind
    //AddToCard component

    if (router.query.id) {
      setAtProductIdPage(true)
    }
    else {
      setAtProductIdPage(false)
    }

  }, [router])

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <Component {...pageProps} />
        <Footer />

        {/* add a div with the hight of AddToCard component if we are at product/[id] route and we are in mobile screen */}
        {atProductIdPage && isMd && <div className='h-[90px] w-full' />}
      </div>
    </>
  )
}
