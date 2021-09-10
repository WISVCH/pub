import styles from './Menu.module.scss';

export const Menu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img src="/images/menu.jpeg" alt="Menu"/>
            </div>
            <section className={styles.menuWrapper}>
                <h2>Menu</h2>
                <p>The /Pub employs a well-balanced and varied menu. Our main sales item is draft beer, where we have four(4) beautiful options to consume this  liquid gold:</p>
                <ul>
                <li>Hertog Jan pilsener on tap (voted #1 pilsener in NL)</li>
                <li>Jupiler pilsener on tap</li>
                <li>Leffe Blond on tap (an authentic blond beer with just a hint of bitterness)</li>
                <li>Tripel Karmeliet on tap (a beautiful triple beer full of exquisite fruity undertones)</li>
                </ul>
                <p>Furthermore, the /Pub offers a wide range of soda’s and bottled beers. There is also a plan in motion to add some seasonal beers to the menu, to create a bit of variation.</p>
                <p>Moreover, we have an ever increasing product range when it comes to snacks. Currently, vegan and vegetarian options are being explored and employed as well! All in all, the deep fried/warm snacks come down to:</p>
                <ul>
                    <li>Bitterballen</li>
                    <li>Chicken Nuggets (NL:kipnuggets)</li>
                    <li>Cheese Stix (Vegetarian)</li>
                    <li>Eggrolls (Vegan)(NL: loempia’s)</li>
                    <li>Tosti (Ham &amp; Cheese)</li>
                    <li>Tosti (Cheese)(Vegetarian)</li>
                </ul>
                <p>Not to mention our delicious other snacks:</p>
                <ul>
                    <li>Paprika flavoured crisps</li>
                    <li>Salted crisps</li>
                    <li>Borrelnootjes!</li>
                </ul>
                <p>If you feel that the menu could be improved in any way, please communicate this to one of the board members(recognisable through their blue vests) whenever you visit the beautiful /Pub!</p>
            </section>
        </div>
    )
}