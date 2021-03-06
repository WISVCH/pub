import '../styles/globals.scss'

import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}