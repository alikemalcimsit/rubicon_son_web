import React from 'react'
import {BsTelephone} from "react-icons/bs"
import {FiMail} from "react-icons/fi"
import {GoLocation} from "react-icons/go"
import { contactData } from './data'
export default function ContactPage() {
   
  return (
    <div id='/contact' className='h-[100vh] pt-20  '>
     <h1 className='text-center text-3xl font-bold mb-16 '>Contact</h1>
      
        <div className='flex items-center justify-center  gap-x-5'>
        <div >
<div className='flex items-center gap-x-7 mb-7'>
<p><BsTelephone size={30}></BsTelephone></p>
<h6 className='text-xl font-medium'>{contactData.phone}</h6>
</div>
<div className='flex items-center gap-x-7  mb-7 '>
<p><FiMail size={30}></FiMail></p>
<h6 className='text-xl font-medium'>{contactData.email}</h6>
</div>
<div className='flex items-center gap-x-7  mb-7 '>
    <p><GoLocation size={30}></GoLocation></p>
    <h1 className='text-xl font-medium'>{contactData.adress1}<br></br>{contactData.adress2}</h1>
</div>

</div>

<div className=" rounded-3xl h-[400px] w-[800px] bg-[url('/src/assets/konum.png')] bg-cover bg-no-repeat "  ></div>     

        </div>


    </div>
  )
}
