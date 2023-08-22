import React from 'react'

export default function Claim() {
  return (
    <div className='relative w-screen flex md:h-[65vh] justify-center items-center top-[50px]'>
    <div className='md:w-[1150px] md:h-[350px] z-10 text-[100px] mx-auto top-[12%] flex flex-col md:block'>
        <div className='flex flex-col mb-[2px] xl:mb-[10px]'>
            <h1 className='text-[30px] xl:text-[45px] leading-6 xl:leading-10 text-white md:text-auto'>Fotowoltaika</h1>
            <p className='text-[10px] xl:text-[20px] leading-6 xl:leading-10 text-[#a7e06a] ml-[15px]'>dofinansowanie do <b>7 000 zł</b></p>
        </div>
        <div className='flex flex-col mb-[2px] xl:mb-[10px]'>
            <h1 className='text-[30px] xl:text-[45px] leading-6 xl:leading-10 text-white md:text-auto'>Pompy Ciepła</h1>
            <p className='text-[10px] xl:text-[20px] leading-6 xl:leading-10 text-[#a7e06a] ml-[15px]'>dofinansowanie do <b>19 400 zł</b></p>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-[30px] xl:text-[45px] leading-10 text-white md:text-auto'>Magazyny energii</h1>
            <p className='text-[10px] xl:text-[20px] leading-9 text-[#a7e06a] ml-[15px]'>dofinansowanie do <b>16 000 zł</b></p>
        </div>
        <div className='mt-[30px] py-[9px] text-[22px] bg-[#a7e06a] border-[#a7e06a] border text-center w-[250px] text-white rounded-[10px] hover:bg-white hover:text-green-700 duration-150 cursor-pointer'>Bezpłatna wycena</div>
    </div>
    </div>
  )
}
