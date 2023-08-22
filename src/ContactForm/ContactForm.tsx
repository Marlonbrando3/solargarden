import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import {PiNumberSquareOneThin, PiNumberSquareTwoThin, PiNumberSquareThreeThin, PiNumberSquareFourThin} from 'react-icons/pi'
import { TbPointFilled } from 'react-icons/tb'

export default function ContactForm() {


  return (
    <div id="contact" className=' w-screen md:h-[700px] pb-[100px]'>
      <div className='w-[90vw] mx-[2.5vw] md:w-[1000px] h-full flex flex-col-reverse'>
        <div className='h-full border-yellow-600 md:w-[500px] flex justify-center items-center relative'>
          <div className='md:absolute bg-[#56BA46] w-[90vw] md:w-[1100px] h-[580px] border-[rgb(167,224,106)] md:pl-[540px] top-[30px] -left-[45vw] rounded-[20px] shadow-xl text-white text-[16px] flex flex-col justify-center px-[10px] md:px-auto'>
          <form>
            <div className='flex flex-col'>
              <label>Imię i nazwisko*</label>
              <input className='bg-white md:w-[400px] h-[40px] mb-[10px] rounded-[5px] text-black' required></input>
            </div>
            <div className='flex flex-col'>
              <label>Numer telefonu*</label>
              <input className='bg-white md:w-[400px] h-[40px] mb-[10px] rounded-[5px] text-black' required></input>
            </div>
            <div className='flex flex-col'>
              <label>Adres email*</label>
              <input className='bg-white md:w-[400px] h-[40px] mb-[10px] rounded-[5px] text-black' required></input>
            </div>
            <div className='flex flex-col mb-[10px] '>
              <label>Adres email</label>
              <textarea className='bg-white md:w-[400px] h-[120px] rounded-[5px] text-black'></textarea>
            </div>
            <div className='flex'>
              <input id="check" type="checkbox" className='w-[25px] h-[25px] cursor-pointer' required></input>
              <div data-for="check" className='text-[12px] w-[400px] leading-0 ml-[10px]'>Wyrażam zgodę na przetwarzanie moich danych osobowych pozostawionych w formularzu w celu kontaktu i przedstawienia oferty, do kontaktu mailowgo telefonicznego celem realizacji założeń wynikających z wszytkich późniejszych postanowień w ramach współpracy. Polityka prywatności<br></br></div>
              </div>
              <button type="submit" className='bg-white text-[22px] text-green-700 px-[45px] py-[15-px] rounded-[5px] my-[15px]'>Wyślij</button>
          </form>
          </div>
          <div className='z-50 w-[550px] h-full flex items-center'>
            <p></p>
          </div>
        </div>
        <div className='h-full md:w-[500px] flex flex-col justify-center'>
        <Link href="/#contact" data-name="contact"><div><p className='text-[25px] md:text-[30px] leading-9'>Skontaktuj się z nami lub<br></br> poproś o bezpłatną ofertę</p>
          </div></Link>
          <div className='bg-[#a7e06a]/[0.7] h-[5px] w-[50vw] -ml-[20vw] mt-[8px] mb-[10px]'></div>
          <p><b>Solar Garden</b> <br></br> marka Onesta Group Sp z o.o</p>
          <p>46-100 Namysłów,,<br></br> ul. Oleśnicka 13B</p>
          <p>-</p>
          <p>kontakt@solargarden.com.pl</p>
          <p>+48 669 75 25 25</p>
          <p className='mt-[40px]'></p>
          <p><b>Adres rejestrowy firmy:</b></p>
          <p>Onesta Group Sp z o.o</p>
          <p>53-148 Wrocław,<br></br> ul. Wolbromska 18/1b</p>
          <p>NIP: 8992922378</p>
          `
        </div>
      </div>
    </div>
  )
}
