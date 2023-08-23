import React from 'react'
import Link from 'next/link'
import { useState, useRef } from 'react'
import Image from 'next/image'
import {PiNumberSquareOneThin, PiNumberSquareTwoThin, PiNumberSquareThreeThin, PiNumberSquareFourThin} from 'react-icons/pi'
import { TbPointFilled } from 'react-icons/tb'

export default function ContactForm() {

  const name:any = useRef();
  const photovoltaic:any = useRef();
  const heatPump:any = useRef();
  const EnergyBank:any = useRef();
  const mail:any = useRef();
  const phone:any = useRef();
  const message:any = useRef();


  const handleSendingForm = () => {



  }

  const handleSendForm = (e:any) => {
    e.preventDefault();

    fetch('/api/sendform', {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name.current.value,
            photovoltaic: photovoltaic.current.value,
            heatPump: heatPump.current.value,
            EnergyBank: EnergyBank.current.value,
            phone: phone.current.value,
            mail: mail.current.value,
            message: message.current.value,
        })
    })
        // .then(res => res.json())
        // .then(data => {
        //     if (data.info === "sendet") {
        //         console.log("wysłano maila")
        //         aprovalwindow.current.style.width = "100%"

        //         setTimeout(() => {
        //             aprovalwindow.current.style.width = "0px"

        //         }, 5000)
        //     } else {
        //         console.log("niewysłano ")
        //     }
        // })
}


  return (
      <div id="contact" className='w-[90vw] mx-[2.5vw] md:mx-auto md:w-screen h-full flex flex-col-reverse md:flex-row justify-center'>
        <div className='h-full border-yellow-600 md:w-[1000px] flex flex-col-reverse md:flex-row justify-center items-center relative'>
          <div className='bg-[#56BA46] w-[90vw] md:w-[750px] h-[740px] border-[rgb(167,224,106)] md:-ml-[250px] md:pr-[10px] rounded-l-[20px] md:rounded-l-[0px] rounded-r-[20px] shadow-xl text-white text-[16px] flex flex-col items-end justify-center px-[10px] md:px-auto'>
          <form onSubmit={handleSendForm} className='w-full md:w-auto'>
            <div className='flex flex-col'>
              <label>Imię i nazwisko*</label>
              <input ref={name} className='bg-white md:w-[400px] h-[40px] mb-[10px] rounded-[5px] text-black' required></input>
            </div>
            <div className='flex flex-col mb-[10px] '>
              <div>Interesują mnie usługi (wybór wielokrotny)</div>
              <div className='h-[80px] flex flex-wrap'>
              <div className='w-full'>
                <input ref={photovoltaic} type="checkbox" className=''></input>
                <label className='ml-[5px]'>Fotowoltaika</label>
              </div>
              <div className='w-full'>
                <input ref={heatPump}  type="checkbox" className=''></input>
                <label className='ml-[5px]'>Pompa ciepła</label>
              </div>
              <div className='w-full'>
                <input ref={EnergyBank}  type="checkbox" className=''></input>
                <label className='ml-[5px]'>Magazyn energii</label>
              </div>
              </div>
            </div>
            <div className='flex flex-col'>
              <label>Numer telefonu*</label>
              <input ref={phone} className='bg-white md:w-[400px] h-[40px] mb-[10px] rounded-[5px] text-black' required></input>
            </div>
            <div className='flex flex-col'>
              <label>Adres email*</label>
              <input ref={mail} className='bg-white md:w-[400px] h-[40px] mb-[10px] rounded-[5px] text-black' required></input>
            </div>
            <div className='flex flex-col mb-[10px] '>
              <label>Twoja wiadomość</label>
              <textarea ref={message}className='bg-white md:w-[400px] h-[120px] rounded-[5px] text-black'></textarea>
            </div>
            <div className='flex'>
              <input id="check" type="checkbox" className='w-[25px] h-[25px] cursor-pointer' required></input>
              <div data-for="check" className='text-[12px] w-[400px] leading-0 ml-[10px]'>Wyrażam zgodę na przetwarzanie moich danych osobowych pozostawionych w formularzu w celu kontaktu i przedstawienia oferty, do kontaktu mailowgo telefonicznego celem realizacji założeń wynikających z wszytkich późniejszych postanowień w ramach współpracy. Polityka prywatności<br></br></div>
              </div>
              <button type="submit" className='bg-white text-[22px] text-green-700 px-[45px] py-[15-px] rounded-[5px] my-[15px]'>Wyślij</button>
          </form>
        </div>
        <div className='h-full md:w-[500px] flex flex-col justify-center mx-[5vw] md:mx-[10px]'>
          <Link href="/#contact" data-name="contact"><div><p className='text-[22px] md:text-[30px] leading-9'>Skontaktuj się z nami lub<br></br> poproś o bezpłatną ofertę</p>
          </div></Link>
          <div className='bg-[#a7e06a]/[0.7] h-[5px] w-[50vw] -mr-[20vw] mt-[8px] mb-[10px]'></div>
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
        </div>
      </div>
      </div>
  )
}
