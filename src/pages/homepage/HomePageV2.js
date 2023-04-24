import React from 'react'
import { Link } from 'react-router-dom'
import { homepageV2Data } from './data'
export default function HomePageV2() {
  return (
    <div  className="bg-[url('/src/assets/homepagebg.jpg')]  bg-cover h-[100vh]   bg-no-repeat">

    <div className="text-center translate-y-36">
        <h1 className="text-[#171A20] text-6xl font-medium">{homepageV2Data.baseTitle}</h1>
    </div>
    
    <div className="flex h-full items-end -translate-y-32  justify-center text-white gap-14 " >
        <div>
        <h1 className="font-bold text-3xl">{homepageV2Data.title1}+</h1>
        <h3 className="font-semibold text-2xl">{homepageV2Data.description1}</h3>
        </div>
        <div>
        <h1 className="font-bold text-3xl">{homepageV2Data.title2}</h1>
        <h3 className="font-semibold text-2xl">{homepageV2Data.description2}</h3>
        </div>
        <div>
        <h1 className="font-bold text-3xl">{homepageV2Data.title3}</h1>
        <h3 className="font-semibold text-2xl">{homepageV2Data.description3}</h3>
        </div>
    <div>
    <Link to="/" ><button  className="border-2 rounded-md px-12 py-3 hover:border-black duration-200 hover:text-black hover:bg-white">{homepageV2Data.buttonText}</button></Link>
    </div>
      
    
    </div>
      </div>
  )
}
