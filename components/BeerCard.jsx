import styles from './BeerCard.module.scss';

export const BeerCard = ({title, src}) => {
    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            <img src={src} alt={title}/>
        </div>
    )
}