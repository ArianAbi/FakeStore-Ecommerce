import { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';
import useMediaQuery from '../hooks/useMediaQuery';
import Link from 'next/link';
import styles from '/styles/layout/header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { SearchMobile } from './SearchComponent/SearchMobile';

export const Header = () => {

    const [term, setTerm] = useState<string | string[] | undefined>('');
    const isMd = useMediaQuery('(max-width: 768px)');
    const router = useRouter();
    const { query } = router;

    useEffect(() => {
        if (Object.keys(query).length !== 0) {
            const term: string | string[] | undefined = query.q;
            setTerm(term)
        }
    }, [])


    const onFormSubmit = (e: any) => {
        e.preventDefault();
        if (term !== "") {
            router.query.id && delete router.query.id;
            router.pathname = '/products';
            router.query.q = term
            console.log(router);
            router.push(router).then(router.reload)
        }
        else {
            delete router.query.q
            router.pathname = '/products';
            router.push(router).then(router.reload)
        }
    }

    return (
        <>

            <div className={styles.header_protector} />
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Link href="/">
                        Fstore
                    </Link>
                </div>


                {isMd && <SearchMobile term={term} setTerm={setTerm} onSubmit={onFormSubmit} />}

                {!isMd &&

                    <form className={styles.search} onSubmit={onFormSubmit}>
                        <input
                            className='focus:outline-none'
                            placeholder='search term'
                            value={term}
                            onChange={e => setTerm(e.target.value.toLowerCase())}
                        />
                        <button
                            className='text-black font-bold absolute right-6'
                            type='submit'
                        >
                            <SearchIcon fontSize='medium' sx={{ "&:hover": { color: "#0281C3" } }} />
                        </button>
                    </form>

                }

            </header>


        </>
    )
}