import React from 'react'
import car from "../assets/cardetails.png"
export default function CardDetailsPage() {
  return (
    <div className='h-[100vh] bg-[#090909]  overflow-hidden flex   '>


<div className='w-1/2'>
            <div className='rounded-full h-96 w-96 bg-[#535353] blur-2xl absolute translate-x-52 translate-y-40'></div>
            <img src={car} className='mix-blend-luminosity absolute scale-75 -translate-x-28  translate-y-20'></img>
        </div>
<div className=' w-1/2 flex justify-center items-center'>
<div>
<h1 className='text-white font-medium items-center justify-center flex text-4xl'>Rubicon Özellikleri</h1>
<div className='mt-9'>
<div className='flex gap-x-3 mb-4'>
<div className='w-48 h-9 border-2 text-white text-sm flex items-center justify-center font-bold border-white/50 rounded-md'>Long Range AWD</div>
           
           <div className='w-48 h-9 border-2  text-white text-sm flex items-center justify-center font-bold border-white/50 rounded-md'>Long Range</div>

</div>
<div className='flex mb-11'>
<div className='w-48 h-9 border-2  text-white text-sm flex items-center justify-center font-bold border-white/50 rounded-md'>Long Range</div>
</div>
</div>
<div className='flex gap-x-32  justify-center items-center text-xl'>

<div>
    
<div >
  <hr className='w-12'></hr>
<h2 className='font-bold text-white py-2'>Batarya</h2>
<h5 className='text-white pb-3'>Long Range</h5>
<hr className='w-12'></hr>
</div>

<div className='my-4'>
<h2 className='font-bold text-white py-2'>Batarya</h2>
<h5 className='text-white pb-3'>Long Range</h5>
<hr className='w-12'></hr>
</div>

<div className='my-4'>
<h2 className='font-bold text-white py-2'>Batarya</h2>
<h5 className='text-white pb-3'>Long Range</h5>
<hr className='w-12'></hr>
</div>

<div>

<h2 className='font-bold text-white py-2'>Batarya</h2>
<h5 className='text-white pb-3'>Long Range</h5>
<hr className='w-12'></hr>
</div>


</div>
<div>
    
<div>
  <hr className='w-7'></hr>
<h2 className='font-bold text-white py-2'>Batarya</h2>
<h5 className='text-white pb-3'>Long Range</h5>
<hr className='w-12'></hr>
</div>

<div className='my-4'>
  
<h2 className='font-bold text-white py-2'>Batarya</h2>
<h5 className='text-white pb-3'>Long Range</h5>
<hr className='w-12'></hr>
</div>

<div className='my-4'>

<h2 className='font-bold text-white py-2'>Batarya</h2>
<h5 className='text-white pb-3'>Long Range</h5>
<hr className='w-12'></hr>
</div>

<div>

<h2 className='font-bold text-white py-2'>Batarya</h2>
<h5 className='text-white pb-3'>Long Range</h5>
<hr className='w-12'></hr>
</div>


</div>
</div>
</div>
</div>


        </div>
   
  )
}
     