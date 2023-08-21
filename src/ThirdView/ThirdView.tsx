import React from 'react'
import Image from 'next/image'
import {PiNumberSquareOneThin, PiNumberSquareTwoThin, PiNumberSquareThreeThin, PiNumberSquareFourThin} from 'react-icons/pi'

export default function ThirdView() {
  return (
    <div className=' w-screen h-[700px] pb-[100px]'>
      <div className='w-[1000px] mx-auto h-full flex border'>
      <div className='h-full border-yellow-600 w-[500px] flex justify-center items-center relative'>
          <div className='absolute bg-[#56BA46] w-[1100px] h-[380px] border-[rgb(167,224,106)] top-[130px] -left-[630px] rounded-[20px] shadow-xl text-white text-[16px] pl-[600px] flex flex-col justify-center'>
            <div className='flex h-[80px] w-[450px] items-center'>            
              <div className='w-[60px] h-[60px]'><PiNumberSquareOneThin className="w-full h-full" /></div><p className='w-[390px]'>Produkujesz swój <b>własny prąd</b>, więc nie musisz kupować go od zakładu energetycznego</p>
            </div>
            <div className='flex h-[80px] w-[450px] items-center'>            
              <div className='w-[60px] h-[60px]'><PiNumberSquareTwoThin className="w-full h-full" /></div><p className='w-[390px]'>Koszt instalacji jest <b>wniski i jednorazowy</b> orz możliwy do rozłożenia na nieodczuwalne raty</p>
            </div>
            <div className='flex h-[80px] w-[450px] items-center '>            
              <div className='w-[60px] h-[60px]'><PiNumberSquareThreeThin className="w-full h-full" /></div><p className='w-[390px]'>Masz możliwość łącznie uzyskać ponad <b>44 000 zł dofinansowań z programów Państwowych</b></p>
            </div>
            <div className='flex h-[80px] w-[450px] items-center'>            
              <div className='w-[60px] h-[60px]'><PiNumberSquareFourThin className="w-full h-full" /></div><p className='w-[390px]'>Oszczęści w postaci <b>setek tysięcy złotych</b> w okresie użytkowania zakupionych rozwiązań</p>
            </div>
          </div>
          <div className='z-50 w-[550px] h-full flex items-center'>
            <p></p>
          </div>
        </div>
        <div className='h-full border-red-600 w-[500px] flex flex-col justify-center'>
          <div><p className='text-[30px] leading-9'>Korzyści i oszczędność dla Ciebie</p></div>
          <div className='bg-[#a7e06a]/[0.7] h-[5px] w-[50vw] -mr-[20vw] mt-[8px] mb-[10px]'></div>
          <div><p className=''><b>Instalacja fotowoltaiczna</b> to jednorazowa inwestycja na lata, która dzięki licznym dofinansowanim zwraca się w okresieśrednio 6 lat, a pracuje dla Ciebie przez ok 30 lat. Zatem prąd który wyprodukuje Twoja instalacja przez 30 lat nie będzie musiał być kupowany od zakładu energetycznego i (pomijając koszty stałe) przestaniesz płacić rachunki za prąd. 
          <br></br><br></br>
          
          <b>Pompa ciepła</b> również może pobierać energię z Twojej instalacji fotowoltaicznej, tym samym uniezależniasz się zakupu węgla, ekogroszku, peletu i innych oraz ich stale rosnących cen, a dzięki <b>Magazynowi energii</b> będzięsz mógł uczynić swoją instalację bardziej niezależną, skrając okres zwrotu całej inwestycji.</p></div>
        <div className='mt-[30px] border border-green-700 py-[9px] text-[18px] bg-green-700 text-center w-[350px] text-white rounded-[10px] hover:bg-white hover:text-green-700 duration-150 cursor-pointer'>Zamiawiam bezpłatną wycenę</div>
        </div>
      </div>
    </div>
  )
}
