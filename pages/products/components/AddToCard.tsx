import styles from '/styles/product_dynamic_route.module.css';

interface AddToCard {
    price: string,
}

export default function AddToCard({ price }: AddToCard) {
    return (
        <div className="w-full h-[90px] flex justify-between items-center px-6
        bg-gray-50 text-black fixed bottom-0 left-0 border-t-4 z-10 shadow-[0_0px_20px_0px_rgba(0,0,0,0.15)]"
        >
            <p className="font-bold text-xl text-green-600">
                {price}&#8202;$
            </p>

            <button className={styles.add_to_cart_button}>
                Add To Card
            </button>
        </div>
    )
}