import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}> AirMeal</div>
            <nav className={styles.nav}>
                <Link href="/services" className={styles.navItem}>Services
                </Link>
                <Link href="/contact" className={styles.navItem}>Contact
                </Link >
                <Link href="/contact" className={styles.navItem}>Partners
                </Link >
            </nav >
        </header >
    );
}
