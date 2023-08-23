import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {PiNumberSquareOneThin, PiNumberSquareTwoThin, PiNumberSquareThreeThin, PiNumberSquareFourThin} from 'react-icons/pi'
import { TbPointFilled } from 'react-icons/tb'

export default function ThirdView() {

  const [choosed, setChoosed] = useState([
    {id:1, status:true},
    {id:2, status:false},
    {id:3, status:false},
    {id:4, status:false},
    {id:5, status:false},
    {id:6, status:false}
  ]);

  const [descriptions, setDescriptions] = useState([
    {id:1, status:true},
    {id:2, status:false},
    {id:3, status:false},
    {id:4, status:false},
    {id:5, status:false},
    {id:6, status:false}
  ]);


  const handleChosedInfo = (e:any) => {

    const idFromE = parseInt(e.target.getAttribute('data-name'))

    // console.log(parseInt(e.target.getAttribute('data-name')))

    setChoosed(choosed.map(i => {
      if(i.id === idFromE){
        return {
          id:idFromE,
          status:true
        }
      } else return {
          id:i.id,
          status:false
      }
    }))


    setDescriptions(descriptions.map(i => {
      if(i.id === idFromE){
        return {
          id:idFromE,
          status:true
        }
      } else return {
          id:i.id,
          status:false
      }
    }))
    

  }

  console.log(descriptions)


  return (
    <div id="howitworks" className='md:block w-screen md:h-[700px] pb-[100px]'>
      <div className='w-[90vw] md:w-[1000px] mx-auto h-full md:flex'>
        <div className='h-auto w-full md:w-[500px] flex md:flex-col flex-wrap md:items-start flex-row items-center justify-center'>
            <div><p className='text-[30px] leading-9'>Jak to działa</p></div>
            <div className='bg-[#a7e06a]/[0.7] h-[5px] w-[80vw] md:w-[50vw] mt-[8px] mb-[10px]'></div>
            <div data-name="1" onClick={e => handleChosedInfo(e)} className={choosed[0].status === false ? 'flex h-auto md:h-[80px] md:w-[550px] items-center md:text-[22px] cursor-pointer border border-gray-800 md:border-0':'flex h-auto md:h-[80px] md:w-[550px] items-center md:-ml-[10px] md:text-[22px] cursor-pointer border border-gray-800 bg-green-600/[0.2] md:border-0 duration-150'}>            
              <p data-name="1" className='md:w-[390px] p-[5px]'>Instalacja  fotowoltaiczna</p>
            </div>
            <div data-name="2" onClick={e => handleChosedInfo(e)} className={choosed[1].status === false ? 'flex h-auto md:h-[80px] md:w-[550px] items-center md:text-[22px] cursor-pointer border md:border-0 border-gray-800':'flex h-auto md:h-[80px] md:w-[550px] md:-ml-[10px] items-center md:text-[22px] cursor-pointer border border-gray-800  bg-green-600/[0.2] md:border-0 duration-150'}>
              <p data-name="2" className='md:w-[390px] p-[5px]'>Pompa ciepła</p>
            </div>
            <div data-name="3" onClick={e => handleChosedInfo(e)} className={choosed[2].status === false ? 'flex h-auto md:h-[80px] md:w-[550px] items-center md:text-[22px] cursor-pointer border border-gray-800 md:border-0':'flex h-auto md:h-[80px] md:w-[550px] items-center md:-ml-[10px] md:text-[22px] cursor-pointer border border-gray-800 bg-green-600/[0.2] md:border-0 duration-150'}>            
              <p data-name="3" className='w-[100px] md:w-[390px] p-[5px]'>Magazyn energii</p>
            </div>
            <div data-name="4" onClick={e => handleChosedInfo(e)} className={choosed[3].status === false ? 'flex h-auto md:h-[80px] md:w-[550px] items-center md:text-[22px] cursor-pointer border border-gray-800 md:border-0':'flex h-auto md:h-[80px] md:w-[550px] items-center md:-ml-[10px] md:text-[22px] cursor-pointer border  border-gray-800 bg-green-600/[0.2] md:border-0 duration-150'}>            
              <p data-name="4" className='w-[227px] md:w-[390px] p-[5px]'>Instalacja fotowoltaiczna z magazynem energii</p>
            </div>
            <div data-name="5" onClick={e => handleChosedInfo(e)} className={choosed[4].status === false ? 'flex h-auto md:h-[80px] md:w-[550px] items-center md:text-[22px] cursor-pointer border border-gray-800 md:border-0':'flex h-auto md:h-[80px] md:w-[550px] items-center md:text-[22px] md:-ml-[10px] cursor-pointer border border-gray-800 bg-green-600/[0.2] md:border-0 duration-150'}>            
              <p data-name="5" className='w-[329px] md:w-[390px] p-[5px]'>Rozwiązania i dofinansowania dla rolnictwa </p>
            </div>
            <div data-name="6" onClick={e => handleChosedInfo(e)} className={choosed[5].status === false ? 'flex h-auto md:h-[80px] md:w-[550px] items-center md:text-[22px] cursor-pointer border border-gray-800 md:border-0':'flex h-auto md:h-[80px] md:w-[550px] items-center md:text-[22px] md:-ml-[10px] cursor-pointer border border-gray-800 bg-green-600/[0.2] md:border-0 duration-150'}>            
              <p data-name="6" className='w-[329px] md:w-[390px] p-[5px]'>Rozwiązania i dofinansowania dla firm </p>
            </div>
        </div>
        <div className='h-full border-yellow-600 w-[90vw] md:w-[1080px] flex justify-center items-start md:relative'>
          <div className='bg-[#56BA46] w-[90vw] md:w-[1100px] md:h-[580px] border-[rgb(167,224,106)] rounded-[20px] shadow-xl text-white text-[16px] flex md:justify-start border mt-[20px] md:mt-auto'>
            <div data-name="1" className={descriptions[0].status === false ? 'hidden duration-300' : 'text-[12px] md:text-[14px] w-[88vw] md:w-[70%] h-[95%] md:ml-[15px] m-[10px] flex flex-col justify-between duration-300'}><p><b>Zasada działania Instalacji fotowoltaicznej jest prosta dlatego łatwo można ją zrozumieć.</b><br></br><br></br>Panele fotowoltaiczne instalowane na dachu naszych domów lub firm poprzez ekspozycję na słońce generują prąd stały (DC), który jest przekazywany do falownik w naszej instalacji i zostaje zamieniony na prąd zmienny (AC). Prąd zmienny zatem dokładnie taki sam jaki możemy otrzymać z elektrownii i jaki zasila nasze urządzenia domowe na codzień. W okresach wiosennych i letnich instalacja produkuje dla nas zdecydowanie więcej energii niż potrzebujemy w tym konkretnym momencie, dlatego nadwyżka musi zostać gdzieś magazynowana w tym przypadku w zakładzie energetycznym, który pełni rolę magazynu, choć po zmianie przepisów częściej używamy słowa &ldquo; portfel &ldquo; dlatego, że owa nadwyżka jest właściwie sprzedawana, po czym kwota za którą energia została sprzedana zasila nasz &ldquo; wirtualny portfel &ldquo;. W miesiąch zimowych środki zgromadzone w tym portfelu służą nam do zakupu energii ponieważ w tym okresie instalacja fotowoltaiczna produkuje marginalne, niewystarczające na potrzebny ilości prądu. Obecnie dofinansowania do instalacji fotowoltaicznej sięgają 7000 zł.</p>  
            <Link href="/#contact" data-name="contact"><div className='mt-[30px] border border-white py-[9px] text-[18px] bg-white text-center w-[350px] text-black rounded-[10px] hover:bg-white hover:text-green-700 duration-150 cursor-pointer'>Zamiawiam bezpłatną wycenę</div></Link>
            </div>

            <div data-name="2" className={descriptions[1].status === false ? 'hidden duration-300' : 'text-[12px] md:text-[14px] w-[88vw] md:w-[70%] h-[95%] md:ml-[15px] m-[10px] flex flex-col justify-between duration-300'}><p><b>Pompa ciepła powinna być urządzeniem komplementarnym z instalacją fotowoltaiczną i rozwiązuje kilka problemów.</b><br></br><br></br>
            Przede wszystkich jest to odnawialne źródło ciepła dla naszych domów lub firm. Nie wymaga zakupu węgla, ekogroszku, peletu lub innych surowców tak jak wszelkie piece. Nie wymaga poświęcania czasu na kontrolowanie oraz rozpalania. Pompa potrzebuje powietrza i nieco prądu do efektywnwgo działania. Zatem pompa ciepła zasilna instalacją fotowoltaiczną pozwala na ogrzanie domu z ekologicznego źródła energii. Wystarczy ustawić porządaną temperaturę na terpostacie. Tutaj też możemy liczyć na dofinansowania rzędu 19 400 zł.</p>
            <Link href="/#contact" data-name="contact"><div className='mt-[30px] border border-white py-[9px] text-[18px] bg-white text-center md:w-[350px] text-black rounded-[10px] hover:bg-white hover:text-green-700 duration-150 cursor-pointer'>Zamiawiam bezpłatną wycenę</div></Link>
            </div>

            <div data-name="3" className={descriptions[2].status === false ? ' md:w-[54%] h-[95%] ml-[15px] hidden duration-300' : 'text-[12px] md:text-[14px] m-[10px] w-[88vw] md:w-[70%] h-[95%] md:ml-[15px] px-[10px] flex flex-col justify-between duration-300'}><p><b>Magazyn energii powodują, że jesteś bardziej niezależny.</b><br></br><br></br>
            Magazyn energii to rozwiązanie, które pozwala pewien zapas wyprodukowanej energii trzymać we własnych ekosystemie elektrycznym. Nie zapewni nam przechowywania 100% wyprodukowanej energii ze względu na koszty, które są niewspółmierne do zysków, natomiast pozim tak zwanej autokonsumpcji (czyli % prądu jaki zużuywamy bez oddaniania go do zakładu energetycznego) może sięgnąć 65% choć bezpiecznie zakładamy 50-55% autokonsumpcji.
            Magazyny energii pozwalają zatem odsprzedać znacznie mniej nadwyżek energii do zakładu energetycznego tym samym zdecydowanie mniej będzie trzeba zakupić go w chwili gdy będzie nam potrzebny. Skraca to czas zwrotu całej inwestycji, po skorzystaniu z dofinansowań jest bardzo tanie.</p> 
            <Link href="/#contact" data-name="contact"><div className='mt-[30px] border border-white py-[9px] text-[18px] bg-white text-center md:w-[350px] text-black rounded-[10px] hover:bg-white hover:text-green-700 duration-150 cursor-pointer'>Zamiawiam bezpłatną wycenę</div></Link>
            </div>

            <div data-name="3" className={descriptions[3].status === false ? 'w-[54%] h-[95%] ml-[15px] hidden duration-300' : ' text-[12px] md:text-[14px] w-[88vw] m-[10px] md:w-[70%] h-[95%] md:ml-[15px] mx-[10px] flex flex-col flex-between duration-300'}><p>Instalacja fotowoltaiczna z magazynem energii to jedno z mądrzejszch rozwiązań.<br></br><br></br>
            Panele fotowoltaiczne instalowane na dachu naszych domów lub firm poprzez ekspozycję na słońce generują prąd stały (DC), który jest przekazywany do falownik w naszej instalacji i zostaje zamieniony na prąd zmienny (AC). Prąd zmienny zatem dokładnie taki sam jaki możemy otrzymać z elektrownii i jaki zasila nasze urządzenia domowe na codzień. W okresach wiosennych i letnich instalacja produkuje dla nas zdecydowanie więcej energii niż potrzebujemy w tym konkretnym momencie i wtedy gdy nasza instalacja posiada magazyn energii to w pierwszej kolejności nadwyżki magazynowane są właśnie tam. Dopiero jak nasz magazyn energii zapełni się, a nadwyżki dalej będą produkowane będą one oddane do zakładu energetycznego. Magazyn zwiększa zatem ilość energii, która jest zużywana bez konieczności &ldquo;wyjścia na zewnątrz&ldquo; czyli na rzecz tzw. autokonsumpcji. Wartość ta zostaje podniesiona z ok. 25-30% do 50-60%, więc praktycznie dwa razy więcej energii zostaje w naszym ekosystemie na jesienne i ziomowe dni w których produkcja jest bardzo niska.</p>
            <Link href="/#contact" data-name="contact"><div className='mt-[30px] border border-white py-[9px] text-[18px] bg-white text-center md:w-[350px] text-black rounded-[10px] hover:bg-white hover:text-green-700 duration-150 cursor-pointer'>Zamiawiam bezpłatną wycenę</div></Link>
            </div>

            <div data-name="4" className={descriptions[4].status === false ? ' w-[54%] h-[95%] ml-[15px] hidden duration-300' : ' text-[12px] md:text-[14px] w-[88vw] m-[10px] md:w-[70%] h-[95%] md:ml-[15px] mx-[10px] flex flex-col flex-between duration-300'}>Segment w trakcie budowy, skontaktuj się z nami po więcej informacji
            <Link href="/#contact" data-name="contact"><div className='mt-[30px] border border-white py-[9px] text-[18px] bg-white text-center md:w-[350px] text-black rounded-[10px] hover:bg-white hover:text-green-700 duration-150 cursor-pointer'>Zamiawiam bezpłatną wycenę</div></Link></div>
            
            <div data-name="5" className={descriptions[5].status === false ? 'w-[54%] h-[95%] ml-[15px] hidden' : ' text-[12px] md:text-[14px] w-[88vw] m-[10px] md:w-[70%] h-[95%] md:ml-[15px] mx-[10px]'}>Mimo opinii, że firmy nijak nie mają możliwości skorzystania z dofinansowań to <b>mamy autorskie rozwiązania, które pozwalają aby inwestycja w instalację fotowoltaiczną na Twojej firmie była ok 25% tańsza od średnich cen rynkowych.</b> Współpracujmy głównie z dużymi zakładami produkcyjnymi i firmami zatrudniającymi min 30 osób. Możemy przedstawić Ci nasze rozwiązania. Zapraszamy do kontaktu po więcej informacji.
            <Link href="/#contact" data-name="contact"><div className='mt-[30px] border border-white py-[9px] text-[18px] bg-white text-center w-[350px] text-black rounded-[10px] hover:bg-white hover:text-green-700 duration-150 cursor-pointer'>Zamiawiam bezpłatną wycenę</div></Link>
            </div>

          </div>
          <div className='z-50 w-[550px] h-full flex items-center'>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}
