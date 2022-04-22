import { useState } from 'react';
import styles from './Reservations.module.scss'
import { Button } from './Button';

export const Reservations = () => {

    return (
        <section className={styles.container} id="reservations">
            <div className={styles.left}>
                <h2>Reservations</h2>
                <p>The /Pub is open for drinks on Wednesday and Thursday,
                    but that does not mean that the /Pub is not available the rest of the week.
                    Besides the planned events and the regular opening hours (Wednesday and Thursday from 16:00),
                    it is also possible to reserve the /Pub, if you are a student or an organisation from EEMCS, for example for your graduation drinks or a lunch.
                    Note that an event with 50 or more visitors, or an event with an end time later than 19:00
                    should be communicated at least 2 weeks before the event.
                </p>
                <p>For reservations we also have some additional information:</p>
                <div className={styles.buttons}>
                    <div className={styles.buttonWrapper}>
                        <Button href="/files/User_agreement_Pub.pdf">User Agreement</Button>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <Button href="/files/Reservation_Rules.pdf">Reservation rules</Button>
                    </div>
                </div>

            </div>
            <div className={styles.right}>
                <div className={styles.card}>
                    <h3>Want to make a reservation?</h3>
                    <p>Please fill in the reservation form below!</p>
                    <div className={styles.buttonWrapper}>
                        <Button href="https://forms.gle/ToEBDo5Jc21uzNJS7">Reservation form</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}