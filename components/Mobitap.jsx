import { Button } from './Button';
import styles from './Mobitap.module.scss';

export const Mobitap = () => {
    return (
        <div className={styles.container} id="mobitap">
            <section>
                <h2>Mobitap</h2>
                <img src="/images/mobitap.png" alt="Mobitap"/>
                <p>The Mobitap is a beautiful piece of state of the art engineering. The mobitap is, what the name suggests it is: A flexible, easily movable and mobile beer tap unit. The Mobitap enables the /Pub, and also especially external parties to pour their precious liquid gold from anywhere they want! It is especially useful for outside activities such as CoBo’s, BBQ’s and Buitenborrels.</p>
                {/* <p>The /Pub has a mobile tap that can be used at events on and around the TU Delft campus. The tap is available <b>from €44,- per day</b>.  </p> */}
                <Button href={"https://forms.gle/upKjKFsmLMoGTQsT8"}>Reserve Mobitap</Button>
            </section>
            {/* <section>
                <h2>Bottled beers</h2>
            </section> */}
        </div>
    )
}