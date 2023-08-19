import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='w-full h-[100px] border-red-900 flex justify-center'>
        <div className='bg-wite-900 h-[100px] w-[1150px] flex justify-center relative z-20 mx-[2px]'>
            {/* <div className='bg-[#a7e06a] absolute w-[33vw] h-[48vh] rounded-[50%] -top-[230px] -left-[250px] rotate-12'>
            </div> */}
                <div className='w-[180px] h-[100px] relative mr-[40px]'>
                    <Image alt="logo" src="/Green_logo_solar_garden.png" fill className='object-contain py-[12px]'></Image>
                </div>
            <div className='flex text-[16px] items-center h-[100px] w-[860px]'>
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
    </div>
  )
}
