import styles from './Menu.module.scss';

export const Menu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img src="/images/menu/menukaartupdate-1-min.jpg" alt="Menu part 1"/>
            </div>
            <div className={styles.imageWrapper}>
                <img src="/images/menu/menukaartupdate-2-min.jpg" alt="Menu part 2"/>
            </div>
        </div>
    )
}