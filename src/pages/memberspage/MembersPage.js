import React from "react";
import {profileImage,pageData} from "./data"
export default function MembersPage() {

  return (
    <div id='/members' className="h-[115vh] pt-20 px-24 bg-[#090909] items-center justify-center ">
      <h1 className="mx-16 text-3xl font-bold  text-white mb-16">Members</h1>

      <div className="    ml-8 ">
       <div className="grid grid-cols-5 gap-x-28  justify-center ">
        
        {profileImage.map(item=>(


<a href={item.link}>
<div 
className="h-[160px] w-[160px]  hover:scale-110 duration-300 rounded-full mb-14 border-4 bg-cover bg-center "
style={{ backgroundImage: `url(${item.url})` }}
></div>
</a>


        ))}
        
        
        </div>
        
      </div>
    </div>
  );
}
