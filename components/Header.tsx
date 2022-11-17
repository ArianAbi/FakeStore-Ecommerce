import { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
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
            router.query.q = term
            router.push(router).then(router.reload)
            //Router.replace(`/products?q=${term}`).then(Router.reload)
        }
        else {
            delete router.query.q
            router.push(router).then(router.reload)
            //Router.replace('/products').then(Router.reload)
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
                            placeholder='search term'
                            value={term}
                            onChange={e => setTerm(e.target.value.toLowerCase())}
                        />
                    </form>

                }

            </header>


        </>
    )
}