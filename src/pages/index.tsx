import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/Header/header'
import HomeView from '@/HomeView/homeView'
import SecondView from '@/SecondView/secondView'
import ThirdView from '@/ThirdView/ThirdView'
import FourthView from '@/FourthView/FourthView'
import ContactForm from '@/ContactForm/ContactForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
        <>
        <Head>
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
        <ContactForm />
      </main>
    </>
  )
}
