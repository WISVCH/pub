import styles from './Menu.module.scss';

export const Menu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img src="/images/menu/menukaart-1.jpg" alt="Menu part 1"/>
            </div>
            <div className={styles.imageWrapper}>
                <img src="/images/menu/menukaart-2.jpg" alt="Menu part 2"/>
            </div>
        </div>
    )
}