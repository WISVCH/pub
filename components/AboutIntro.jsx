import styles from './Intro.module.scss'

export const AboutIntro = () => {
    return (
        <section className={styles.container}>
          <h1>About the <span>/Pub</span></h1>
          <p>The /Pub is a bar located in the basement of EEMCS, the Faculty of Electrical Engineering, Mathematics and Computer Science of Delft University of Technology. It is open every Wednesday and Thursday from 4pm to 7pm. The exact closing time depends on the bartenders on duty and any scheduled activities after closing.</p>
          <p>Since 2019, the /Pub is being run by 6 students, the /Pub Board. This Board consists of 3 students from W.I.S.V Christiaan Huygens (CH) and 3 students from Elektrotechnische Vereeniging (ETV). You can view the current /Pub Board on the Board page. It is a part time Board that makes sure that everything in the /Pub runs smoothly, such as the financial health, inventory, bartenders, big renovations etc. Next to that, they also organise events in the /Pub. You can view the events on the Events page. The /Pub Board is (almost) always somewhere in the /Pub, so when you are in the /Pub, don’t hesitate to chat with us!</p>
        </section>
    )
}