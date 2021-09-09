import Head from 'next/head'
import { ContactIntro } from '../components/ContactIntro'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>Events - /Pub</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet"></link>
      </Head>
      <Header/>
      <main>
        <ContactIntro/>
      </main>

      <Footer/>
    </div>
  )
}
