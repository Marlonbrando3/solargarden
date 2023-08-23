import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {PiNumberSquareOneThin, PiNumberSquareTwoThin, PiNumberSquareThreeThin, PiNumberSquareFourThin} from 'react-icons/pi'

export default function Partners() {
  return (
    <div className='w-screen md:h-[700px] pb-[100px]'>
        <div className='md:h-full border-red-600 w-[90vw] md:w-[1000px] mx-[2.5vw] md:mx-auto flex flex-col justify-center px-[10px]'>
          <div><p className='text-[30px] leading-9'>Nasi partnerzy</p></div>
          <div className='bg-[#a7e06a]/[0.7] h-[5px] w-full -mr-[20vw] mt-[8px] mb-[10px]'></div>
          <div className='flex flex-wrap items-center justify-center'>
          <Image
            src="/partners/soleado.png"
            alt="soleado"
            width={250}
            height={200}
            className='m-[20px]'
            >
          </Image>
          <Image
            src="/partners/psg.png"
            alt="soleado"
            width={250}
            height={200}
            className='m-[20px]'
            >
          </Image>
          <Image
            src="/partners/Corab.png"
            alt="soleado"
            width={250}
            height={100}
            className='m-[20px]'
            >
          </Image>
          <Image
            src="/partners/Fronius.png"
            alt="soleado"
            width={250}
            height={100}
            className='m-[20px]'
            >
          </Image>
          <Image
            src="/partners/Huaweii.png"
            alt="soleado"
            width={250}
            height={100}
            className='mx-[20px]'
            >
          </Image>
          <Image
            src="/partners/LongiSolar.png"
            alt="soleado"
            width={250}
            height={100}
            className='m-[20px]'
            >
          </Image>
          <Image
            src="/partners/Sofar.png"
            alt="soleado"
            width={250}
            height={100}
            className='m-[20px]'
            >
          </Image>
          <Image
            src="/partners/SolarEdge.png"
            alt="soleado"
            width={300}
            height={100}
            className='m-[20px]'
            >
          </Image>
          </div>
        </div>
    </div>
  )
}
