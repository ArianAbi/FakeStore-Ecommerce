import Image from 'next/image';
import Link from 'next/link'
import StarIcon from '@mui/icons-material/Star';

interface products {
    id: string,
    title: string,
    description: string,
    image: string,
    price: number | string,
    rate: number | string
}

export default function (products: products) {
    return (
        <Link href={`/products/${products.id}`}>
            <div
                className="h-[150px] w-full flex justify-between text-gray-700
                md:flex-col md:h-[400px] md:border-2 md:rounded-md"
            >

                <div
                    className="h-full w-[150px] flex items-center justify-center bg-white p-3
                md:h-[250px] md:mr-auto md:ml-auto"
                >
                    {/* <img className="max-h-full w-auto" src={products.image} /> */}
                    {/* <Image src={products.image} alt={products.title} fill sizes='100%' /> */}
                    <Image
                        className="max-h-full w-auto"
                        src={products.image}
                        alt={products.title}
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                        width={512}
                        height={512}
                    />
                </div>

                <div className="h-full w-full flex flex-col p-4
                md:h-[150px]"
                >

                    <h2
                        className="font-bold text-[0.9rem]
                        md:h-[50px] md:truncate md:text-[0.95rem]"
                    >
                        {products.title}
                    </h2>

                    <div className="h-[70px] ml-auto flex flex-1 flex-col justify-end items-end 
                    md:flex-row md:w-full md:justify-between ">
                        <p
                            className="text-green-400 text-lg font-bold"
                        >
                            {products.price}&#8202;$
                        </p>

                        <p className='text-yellow-500 flex gap-1 text-base font-semibold items-center pt-4'>
                            <StarIcon />
                            {products.rate}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}