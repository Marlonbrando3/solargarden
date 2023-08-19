import React from 'react'
import {MdOutlineSolarPower} from 'react-icons/md'
import {TbWindmill} from 'react-icons/tb'
import {MdOutlineStorage} from 'react-icons/md'

export default function Button() {
  return (
    <div className='w-screen h-[100px]  flex justify-center'>
        <div className='w-[1150px] h-[100px] flex justify-start items-center'>
            <div className='flex items-center'><p className='text-[15px] w-[210px] leading-6'>Wybierz usługę <br></br> dla siebie:</p></div>
            <div className='w-[200px] h-[70px] border-red-900 flex justify-center items-center text-[15px] leading-6 border-l'>
                <MdOutlineSolarPower className='text-[60px] mx-[10px]'/>
                <p>Instalacje <br></br>Fotowoltaiczne</p>
            </div>
            <div className='w-[200px] h-[70px] border-red-900 flex justify-center items-center text-[15px] leading-6 border-l'>
                <TbWindmill className='text-[60px] mx-[10px]'/>
                <p>Pompy <br></br>Ciepła</p>
            </div>
            <div className='w-[200px] h-[70px] border-red-900 flex justify-center items-center text-[15px] leading-6 border-l'>
                <MdOutlineStorage className='text-[60px] mx-[10px]'/>
                <p>Magazyny <br></br>Energii</p>
            </div>
        </div>
    </div>
  )
}
