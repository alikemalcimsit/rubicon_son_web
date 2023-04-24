import React, { useState } from 'react'
import {BsChevronLeft , BsChevronRight} from "react-icons/bs"
import { Link } from 'react-router-dom'
import {projectsData, projectsDatas} from "./data"
export default function ProjectPage() {
   

      const [carCurrentIndex , carSetCurrentIndex]=useState(0)
      const [auvCurrentIndex , auvSetCurrentIndex]=useState(0)
      const [droneCurrentIndex , droneSetCurrentIndex]=useState(0)
const prevImage=(sliderImage,index,setIndex)=>{
const isFirstSlide = index === 0 ;
const newIndex = isFirstSlide ? sliderImage.length-1 :index-1
setIndex(newIndex)
}

const nextImage=(sliderImage,index,setIndex)=>{
const isLastSlide = index === sliderImage.length-1
const newIndex = isLastSlide ? 0 : index+1
setIndex(newIndex)

  }
  
  return (
    <div id='/projects' className="h-[220vh]  px-24  mt-10">
        <h1 className='text-center text-3xl  mb-16 ml-8 font-bold'>Projects</h1>
        <div className='flex items-center gap-x-24  justify-start mb-20'>
           
        <div className='w-[650px] items-center justify-between flex rounded-3xl h-[450px] bg-cover bg-center group duration-300 '  style={{backgroundImage:`url(${projectsDatas.project1.sliderImage[carCurrentIndex].url})` }}>
        <BsChevronLeft className='group-hover:block hidden hover:scale-110' size={50} onClick={()=>prevImage(projectsDatas.project1.sliderImage,carCurrentIndex,carSetCurrentIndex)}></BsChevronLeft>
         <BsChevronRight className='group-hover:block hidden hover:scale-110' size={50} onClick={()=>nextImage(projectsDatas.project1.sliderImage,carCurrentIndex,carSetCurrentIndex)} ></BsChevronRight>
        
        </div>
        <div >
            <h1 className='text-2xl font-bold mb-2'>{projectsDatas.project1.name}</h1>
<p className='w-[600px] text-xl'>{projectsDatas.project1.description}</p>
<Link to="/project/atakar" ><button className="border-2 rounded-md px-12  py-3 bg-black  text-white flex  translate-x-44 mt-6 hover:scale-110 duration-300">{projectsDatas.project1.buttonText}</button></Link>

</div>

        </div>
<div className='flex items-center justify-end gap-x-24  mb-20'>
<div >
<h1 className='text-2xl font-bold mb-2'>{projectsDatas.project2.name}</h1>
<p className='w-[600px] text-xl'>{projectsDatas.project2.description}</p>
<button className="border-2 rounded-md px-12  py-3 bg-black  text-white flex  translate-x-44 mt-6 hover:scale-110 duration-300">{projectsDatas.project2.buttonText}</button>

</div>

<div className='w-[650px] h-[450px] items-center justify-between flex  rounded-3xl bg-cover bg-center group duration-300'  style={{backgroundImage:`url(${projectsDatas.project2.sliderImage[auvCurrentIndex].url})` }}>
<BsChevronLeft className='group-hover:block hidden hover:scale-110' size={50} onClick={()=>prevImage(projectsDatas.project2.sliderImage,auvCurrentIndex,auvSetCurrentIndex)}></BsChevronLeft>
         <BsChevronRight className='group-hover:block hidden hover:scale-110' size={50} onClick={()=>nextImage(projectsDatas.project2.sliderImage,auvCurrentIndex,auvSetCurrentIndex)} ></BsChevronRight>
       
</div>

</div>
<div className='flex items-center justify-start gap-x-24  mb-20'>
<div className='w-[650px] h-[450px] rounded-3xl bg-cover bg-center items-center justify-between flex group duration-300'  style={{backgroundImage:`url(${projectsDatas.project3.sliderImage[droneCurrentIndex].url})` }}>
<BsChevronLeft className='group-hover:block hidden hover:scale-110' size={50} onClick={()=>prevImage(projectsDatas.project3.sliderImage,droneCurrentIndex,droneSetCurrentIndex)}></BsChevronLeft>
         <BsChevronRight className='group-hover:block hidden hover:scale-110' size={50} onClick={()=>nextImage(projectsDatas.project3.sliderImage,droneCurrentIndex,droneSetCurrentIndex)} ></BsChevronRight>
       
</div>
<div >
<h1 className='text-2xl font-bold mb-2'>{projectsDatas.project3.name}</h1>
<p className='w-[600px] text-xl'>{projectsDatas.project3.description}</p>
<button className="border-2 rounded-md px-12  py-3 bg-black  text-white flex  translate-x-44 mt-6 hover:scale-110 duration-300">{projectsDatas.project3.buttonText}</button>

</div>

</div>

    </div>
  )
}
