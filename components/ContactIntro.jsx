import styles from './ContactIntro.module.scss'

export const ContactIntro = () => {
    return (
        <section className={styles.container}>
          <h1>Contact</h1>
          <p>The /Pub is located in the basement of EEMCS, the faculty of Electrical Engineering, Mathematics and Computer Science of the Technical University of Delft.
              When you enter the building, take the stairs on your right hand side to the basement.
              This will lead you to the bike storage and then the /Pub is on the right side.
              In case the EEMCS building is closed, you can use the side entrace on the right side of the building next to the "/Pub" sign.
              If the door is not open, you can ring the bell and someone will open it for you.</p>
          <p>The faculty EEMCS is building 36 on the TU campus and it is the highest building on campus with a TU Delft logo on the roof.</p>
            <p>If you have any questions, please don't hesitate to contact us via <a href="pub-ewi@tudelft.nl">pub-ewi@tudelft.nl</a>!</p>
        </section>
    )
}