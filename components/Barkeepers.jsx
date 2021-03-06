import { useState } from 'react';
import styles from './Barkeepers.module.scss'
import { Button } from './Button';

export const Barkeepers = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <section className={styles.container} id="barkeepers">
          <div>
            <h2>Barkeepers</h2>
            <p>The /Pub Barkeepers are an esteemed and essential group of people for the /Pub. On a voluntary basis, these great people make sure that you have the best possible /Pub experience! Not only do they enable you to get any drink, nourishment or deep fried snack easily and smoothly at the bar, but they also make for the friendly and inclusive atmosphere in the /Pub. All Barkeepers are inherently, as they would say in Dutch: “Ouderwets gezellig”. Being a barkeeper also comes with a number of perks. Not only are you actively doing something to help the EWI community, but in the meantime you improve your social skills, you obtain horeca experience and you get free drinks!</p>
            <p>If you also want to join this awesome group, don't be shy to tell te /Pub board or fill in the form below!</p>
            <Button href={"https://docs.google.com/forms/d/e/1FAIpQLScoQ7gQhZGa4gWFgvvEF8bRmDlowrvSAcz36qnOvaptcGOEwA/viewform?embedded=true"}>Interest form</Button>
            <p>For barkeepers we also have some additional information:</p>
            <div className={styles.buttonWrapper}>
              <Button href="/files/Introduction Barkeepers.pdf">Introduction</Button>
              <Button href="/files/Stappenplan%20Openen%20&%20Sluiten%20_Pub.pdf">Opening &amp; Closing</Button>
              <Button href="/files/Schadeformulier.pdf">Damage form</Button>
              
            </div>
          </div>
          <div>
              <img src="/images/barkeepers.jpg" alt="Barkeepers"/>
          </div>
        </section>
    )
}