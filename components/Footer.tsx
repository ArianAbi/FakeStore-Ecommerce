import Link from 'next/link';
import styles from '/styles/layout/footer.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer_header}>
                Made With Next.Js
            </p>

            <div className={styles.source_code_section}>
                Source Code :
                <Link href='https://github.com/ArianAbi/FakeStore-Ecommerce' target="_blank"><GitHubIcon /></Link>
            </div>


            <div className={styles.date}>
                @2022
            </div>
        </footer>
    )
}