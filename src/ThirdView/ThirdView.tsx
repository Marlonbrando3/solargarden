import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {PiNumberSquareOneThin, PiNumberSquareTwoThin, PiNumberSquareThreeThin, PiNumberSquareFourThin} from 'react-icons/pi'

export default function ThirdView() {
  return (
    <div className='w-screen md:h-[700px] pb-[100px]'>
      <div className='w-screen md:w-[1000px] mx-auto h-full flex flex-col-reverse md:flex-row-reverse'>
      <div className='h-full border-yellow-600 w-[90vw] md:w-[500px] mx-[2.5vw] md:mx-0 flex justify-center items-center relative'>
          <div className='bg-[#56BA46] h-[420px] md:h-[380px] w-[900px] border-[rgb(167,224,106)] top-[130px] -mr-[800px] rounded-l-[20px] shadow-xl text-white text-[16px] md:pl-[10px] flex flex-col md:justify-center justify-evenly my-[20px] md:my-auto'>
            <div className='flex h-[120px] md:h-[80px] items-center'>            
              <div className='w-[60px] h-[60px]'><PiNumberSquareOneThin className="w-full h-full" /></div><p className='w-[270px] md:w-[390px]'>Produkujesz swój <b>własny prąd</b>, więc nie musisz kupować go od zakładu energetycznego</p>
            </div>
            <div className='flex h-[120px] md:h-[80px] w-[450px] items-center'>            
              <div className='w-[60px] h-[60px]'><PiNumberSquareTwoThin className="w-full h-full" /></div><p className='w-[270px] md:w-[390px]'>Koszt instalacji jest <b>niski i jednorazowy</b> orz możliwy do rozłożenia na nieodczuwalne raty</p>
            </div>
            <div className='flex h-[120px] md:h-[80px] w-[450px] items-center '>            
              <div className='w-[60px] h-[60px]'><PiNumberSquareThreeThin className="w-full h-full" /></div><p className='w-[270px] md:w-[390px]'>Masz możliwość łącznie uzyskać ponad <b>44 000 zł dofinansowań z programów Państwowych</b></p>
            </div>
            <div className='flex h-[120px] md:h-[80px] w-[450px] items-center'>            
              <div className='w-[60px] h-[60px]'><PiNumberSquareFourThin className="w-full h-full" /></div><p className='w-[270px] md:w-[390px]'>Oszczęści w postaci <b>setek tysięcy złotych</b> w okresie użytkowania zakupionych rozwiązań</p>
            </div>
          </div>
          <div className='z-50 w-[550px] h-full flex items-center'>
            <p></p>
          </div>
        </div>
        <div className='md:h-full border-red-600 w-[90vw] md:w-[500px] mx-[2.5vw] md:mx-0 flex flex-col justify-center px-[10px]'>
          <div><p className='text-[30px] leading-9'>Korzyści i oszczędność dla Ciebie</p></div>
          <div className='bg-[#a7e06a]/[0.7] h-[5px] w-full -mr-[20vw] mt-[8px] mb-[10px]'></div>
          <div><p className=''><b>Instalacja fotowoltaiczna</b> to jednorazowa inwestycja na lata, która dzięki licznym dofinansowanim zwraca się w okresieśrednio 6 lat, a pracuje dla Ciebie przez ok 30 lat. Zatem prąd który wyprodukuje Twoja instalacja przez 30 lat nie będzie musiał być kupowany od zakładu energetycznego i (pomijając koszty stałe) przestaniesz płacić rachunki za prąd. 
          <br></br><br></br>
          
          <b>Pompa ciepła</b> również może pobierać energię z Twojej instalacji fotowoltaicznej, tym samym uniezależniasz się zakupu węgla, ekogroszku, peletu i innych oraz ich stale rosnących cen, a dzięki <b>Magazynowi energii</b> będzięsz mógł uczynić swoją instalację bardziej niezależną, skrając okres zwrotu całej inwestycji.</p></div>
          <Link href="/#contact" data-name="contact"><div className='mt-[30px] border border-green-700 py-[9px] text-[18px] bg-green-700 text-center md:w-[350px] text-white rounded-[10px] hover:bg-white hover:text-green-700 duration-150 cursor-pointer'>Zamiawiam bezpłatną wycenę</div></Link>
        </div>
      </div>
    </div>
  )
}
