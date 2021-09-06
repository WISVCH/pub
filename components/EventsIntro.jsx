import styles from './Intro.module.scss'

export const EventsIntro = () => {
    return (
        <section className={styles.container}>
          <h1>Events in the <span>/Pub</span></h1>
          <p>The /Pub is open on wednesday and thursday from 16:00 to 19:00. It is possible to organize events in the /Pub. This can only be done outside opening hours and only for special occasions.</p>
          <h2>Schedule</h2>
          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FAmsterdam&src=OHJldmtrMjhtMGd1MjBwMTFjY21wMG5ybmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23C0CA33&showTz=0&showCalendars=1&showNav=1&showDate=1&showPrint=0&showTabs=0&showTitle=0&mode=AGENDA" style={{borderWidth: 0 + 'px'}} width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </section>
    )
}