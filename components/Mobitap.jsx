import { Button } from './Button';
import styles from './Mobitap.module.scss';

export const Mobitap = () => {
    return (
        <div className={styles.container}>
            <section>
                <h2>Mobitap</h2>
                <img src="/images/mobitap.png" alt="Mobitap"/>
                <p>The /Pub has a mobile tap that can be used at events on and around the TU Delft campus. The tap is available <b>from €44,- per day</b>.  </p>
                <Button text="Reserve Mobitap" href={"mailto:pub-ewi@tudelft.nl?subject=Mobitap%20-%20%5BYOUR%20ORGANIZATION%2FNAME%5D&body=Dear%20%2FPub%20board%2C%0D%0A%0D%0AFor%20our%20activity%20%5BACTIVITY%20NAME%5D%20we%20would%20like%20to%20reserve%20the%20Mobitap%20on%20%5BDATE%5D%20from%20%5BSTART%20TIME%5D%20to%20%5BEND%20TIME%5D.%20Is%20this%20possible%3F%0D%0A%0D%0AThanks%20in%20advance%2C%0D%0A%5BYOUR%20NAME%5D"}/>
            </section>
            {/* <section>
                <h2>Bottled beers</h2>
            </section> */}
        </div>
    )
}