import React, { useState } from 'react'
import { sliderImage ,pageData} from './data'
import {BsChevronLeft , BsChevronRight} from "react-icons/bs"
export default function AboutPage() {



const [currentIndex , setCurrentIndex]=useState(1)
const prevImage=()=>{
const isFirstSlide = currentIndex === 0 ;
const newIndex = isFirstSlide ? sliderImage.length-1 :currentIndex-1
setCurrentIndex(newIndex)
}

const nextImage=()=>{
const isLastSlide = currentIndex === sliderImage.length-1
const newIndex = isLastSlide ? 0 : currentIndex+1
setCurrentIndex(newIndex)

  }
  
  return (
    <div id='/about' className='h-[100vh] px-36  pt-12 mb-4'>
    <div className='flex gap-x-10 items-center justify-center'>
    <div className='h-[400px] flex w-[800px]   rounded-3xl bg-center bg-cover mb-9  justify-between items-center  group duration-200   ' style={{backgroundImage:`url(${sliderImage[currentIndex].url})` }}>
      <div><BsChevronLeft onClick={prevImage} color='white' className='hidden group-hover:block hover:scale-110 duration-300' size={50}></BsChevronLeft></div>
      <div><BsChevronRight onClick={nextImage} color='white' className=' hidden group-hover:block hover:scale-110 duration-300' size={50}></BsChevronRight></div>
    </div>
   <div className='w-1/2 '> <h1 className=' text-3xl -translate-y-1 mb-2 font-bold '>About</h1>

   <p className='text-lg font-medium text-[#171A20]'>{pageData.description1}</p></div>

 </div>


       <div>
       <p className="text-lg text-[#171A20] font-medium">{pageData.description2}</p>

       </div>
    </div>
  )
}
