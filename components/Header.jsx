import styles from './Header.module.scss'

export const Header = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <a href="/">About</a>
                <a href="/">Menu</a>
                <a href="/">Board</a>
                <a href="/events">Events</a>
                <a href="/">Contact</a>
            </nav>
        </div>
    );
};