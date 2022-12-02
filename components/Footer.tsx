import Link from 'next/link';
import styles from '/styles/layout/footer.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import Instagram from '@mui/icons-material/Instagram';
import Telegram from '@mui/icons-material/Telegram';

export const Footer = () => {
    // return (
    //     <footer className={styles.footer}>
    //         <p className={styles.footer_header}>
    //             Made With Next.Js
    //         </p>

    //         <div className={styles.source_code_section}>
    //             Source Code :
    //             <Link href='https://github.com/ArianAbi/FakeStore-Ecommerce' target="_blank" rel="noreferrer" ><GitHubIcon /></Link>
    //         </div>


    //         <div className={styles.date}>
    //             @2022
    //         </div>
    //     </footer>
    // )
    return (
        <>
            <div className={styles.container}>
                <div>
                    <h2>Need Help?</h2>
                    <Link href="#">
                        increase contrast
                    </Link>
                    <Link href="#">
                        store Lactor
                    </Link>
                </div>
                <div>
                    <h2>Contact Us</h2>
                    <Link href="#">
                        contact us
                    </Link>
                    <Link href="#">
                        Careers
                    </Link>
                </div>
                <div>
                    <h2>Legal</h2>
                    <Link href="#">
                        legal terms
                    </Link>
                    <Link href="#">
                        privacy policy
                    </Link>
                    <Link href="#">
                        FAQ
                    </Link>
                </div>
                <div>
                    <h2>Follow Us</h2>
                    <div className='flex gap-4 text-black'>
                        <Link href='https://github.com/ArianAbi/FakeStore-Ecommerce' target="_blank" rel="noreferrer" ><GitHubIcon fontSize='large' />
                        </Link>
                        <Link href="#">
                            <Instagram fontSize='large' />
                        </Link>
                        <Link href="#">
                            <Telegram fontSize='large' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='text-center py-5 bg-gray-50 text-[0.85rem] border-t-2'>
                Copyright @2022 All rights reserved
            </div>
        </>
    )
}