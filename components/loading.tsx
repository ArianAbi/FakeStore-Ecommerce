import styles from '/styles/loading.module.css';

export const Loading = () => {
    return (
        <div className="absolute flex flex-col items-center justify-center w-full h-screen bg-black bg-opacity-60 z-[9999] text-white">
            <div className="animate-spin">
                <div className="w-[45px] h-[45px] border-4 rounded-lg"></div>
            </div>
            <div className='mt-4 text-lg font-semibold'>
                Loading...
            </div>
        </div>
    )
}