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
          <p>The /Pub is open for drinks on wednesday and thursday, but that does not mean that the /Pub is not available the rest of the week. Besides the planned events and the regular opening hours (wednesday and thursday 16:00 - 19:00), it is also possible to reserve the /Pub, for example for your graduation drinks or a lunch. To make a reservation an email can be sent to pub-ewi@tudelft.nl (In the near future it will also be possible to make a reservation via this website). This email should include the following: Information about the organizer, start and end time of the event, expected amount of visitors and a short description about the event. Note that an event with 50 or more visitors, or an event with an end time later than 19:00 should be communicated at least 2 weeks before the event.</p>
          <p>Below you can find the calendar with all the planned events.</p>
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