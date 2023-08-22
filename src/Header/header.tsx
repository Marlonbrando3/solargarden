import React, { useState } from 'react'
import Link from 'next/link'
import { useRef } from 'react'
import Image from 'next/image'
import {BiMenu} from "react-icons/bi"
import {BiMenuAltRight} from "react-icons/bi"

export default function Header() {

    const[menuShowed, setMenuShowed] = useState(false);

    const menu = useRef();


    const handleShowBurgerMenu = () => {
        setMenuShowed(!menuShowed)
    }

    const handleClikedMenuOnMobile =() => {
        if(menuShowed === true){
            setMenuShowed(false)
        }
    }


  return (
    <div className='h-[100px] w-screen flex justify-center'>
        <div className='h-[100px] w-screen xl:w-[1150px] flex justify-between xl:justify-center z-20 mx-[2px]'>
            {/* <div className='bg-[#a7e06a] absolute w-[33vw] h-[48vh] rounded-[50%] -top-[230px] -left-[250px] rotate-12'>
            </div> */}
                <div className='w-[130px] xl:w-[180px] h-[100px] relative md:mr-[40px]'>
                    <Image alt="logo" src="/Green_logo_solar_garden.png" fill className='object-contain py-[12px]'></Image>
                </div>
            <div data-ref={menu} className={menuShowed === true ? 'flex text-[16px] bg-white items-center h-screen xl:h-[100px] xl:w-[500px] w-[100vw] flex-col xl:flex-row justify-center absolute xl:static -right-[0%] duration-150 z-50' : 
            'flex text-[16px] bg-white items-center w-[100vw] h-[100vh] xl:h-[100px] xl:w-[860px] flex-col xl:flex-row absolute xl:static -right-[100vw] duration-150 z-50'}>
                <Link href="/#home" data-name="home"><p className='px-[11px] cursor-pointer duration-300 border-b-white border-b-2 hover:border-b-[#a7e06a]' onClick={handleClikedMenuOnMobile}>Strona główna</p></Link>
                <Link href="/#howitworks" data-name="howitworks"><p className='px-[11px] cursor-pointer duration-300 border-b-white border-b-2 hover:border-b-[#a7e06a]' onClick={handleClikedMenuOnMobile}>Dla domu</p></Link>
                <Link href="/#howitworks" data-name="howitworks"><p className='px-[11px] cursor-pointer duration-300 border-b-white border-b-2 hover:border-b-[#a7e06a]' onClick={handleClikedMenuOnMobile}>Dla firmy</p></Link>
                <Link href="/#howitworks" data-name="howitworks"><p className='px-[11px] cursor-pointer duration-300 border-b-white border-b-2 hover:border-b-[#a7e06a]' onClick={handleClikedMenuOnMobile}>Dla rolnictwa</p></Link>
                {/* <p className='px-[11px] cursor-pointer duration-300 border-b-white border-b-2 hover:border-b-[#a7e06a]' onClick={handleClikedMenuOnMobile}>Baza wiedzy</p> */}
                <Link href="/#contact" data-name="contact"><p className='px-[11px] cursor-pointer duration-300 border-b-white border-b-2 hover:border-b-[#a7e06a]' onClick={handleClikedMenuOnMobile}>Kontakt</p></Link>
            </div>
            <div className='xl:ml-[40px]  w-[200] md:w-[300px]'>
                <div className='text-[10px] md:text-[16px] flex flex-col justify-center items-end h-full pl-[30px] md:text-white'>
                    <div>+48 669 75 25 25</div>
                    <div>biuro@solargarden.com.pl</div>
                </div>
            </div>
        </div>
            <div onClick={handleShowBurgerMenu} className='xl:hidden h-full flex justify-center items-center relative w-[100px] z-40'>
                <BiMenu className={menuShowed === false ? 'w-full h-full cursor-pointer p-[20px] text-black md:text-white': 'hidden'} />
                <BiMenuAltRight className={menuShowed === true ? 'w-full h-full cursor-pointer p-[20px] text-black': 'hidden'} />
            </div>
    </div>
  )
}
