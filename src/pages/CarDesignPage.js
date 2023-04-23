import React from 'react'
import car from "../assets/SafeCar.png"
export default function CarDesignPage() {
  return (
    <div className='h-[100vh] flex align-middle items-center w-full overflow-hidden px-24 '>
<div className='w-full  ml-12'>
    <h6 className='text-black font-normal text-2xl'>Tasarım</h6>
    <h2 className='text-[#171A20] font-medium text-4xl'>Güvenlik için <br></br>
        Tasarlandı
    </h2>
    <p className='text-[#171A20] font-medium text-2xl'>Güvenlik, her Tesla'nın en önemli <br></br> parçasıdır. Araçlarımızı <u>güvenlik <br></br> standartlarını aşacak şekilde </u> <br></br> tasarlıyoruz.<br></br>
5 Yıldızlı Derecelendirme ve Sınıfının En İyisi <br></br>
Güvenlik<br></br>
Model Y, 2022'de 5 yıldızlı Euro NCAP <br></br>güvenlik derecelendirmesi elde etti <br></br> ve Küçük Arazi Aracı kategorisinde <br></br> Sınıfının En İyisi ödülünü kazandı.</p>
</div  >
<div className=' absolute ml-48 z-30  '>
    <div className='absolute right-[400px] top-9  '>
      
    <div className='border-black h-32 border-l-4 ml-1 flex'>
    <h1 className='ml-1 -translate-y-4'>Sağlam Yapı</h1>
    </div>
    <div className='rounded-full h-4 w-4 border-2 bg-white z-40  border-black'></div>
    </div>
    <div className='absolute right-[615px] top-28  '>
      
      <div className='border-black h-44 border-l-4 ml-1 flex'>
      <h1 className='ml-1 -translate-y-4'>Darbe Koruması</h1>
      </div>
      <div className='rounded-full h-4 w-4 border-2 z-40 bg-white  border-black'></div>
      </div>
      <div className='absolute right-[200px] bottom-10 z-40 '>
      <div className='rounded-full h-4 w-4 border-2 bg-white border-black'></div>
      <div className='border-black h-32 border-l-4 ml-1 flex'>
      <h1 className='ml-1 translate-y-28'>Alçak Ağırlık Merkezi</h1>
      </div>
   
      </div>

<img className=' scale-90  ' src={car}></img>

</div>


    </div>
  )
}
