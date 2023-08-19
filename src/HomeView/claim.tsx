import React from 'react'

export default function Claim() {
  return (
    <div className='relative w-screen flex h-[65vh] justify-center items-center'>
    <div className='w-[1150px] h-[350px] z-40 text-[100px] mx-auto top-[12%]'>
        <div className='flex flex-col mb-[10px]'>
            <h1 className='text-[45px] leading-10'>Fotowoltaika</h1>
            <p className='text-[20px] leading-9 text-[#a7e06a] ml-[15px]'>dofinansowanie do <b>7 000 zł</b></p>
        </div>
        <div className='flex flex-col mb-[10px]'>
            <h1 className='text-[45px] leading-10'>Pompy Ciepła</h1>
            <p className='text-[20px] leading-9 text-[#a7e06a] ml-[15px]'>dofinansowanie do <b>19 400 zł</b></p>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-[45px] leading-10'>Magazyny energii</h1>
            <p className='text-[20px] leading-9 text-[#a7e06a] ml-[15px]'>dofinansowanie do <b>16 000 zł</b></p>
        </div>
        <div className='mt-[30px] py-[9px] text-[22px] bg-[#a7e06a] border-[#a7e06a] border text-center w-[250px] text-white rounded-[10px] hover:bg-white hover:text-green-700 duration-150 cursor-pointer'>Bezpłatna wycena</div>
    </div>
    </div>
  )
}
