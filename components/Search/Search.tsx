import React from 'react';

interface Search {
    term: string | string[] | undefined,
    setTerm: CallableFunction,
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined
}

export const Search = ({ term, setTerm, onSubmit }: Search) => {
    return (
        <form onSubmit={onSubmit}>
            <input
                className="w-[200px] h-[25px] left-0 right-0 top-0 bottom-0 px-4 rounded-full text-black
                md:absolute md:mx-auto md:my-auto md:w-[300px]
                lg:w-[400px]
                "
                placeholder='search term'
                value={term}
                onChange={e => setTerm(e.target.value.toLowerCase())}
            />
        </form>
    )
}