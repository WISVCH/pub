import styles from './ContactIntro.module.scss'

export const ContactIntro = () => {
    return (
        <section className={styles.container}>
          <h1>Contact</h1>
          <p>De /Pub bevindt zich in de kelder van EWI, de faculteit Elektrotechniek, Wiskunde en Informatica van de Technische Universiteit Delft. Als u binnen komt neemt u direct de trap rechts naar beneden. In de fietsenkelder aangekomen zit de /Pub rechtsvoor u. Indien het gebouw al gesloten is kunt u de zijingang nemen aan de rechterkant van het gebouw naast het bord "/Pub". Als de deur niet open is kunt u op de bel drukken.</p>
          <p>De faculteit is gebouw 36 in de TU-wijk en is het hoogste van de TU-wijk met het TU-logo op het dak.</p>

          <h3>Met Openbaar Vervoer</h3>
          <p>Vanaf station Delft kunt een bus 40 nemen richting Rotterdam. U stapt dan uit bij halte Cornelis Drebbelweg. Ook kunt u bus 69 en 174 nemen. U moet dan uitstappen bij halte stieltjesweg.</p>
          
          <h3>Met de Auto</h3>
          <p>Vanaf de A13 afslag 10 (Delft-Zuid, TU-Delft), direct daarop afslag TU-wijk. Onder aan de afslag gaat u links. Neem de eerste afslag links, deze weg blijft u volgen tot u op de kruising met de Rotterdamseweg komt. Hier dient u rechts af te slaan. Vervolgens is het de tweede afslag rechts. U rijdt dan naar de achterkant van de faculteit toe.</p>
        </section>
    )
}