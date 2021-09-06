import styles from './Hero.module.scss'

export const Hero = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            <div className={styles.logo}>
                <img src="/images/logo.png" alt="/Pub logo"/>
            </div>
            {props.children}
        </div>
    )
}