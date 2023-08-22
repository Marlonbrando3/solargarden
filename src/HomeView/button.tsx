import React from 'react'
import {MdOutlineSolarPower} from 'react-icons/md'
import {TbWindmill} from 'react-icons/tb'
import {MdOutlineStorage} from 'react-icons/md'

export default function Button() {
  return (
    <div className='w-screen md:h-[100px] flex justify-center'>
        <div className='w-[90vw] md:w-[1150px] md:h-[100px] flex justify-start items-center flex-col md:flex-row'>
            <div className='flex items-center'><p className='md:text-[15px] md:w-[210px] leading-6'>Wybierz usługę dla siebie:</p></div>
            <div className='bg-green-500/[0.1] rounded-[10px] w-full md:w-[200px] h-[60px] md:h-[70px] border-red-900 flex md:justify-center items-center md:text-[15px] leading-6 md:border-l'>
                <MdOutlineSolarPower className='text-[40px] md:text-[60px] mx-[10px]'/>
                <p>Instalacje Fotowoltaiczne</p>
            </div>
            <div className='bg-green-500/[0.1] rounded-[10px] w-full md:w-[200px] h-[60px] md:h-[70px] border-red-900 flex md:justify-center items-center md:text-[15px] leading-6 md:border-l'>
                <TbWindmill className='text-[40px] md:text-[60px]  mx-[10px]'/>
                <p>Pompy Ciepła</p>
            </div>
            <div className='bg-green-500/[0.1] rounded-[10px] w-full md:w-[200px] h-[60px] md:h-[70px] border-red-900 flex md:justify-center items-center md:text-[15px] leading-6 md:border-l'>
                <MdOutlineStorage className='text-[40px] md:text-[60px]  mx-[10px]'/>
                <p>Magazyny Energii</p>
            </div>
        </div>
    </div>
  )
}
