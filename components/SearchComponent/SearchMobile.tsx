import { useState, useEffect } from 'react';
import styles from '/styles/layout/search_mobile.module.css';
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close';

interface Search {
    term: string | string[] | undefined,
    setTerm: CallableFunction,
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined
}

export const SearchMobile = ({ term, setTerm, onSubmit }: Search) => {

    const [open, setOpen] = useState(false);

    const toggleSearch = () => {
        setOpen(!open)
    }

    return (
        <>
            <button className='absolute right-8 z-10 text-black' onClick={toggleSearch}>
                <SearchIcon sx={{ fill: open ? "black" : "white" }} />
            </button>

            {open &&
                <>
                    <div className='absolute w-screen h-full z-10 bg-sky-900'></div>
                    <form
                        onSubmit={onSubmit}
                        className={`${open ? styles.formActive : styles.formDeactive} relative transition-all duration-[20]`}
                    >
                        <input
                            autoFocus
                            className={`${open ? styles.active : styles.deactive} text-black focus:outline-none`}
                            placeholder='search term'
                            value={term}
                            onChange={e => setTerm(e.target.value.toLowerCase())}
                        />

                        <button
                            className='absolute right-4 text-black'
                            type="submit"
                        >
                            <SearchIcon fontSize="small" />
                        </button>

                    </form>
                    <button
                        onClick={toggleSearch}
                        className='absolute right-4 z-20'
                    >
                        <CloseIcon />
                    </button>
                </>
            }

        </>
    )
}