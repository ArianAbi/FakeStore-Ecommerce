import { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '/styles/layout/header.module.css';
import SearchIcon from '@mui/icons-material/Search';

export const Header = () => {

    const [term, setTerm] = useState('');
    const router = useRouter();
    const { query } = router;

    useEffect(() => {
        if (Object.keys(query).length !== 0) {
            setTerm(query.q)
        }
    }, [])

    const onFormSubmit = (e: any) => {
        e.preventDefault();
        if (term !== "") {
            Router.replace(`/products?q=${term}`).then(Router.reload)
        }
        else {
            Router.replace('/products').then(Router.reload)
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

                <form className={styles.search} onSubmit={onFormSubmit}>
                    <input
                        placeholder='search term'
                        value={term}
                        onChange={e => setTerm(e.target.value.toLowerCase())}
                    />
                </form>
            </header>


        </>
    )
}