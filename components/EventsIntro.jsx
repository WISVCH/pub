import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

import styles from './Intro.module.scss'
import calendarStyles from './Calendar.module.scss'

export const EventsIntro = () => {
    const eventContent = (info) => {
      console.log(info);
      return (
        <>
          <span>{info.timeText} - {info.event.title}</span>
          <div className={calendarStyles.tooltip}>
            <b>{info.timeText} - {info.event.title}</b>
            {info.event.extendedProps.description && <p>{info.event.extendedProps.description}</p>}
          </div>
        </>
      )
    }
    return (
        <section className={styles.container}>
          <h1>Events in the <span>/Pub</span></h1>
          <p>The /Pub is open on wednesday and thursday from 16:00 to 19:00. It is possible to organize events in the /Pub. This can only be done outside opening hours and only for special occasions.</p>
          <h2>Schedule</h2>
          <FullCalendar
            plugins={[ dayGridPlugin, googleCalendarPlugin ]}
            googleCalendarApiKey="AIzaSyBuaSuYTLnUyOrBcV6OOXEjZXP96qB3Aes"
            eventClassNames={calendarStyles.event}
            eventContent={eventContent}
            eventTimeFormat={{
              hour: '2-digit',
              minute: '2-digit',
              meridiem: false,
              hour12: false
            }}
            eventSources = {{
              googleCalendarId: "8revkk28m0gu20p11ccmp0nrng@group.calendar.google.com"
            }}
            initialView="dayGridMonth"
            hiddenDays={[0,6]}
          />
        </section>
    )
}