import styles from './Header.module.scss'

export const Header = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/events">Events</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};