import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close';
import styles from '/styles/layout/Search.module.css';

interface Search {
    term: string | string[] | undefined,
    setTerm: CallableFunction,
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined
}

export const Search = ({ term, setTerm, onSubmit }: Search) => {

    const [open, setOpen] = useState(false);

    const toggleSearch = () => {
        setOpen(!open)
    }

    return (
        <>

            <button className='z-10 text-black' onClick={toggleSearch}>
                <SearchIcon sx={{ fill: open ? "black" : "white" }} />
            </button>

            <form
                onSubmit={onSubmit}
                className={`${open ? styles.formActive : styles.formDeactive}`}
            >
                <input
                    className={`${open ? styles.active : styles.deactive} text-black`}
                    placeholder='search term'
                    value={term}
                    onChange={e => setTerm(e.target.value.toLowerCase())}
                />

                <div
                    onClick={toggleSearch}
                >
                    <CloseIcon />
                </div>
            </form>

        </>
    )
}