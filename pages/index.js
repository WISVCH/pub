import Head from 'next/head'
import { Beers } from '../components/Beers'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import { Hero } from '../components/Hero'
import { Intro } from '../components/Intro'
import { Menu } from '../components/Menu'
import {ClosedMessage} from "../components/ClosedMessage";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>/Pub</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8eac91"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <meta name="apple-mobile-web-app-title" content="/Pub"/>
        <meta name="application-name" content="/Pub"/>
        <meta name="msapplication-TileColor" content="#8eac91"/>
        <meta name="msapplication-config" content="/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet"></link>
      </Head>
      <Hero>
        <Header/>
      </Hero>
      <main>
          <ClosedMessage/>
        <Intro/>
        <Beers/>
        <Menu/>
      </main>

      <Footer/>
    </div>
  )
}
