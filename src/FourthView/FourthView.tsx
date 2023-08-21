import React from 'react'
import { useState } from 'react'
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
    <div className=' w-screen h-[700px] pb-[100px]'>
      <div className='w-[1000px] mx-auto h-full flex'>
        <div className='h-full w-[500px] flex flex-col justify-center'>
          <div><p className='text-[30px] leading-9'>Jak to działa</p></div>
          <div className='bg-[#a7e06a]/[0.7] h-[5px] w-[50vw] -ml-[20vw] mt-[8px] mb-[10px]'></div>
            <div data-name="1" className='flex h-[80px] w-[550px] items-center -ml-[50px] text-[22px]  cursor-pointer' onClick={e => handleChosedInfo(e)}>            
              <div className='w-[60px] h-[60px]'><TbPointFilled className={choosed[0].status === false ? "w-full h-full text-white duration-300" : "w-full h-full text-green-700/[0.4] duration-300"} /></div><p data-name="1" className='w-[390px] bg-green-600/[0.2] p-[5px]'>Instalacja  fotowoltaiczna</p>
            </div>
            <div data-name="2" className='flex h-[80px] w-[450px] items-center -ml-[50px] text-[22px] cursor-pointer' onClick={e => handleChosedInfo(e)}>            
              <div className='w-[60px] h-[60px]'> <TbPointFilled className={choosed[1].status === false ? "w-full h-full text-white duration-300" : "w-full h-full text-green-700/[0.4] duration-300"} /></div><p data-name="2" className='w-[390px] bg-green-600/[0.2] p-[5px]'>Pompa ciepła</p>
            </div>
            <div data-name="3" className='flex h-[80px] w-[450px] items-center -ml-[50px] text-[22px]  cursor-pointer' onClick={e => handleChosedInfo(e)}>            
              <div className='w-[60px] h-[60px]'><TbPointFilled className={choosed[2].status === false ? "w-full h-full text-white duration-300" : "w-full h-full text-green-700/[0.4] duration-300"} /></div><p data-name="3" className='w-[390px] bg-green-600/[0.2] p-[5px]'>Magazyn energii</p>
            </div>
            <div data-name="4" className='flex h-[80px] w-[450px] items-center -ml-[50px] text-[22px]  cursor-pointer leading-6' onClick={e => handleChosedInfo(e)}>            
              <div className='w-[60px] h-[60px]'><TbPointFilled className={choosed[3].status === false ? "w-full h-full text-white duration-300" : "w-full h-full text-green-700/[0.4] duration-300"} /></div><p data-name="4" className='w-[390px] bg-green-600/[0.2] p-[5px]'>Instalacja fotowoltaiczna <br></br>z magazynem energii</p>
            </div>
            <div data-name="5" className='flex h-[80px] w-[450px] items-center -ml-[50px] text-[22px]  cursor-pointer leading-6' onClick={e => handleChosedInfo(e)}>            
              <div className='w-[60px] h-[60px]'><TbPointFilled className={choosed[4].status === false ? "w-full h-full text-white duration-300" : "w-full h-full text-green-700/[0.4] duration-300"} /></div><p data-name="5" className='w-[390px] bg-green-600/[0.2] p-[5px]'>Rozwiązania i dofinansowania dla rolnictwa </p>
            </div>
            <div data-name="6" className='flex h-[80px] w-[450px] items-center -ml-[50px] text-[22px]  cursor-pointer leading-6' onClick={e => handleChosedInfo(e)}>            
              <div className='w-[60px] h-[60px]'><TbPointFilled className={choosed[5].status === false ? "w-full h-full text-white duration-300" : "w-full h-full text-green-700/[0.4] duration-300"} /></div><p data-name="6" className='w-[390px] bg-green-600/[0.2] p-[5px]'>Rozwiązania i dofinansowania dla firm </p>
            </div>
        </div>
        <div className='h-full border-yellow-600 w-[500px] flex justify-center items-center relative'>
          <div className='absolute bg-[#56BA46] w-[1100px] h-[580px] border-[rgb(167,224,106)] top-[30px] -right-[45vw] rounded-[20px] shadow-xl text-white text-[16px] flex flex-col justify-center'>

            <div data-name="1" className={descriptions[0].status === false ? ' w-[54%] h-[95%] ml-[15px] hidden duration-300' : ' w-[54%] h-[95%] ml-[15px] flex flex-col justify-between duration-300'}><p><b>Zasada działania Instalacji fotowoltaicznej jest prosta dlatego łatwo można ją zrozumieć.</b><br></br><br></br>Panele fotowoltaiczne instalowane na dachu naszych domów lub firm poprzez ekspozycję na słońce generują prąd stały (DC), który jest przekazywany do falownik w naszej instalacji i zostaje zamieniony na prąd zmienny (AC). Prąd zmienny zatem dokładnie taki sam jaki możemy otrzymać z elektrownii i jaki zasila nasze urządzenia domowe na codzień. W okresach wiosennych i letnich instalacja produkuje dla nas zdecydowanie więcej energii niż potrzebujemy w tym konkretnym momencie, dlatego nadwyżka musi zostać gdzieś magazynowana w tym przypadku w zakładzie energetycznym, który pełni rolę magazynu, choć po zmianie przepisów częściej używamy słowa &ldquo;portfel&ldquo; dlatego, że owa nadwyżka jest właściwie sprzedawana, po czym kwota za którą energia została sprzedana zasila nasz &ldquo;wirtualny portfel&ldquo;. W miesiąch zimowych środki zgromadzone w tym portfelu służą nam do zakupu energii ponieważ w tym okresie instalacja fotowoltaiczna produkuje marginalne, niewystarczające na potrzebny ilości prądu. Obecnie dofinansowania do instalacji fotowoltaicznej sięgają 7000 zł.</p>  
            <div className='mt-[30px] border border-white py-[9px] text-[18px] bg-white text-center w-[350px] text-black rounded-[10px] hover:bg-white hover:text-green-700 duration-150 cursor-pointer'>Zamiawiam bezpłatną wycenę</div>
            </div>
            
            <div data-name="2" className={descriptions[1].status === false ? ' w-[54%] h-[95%] ml-[15px] hidden duration-300' : ' w-[54%] h-[95%] ml-[15px] flex flex-col justify-between duration-300'}><p><b>Pompa ciepła powinna być urządzeniem komplementanym z instalacją fotowoltaiczną i rozwiązuje kilka problemów.</b><br></br><br></br>
            Przede wszystkich jest to odnawialne źródło ciepła dla naszych domów lub firm. Nie wymaga zakupu węgla, ekogroszku, peletu lub innych surowców tak jak wszelkie piece. Nie wymaga poświęcania czasu na kontrolowanie oraz rozpalania. Pompa potrzebuje powietrza i nieco prądu do efektywnwgo działania. Zatem pompa ciepła zasilna instalacją fotowoltaiczną pozwala na ogrzanie domu z ekologicznego źródła energii. Wystarczy ustawić porządaną temperaturę na terpostacie. Tutaj też możemy liczyć na dofinansowania rzędu 19 400 zł.</p>
            <div className='mt-[30px] border border-white py-[9px] text-[18px] bg-white text-center w-[350px] text-black rounded-[10px] hover:bg-white hover:text-green-700 duration-150 cursor-pointer'>Zamiawiam bezpłatną wycenę</div>
            </div>
            <div data-name="3" className={descriptions[2].status === false ? ' w-[54%] h-[95%] ml-[15px] hidden duration-300' : ' w-[54%] h-[95%] ml-[15px] flex flex-col justify-between duration-300'}><p><b>Magazyn energii powodują, że jesteś bardziej niezależny.</b><br></br><br></br>
            Magazyn energii to rozwiązanie, które pozwala pewien zapas wyprodukowanej energii trzymać we własnych ekosystemie elektrycznym. Nie zapewni nam przechowywania 100% wyprodukowanej energii ze względu na koszty, które są niewspółmierne do zysków, natomiast pozim tak zwanej autokonsumpcji (czyli % prądu jaki zużuywamy bez oddaniania go do zakładu energetycznego) może sięgnąć 65% choć bezpiecznie zakładamy 50-55% autokonsumpcji.
            Magazyny energii pozwalają zatem odsprzedać znacznie mniej nadwyżek energii do zakładu energetycznego tym samym zdecydowanie mniej będzie trzeba zakupić go w chwili gdy będzie nam potrzebny. Skraca to czas zwrotu całej inwestycji, po skorzystaniu z dofinansowań jest bardzo tanie.</p> 
            <div className='mt-[30px] border border-white py-[9px] text-[18px] bg-white text-center w-[350px] text-black rounded-[10px] hover:bg-white hover:text-green-700 duration-150 cursor-pointer'>Zamiawiam bezpłatną wycenę</div>
            </div>
            <div data-name="3" className={descriptions[3].status === false ? 'w-[54%] h-[95%] ml-[15px] hidden duration-300' : 'w-[54%] h-[95%] ml-[15px] flex flex-col flex-between duration-300'}><p>Instalacja fotowoltaiczna z magazynem energii to jedno z mądrzejszch rozwiązań.<br></br><br></br>
            Panele fotowoltaiczne instalowane na dachu naszych domów lub firm poprzez ekspozycję na słońce generują prąd stały (DC), który jest przekazywany do falownik w naszej instalacji i zostaje zamieniony na prąd zmienny (AC). Prąd zmienny zatem dokładnie taki sam jaki możemy otrzymać z elektrownii i jaki zasila nasze urządzenia domowe na codzień. W okresach wiosennych i letnich instalacja produkuje dla nas zdecydowanie więcej energii niż potrzebujemy w tym konkretnym momencie i wtedy gdy nasza instalacja posiada magazyn energii to w pierwszej kolejności nadwyżki magazynowane są właśnie tam. Dopiero jak nasz magazyn energii zapełni się, a nadwyżki dalej będą produkowane będą one oddane do zakładu energetycznego. Magazyn zwiększa zatem ilość energii, która jest zużywana bez konieczności &ldquo;wyjścia na zewnątrz&ldquo; czyli na rzecz tzw. autokonsumpcji. Wartość ta zostaje podniesiona z ok. 25-30% do 50-60%, więc praktycznie dwa razy więcej energii zostaje w naszym ekosystemie na jesienne i ziomowe dni w których produkcja jest bardzo niska.</p>
            <div className='mt-[30px] border border-white py-[9px] text-[18px] bg-white text-center w-[350px] text-black rounded-[10px] hover:bg-white hover:text-green-700 duration-150 cursor-pointer '>Zamiawiam bezpłatną wycenę</div>
            </div>
            <div data-name="3" className={descriptions[4].status === false ? ' w-[54%] h-[95%] ml-[15px] hidden duration-300' : ' w-[54%] h-[95%] ml-[15px] flex flex-col flex-between duration-300'}>Segment w trakcie budowy, skontaktuj się z nami po więcej informacji
            <div className='mt-[30px] border border-white py-[9px] text-[18px] bg-white text-center w-[350px] text-black rounded-[10px] hover:bg-white hover:text-green-700 duration-150 cursor-pointer'>Zamiawiam bezpłatną wycenę</div></div>
            <div data-name="3" className={descriptions[5].status === false ? 'w-[54%] h-[95%] ml-[15px] hidden' : ' text-[22px] w-[54%] h-[95%] ml-[15px]'}>Mimo opinii, że firmy nijak nie mają możliwości skorzystania z dofinansowań to <b>mamy autorskie rozwiązania, które pozwalają aby inwestycja w instalację fotowoltaiczną na Twojej firmie była ok 25% tańsza od średnich cen rynkowych.</b> Współpracujmy głównie z dużymi zakładami produkcyjnymi i firmami zatrudniającymi min 30 osób. Możemy przedstawić Ci nasze rozwiązania. Zapraszamy do kontaktu po więcej informacji.
            <div className='mt-[30px] border border-white py-[9px] text-[18px] bg-white text-center w-[350px] text-black rounded-[10px] hover:bg-white hover:text-green-700 duration-150 cursor-pointer'>Zamiawiam bezpłatną wycenę</div></div>

          </div>
          <div className='z-50 w-[550px] h-full flex items-center'>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}
