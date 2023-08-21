import React, { useState } from 'react'
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


  return (
    <div className='w-full h-[100px] border-red-900 flex justify-center'>
        <div className='h-[100px] w-[1150px] flex justify-between xl:justify-center z-20 mx-[2px] relative'>
            {/* <div className='bg-[#a7e06a] absolute w-[33vw] h-[48vh] rounded-[50%] -top-[230px] -left-[250px] rotate-12'>
            </div> */}
                <div className='w-[180px] h-[100px] relative mr-[40px]'>
                    <Image alt="logo" src="/Green_logo_solar_garden.png" fill className='object-contain py-[12px]'></Image>
                </div>
            <div ref={menu} className={menuShowed === true ? 'flex text-[16px] bg-white items-center h-screen xl:h-[100px] xl:w-[500px] w-screen flex-col xl:flex-row absolute xl:static -right-[10%] duration-150 z-50' : 
            'flex text-[16px] bg-white items-center w-screen h-screen xl:h-[100px] xl:w-[860px] flex-col xl:flex-row absolute xl:static -right-[120%] duration-150 z-50'}>
                <p className='px-[11px] cursor-pointer duration-300 border-b-white border-b-2 hover:border-b-[#a7e06a]'>Strona główna</p>
                <p className='px-[11px] cursor-pointer duration-300 border-b-white border-b-2 hover:border-b-[#a7e06a]'>Dla domu</p>
                <p className='px-[11px] cursor-pointer duration-300 border-b-white border-b-2 hover:border-b-[#a7e06a]'>Dla firmy</p>
                <p className='px-[11px] cursor-pointer duration-300 border-b-white border-b-2 hover:border-b-[#a7e06a]'>Dla rolnictwa</p>
                <p className='px-[11px] cursor-pointer duration-300 border-b-white border-b-2 hover:border-b-[#a7e06a]'>Baza wiedzy</p>
                <p className='px-[11px] cursor-pointer duration-300 border-b-white border-b-2 hover:border-b-[#a7e06a]'>Kontakt</p>
            </div>
            <div className='ml-[40px] w-[300px]'>
                <div className='text-[16px] flex flex-col justify-center items-end h-full pl-[30px] text-white'>
                    <div>+48 669 75 25 25</div>
                    <div>biuro@solargarden.com.pl</div>
                </div>
            </div>
        </div>
            <div onClick={handleShowBurgerMenu} className='xl:hidden h-full flex justify-center items-center relative w-[100px] z-40'>
                <BiMenu className={menuShowed === false ? 'w-full h-full cursor-pointer p-[20px] text-white': 'hidden'} />
                <BiMenuAltRight className={menuShowed === true ? 'w-full h-full cursor-pointer p-[20px] text-black': 'hidden'} />
            </div>
    </div>
  )
}
