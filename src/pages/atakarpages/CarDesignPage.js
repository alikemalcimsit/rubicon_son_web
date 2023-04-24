import React from 'react'
import car from "../../assets/SafeCar.png"
import { CarDesingData } from './data'
export default function CarDesignPage() {
  return (
    <div className='h-[100vh] flex align-middle items-center w-full overflow-hidden px-24 '>
<div className='w-full  ml-12'>
    <h6 className='text-black font-normal text-2xl'>{CarDesingData.title1}</h6>
    <h2 className='text-[#171A20] font-medium text-4xl'>{CarDesingData.title2} <br></br>
        {CarDesingData.title3}
    </h2>
    <p className='text-[#171A20] font-medium text-2xl'>{CarDesingData.description1} <br></br> {CarDesingData.description2} <u>{CarDesingData.underlinDescription1} <br></br>{CarDesingData.underlinDescription2} </u> <br></br> {CarDesingData.description3}<br></br>
{CarDesingData.description4} <br></br>
{CarDesingData.title4}<br></br>
{CarDesingData.description5} <br></br>{CarDesingData.description6} <br></br> {CarDesingData.description7} <br></br> {CarDesingData.description8}</p>
</div  >
<div className=' absolute ml-48 z-30  '>
    <div className='absolute right-[400px] top-9  '>
      
    <div className='border-black h-32 border-l-4 ml-1 flex'>
    <h1 className='ml-1 -translate-y-4'>{CarDesingData.lineText1}</h1>
    </div>
    <div className='rounded-full h-4 w-4 border-2 bg-white z-40  border-black'></div>
    </div>
    <div className='absolute right-[615px] top-28  '>
      
      <div className='border-black h-44 border-l-4 ml-1 flex'>
      <h1 className='ml-1 -translate-y-4'>{CarDesingData.lineText2}</h1>
      </div>
      <div className='rounded-full h-4 w-4 border-2 z-40 bg-white  border-black'></div>
      </div>
      <div className='absolute right-[200px] bottom-10 z-40 '>
      <div className='rounded-full h-4 w-4 border-2 bg-white border-black'></div>
      <div className='border-black h-32 border-l-4 ml-1 flex'>
      <h1 className='ml-1 translate-y-28'>{CarDesingData.lineText3}</h1>
      </div>
   
      </div>

<img className=' scale-90  ' src={car}></img>

</div>


    </div>
  )
}
