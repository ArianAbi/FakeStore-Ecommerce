import Link from 'next/link'
import StarIcon from '@mui/icons-material/Star';

interface products {
    id: string,
    title: string,
    description: string,
    image: string,
    price: number | string,
    rating: {
        rate: number,
        count: number
    }
}

export default function (products: products) {
    return (
        <Link href={`/products/${products.id}`}>
            <div
                className="h-[180px] w-full flex justify-between text-gray-700 border-b-2"
            >

                <div className="h-full w-[150px] flex items-center justify-center bg-white p-3">
                    <img
                        className="max-h-full w-auto"
                        src={products.image}
                    />
                </div>

                <div className="h-full w-full flex flex-col p-4">

                    <h2
                        className="font-bold"
                    >
                        {products.title}
                    </h2>

                    <div className="h-[70px] ml-auto flex flex-1 flex-col justify-end items-end ">
                        <p
                            className="text-green-400 text-lg font-bold"
                        >
                            {products.price}&#8202;$
                        </p>

                        <p className='text-yellow-500 flex gap-1 text-base font-semibold items-center pt-4'>
                            <StarIcon />
                            {products.rating.rate}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}