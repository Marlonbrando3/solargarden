import React from 'react'
import Image from 'next/image'
import Claim from './claim'
import Button from './button'

export default function HomeView() {
  return (
    <div className='relative'>
      <div className='absolute bg-[#56BA46]/[0.8] w-[70vw] h-[120vh] z-0 text-[100px] -top-[280px] -right-[640px] rounded-b-[20px]'></div>
      <div className='relative w-[92vw] h-[65vh] bg-yellow-200'>
        <div className='absolute flex w-[800px] h-[70vh]'>
        <div className='w-[500px] h-[65vh] bg-white z-10'></div>
          <div className='w-[300px] h-[65vh] bg-gradient-to-r from-white to-transparent z-10'></div>
        </div>
        <Image
          src="/main_foto_3.jpeg"
          fill
          alt="main"
          className='object-cover drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))'>
        </Image>
        <Claim />
      </div>
        <Button/>
    </div>
  )
}
