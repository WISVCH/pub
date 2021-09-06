import { BeerCard } from './BeerCard';
import styles from './Beers.module.scss';

export const Beers = () => {
    return (
        <div className={styles.container}>
            <section>
                <h2>Draft beers</h2>
                <div className={styles.beersWrapper}>
                    <BeerCard title="Tripel Karmeliet" src="/images/beers/tripel-karmeliet.jpeg"/>
                    <BeerCard title="Leffe Blond" src="/images/beers/leffe-blond.png"/>
                    <BeerCard title="Hertog Jan" src="/images/beers/hertog-jan.png"/>
                    <BeerCard title="Jupiler" src="/images/beers/jupiler.png"/>
                </div>
            </section>
            {/* <section>
                <h2>Bottled beers</h2>
            </section> */}
        </div>
    )
}