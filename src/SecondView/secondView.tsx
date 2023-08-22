import React from 'react'
import Image from 'next/image'

export default function SecondView() {
  return (
    <div className=' w-screen md:h-[900px] pb-[100px]'>
      <div className='w-screen md:w-[1000px] mx-auto h-[700px] md:flex'>
        <div className='h-full border-red-600 w-[90vw] md:w-[500px] mx-[2.5vw] flex flex-col justify-center'>
          <div><p className='text-[25px] md:text-[30px] leading-9'>Czym jest fotowoltaika od<br></br> <b>Solar Garden?</b></p></div>
          <div className='bg-[#a7e06a]/[0.7] h-[5px] w-full md:w-[50vw] -ml-[20vw] mt-[8px] mb-[20px]'></div>
          <div><p className=''><b>Zestawy fotowoltaiczne od Solar Garden</b> to bezpieczene i sprawdzone jakościowo rozwiązania oparte o lata doświadczeń, tysiące wykonanych instalacji fotowoltaicznych oraz najlepsze dostępne podzespoły. Nasz model współpracy zapewnia najwyższą jakość wykonanej instalacji mimo konkurencyjnych cen. <br></br><br></br>
          <b>Instalacja fotowoltaiczna</b> jako taka spowoduje, że staniesz się niezależny od zakładów energetycznych tym samym uwalniając się od konieczności płacenia wysokich rachunków za prąd. Twoja własna elektrownia fotowoltaiczna zapewni Tobie, Twojemu gospodarstwu lub firmie niezbędna do działania energię.
          </p></div>
        <div className='mt-[30px] border border-green-700 py-[9px] text-[18px] md:text-[22px] bg-green-700 text-center md:w-[450px] text-white rounded-[10px] hover:bg-white hover:text-green-700 duration-150 cursor-pointer'>Zamiawiam bezpłatną wycenę</div>
        </div>
        <div className='hidden  h-full border-yellow-600 w-[500px] md:flex justify-center items-center relative'>
          <div className='absolute bg-[#a7e06a]/[0.2] w-[1100px] h-[380px] text-[100px] border-[#a7e06a] top-[130px] -right-[700px] rounded-[20px] shadow-md'></div>
          <div className='z-50 w-[550px] h-full flex items-center'>
            <Image
              src="/photovoltaic_ok.png"
              alt='fotowoltaika'
              width={1200}
              height={800}>
            </Image>
          </div>
        </div>
      </div>
      <div className='w-[100vw] h-[300px] md:h-[200px] bg-yellow-500 bg-[url("/Main_photovoltaic.png")] bg-center bg-cover bg-fixed relative'>
        <div className='absolute w-full h-full bg-gray-900/[0.5]'></div>
        <div className='text-center text-white text-[24px] md:text-[28px] pt-[50px] md:px-[0px] px-[20px] relative '>&ldquo;Zaufaj wieloletniemu doświedczeniu naszemu oraz naszych partnerów i <br></br>tysiącom wykonanych instalacji.&ldquo;</div>
      </div>
    </div>
  )
}
