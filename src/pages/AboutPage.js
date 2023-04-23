import React, { useState } from 'react'
   
import {BsChevronLeft , BsChevronRight} from "react-icons/bs"
export default function AboutPage() {

const sliderImage = [
  {
    url:"https://lh3.googleusercontent.com/drive-viewer/AFGJ81pn87jBC6JSVfC0q_0X890ZlGdTH2s29e5nWs6kI49XqnPQNy7NDtNb6KqiKSACyR3Cf7N_Y2eQWbsKn3twuDt7x967kQ=s1600"
  },
  {
    url:"https://lh3.googleusercontent.com/drive-viewer/AFGJ81pJiBwJOTJnYaDghZUqw1iQ8A1s5d6d8zHIQLRgPDVKyIit8q5eeoDtQ5dKJV1G5KxOWKSWe37YfwLtObFqu4oMFemt_Q=s1600"
  },
  {
    url:"https://lh3.googleusercontent.com/drive-viewer/AFGJ81ovKytxjiXRdLNei86ujMr2iEx2RQrEzeNinsAw0KHMN576KqAAQ-IEybK7EqB84QhonsU9YWklzlMGqtDEkUkBMBuyGg=s1600"
  },
]

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
    <div className='h-[100vh] pt-12 mb-4'>
      
        <div className='h-[400px]  mx-24  rounded-3xl bg-center bg-cover mb-9 flex justify-between items-center  group duration-200   ' style={{backgroundImage:`url(${sliderImage[currentIndex].url})` }}>

          <div className='hidden group-hover:block  hover:scale-125 duration-150 '>
<BsChevronLeft onClick={prevImage} color='white' size={50}></BsChevronLeft>
          </div>
          <div  className='hidden group-hover:block hover:scale-125 duration-150 '>
<BsChevronRight onClick={nextImage} color='white' size={50}></BsChevronRight>
          </div>
        </div>
        <h1 className='mx-24 text-2xl font-bold pb-4'>About</h1>
 <div className='text-xl text-[#171A20] font-medium px-24 '>
 But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it
 </div>
    </div>
  )
}
