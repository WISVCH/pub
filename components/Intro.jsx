import styles from './Intro.module.scss'

export const Intro = () => {
    return (
        <section className={styles.container}>
          <h1>Welcome to the <span>/Pub</span></h1>
          <p>The /Pub is the faculty bar of EEMCS, where you can grab something to drink after a long day of studying or working. It is located in the basement of EEMCS and the bar was recently renovated! It is a place where students and faculty members can come together and catch up with a drink or snack. It is open on Wednesdays and Thursdays from 4pm to 7pm. There are also activities organised in the /Pub, like a beer cantus or new years drinks. It is a bar full of ‘gezelligheid’, so don’t hesitate to pay a visit to the /Pub!</p>
        </section>
    )
}