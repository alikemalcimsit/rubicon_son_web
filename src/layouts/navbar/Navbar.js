import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [active,setActive]=useState(1);
  return (
    <div className="fixed z-10 w-full backdrop-blur-sm bg-black/30  h-20 ">
      <div className="flex  gap-x-20 text-lg  justify-center text-white  items-center mt-6">
    
   
    <Link   to="/" spy={true} smooth={true} offset={0} duration={700} >
     <button className={active ===1 ? "text-red-500 duration-75":null }  onClick={()=>setActive(1)}>Home</button>
     </Link>  
   
    
     
     
     <Link to="/about" spy={true} smooth={true} offset={-50} duration={700} >
     <button  className={active ===2 ? "text-red-500 duration-75":null }  onClick={()=>setActive(2)}>About</button>
     </Link>
       <Link to="/members" spy={true} smooth={true} offset={0} duration={700} >
       <button  className={active ===3 ? "text-red-500 duration-75":null }  onClick={()=>setActive(3)}>Members</button>
       </Link>
       
       <Link to="/projects" spy={true} smooth={true} offset={-90} duration={700} >
       <button 
       className={active ===5 ? "text-red-500 duration-75":null }  onClick={()=>setActive(5)}>Projects</button>
       </Link>
       <Link to="/contact" spy={true} smooth={true} offset={0} duration={700} >
       <button  className={active ===4 ? "text-red-500 duration-75":null }  onClick={()=>setActive(4)}>Contact</button>
       </Link>
      
      
      </div>
    </div>
  );
}
