import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import Header from '@/Header/header'
import HomeView from '@/HomeView/homeView'
import SecondView from '@/SecondView/secondView'
import ThirdView from '@/ThirdView/ThirdView'
import FourthView from '@/FourthView/FourthView'
import Partners from '@/Partners/partners'
import ContactForm from '@/ContactForm/ContactForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
        <>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NBHETQV47R"></Script>
        <Script id="google-analitycs">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NBHETQV47R');`}

        </Script>
        <Head>
          <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1"></meta>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap" rel="stylesheet"></link>
        </Head>
      <main>
        <Header/>
        <HomeView />
        <SecondView />
        <ThirdView />
        <FourthView />
        <Partners />
        <ContactForm />
      </main>
    </>
  )
}
