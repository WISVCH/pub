import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

import styles from './Calendar.module.scss'

export const Calendar = () => {
    const eventContent = (info) => {
      console.log(info);
      const title = info.event.title === 'undefined' ? 'Private Activity': info.event.title;
      if (info.event.allDay) {
          return (
              <>
                  <span>All day - {title}</span>
              </>
          )
      }
      else {
          const offset = info.event._instance.range.start.getTimezoneOffset() * 60000;
          const start = new Date(info.event._instance.range.start.getTime() + offset).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
          const end = new Date(info.event._instance.range.end.getTime() + offset).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
          return (
              <>
                  <span>
                      {start} - {end}: {title}
                  </span>
                  <div className={styles.tooltip}>
                      <b>{start} - {end}: {title}</b>
                      {info.event.extendedProps.description && <p>{info.event.extendedProps.description}</p>}
                  </div>
              </>
          )
      }
    }

    return (
        <div className={styles.container}>
            <h2>Events in the <span>/Pub</span></h2>
            <FullCalendar
            plugins={[ dayGridPlugin, googleCalendarPlugin ]}
            googleCalendarApiKey="AIzaSyBuaSuYTLnUyOrBcV6OOXEjZXP96qB3Aes"
            className={styles.calendar}
            eventClassNames={styles.event}
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
        </div>
    )
}