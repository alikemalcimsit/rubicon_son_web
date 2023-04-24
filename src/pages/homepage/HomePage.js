import React from "react";
import { Link } from "react-router-dom";
import { homepageData } from "./data";
export default function HomePage() {
  return <div  className="bg-[url('/src/assets/homepagebg.jpg')]  bg-cover h-[100vh]   bg-no-repeat">

<div className="text-center translate-y-36">
    <h1 className="text-[#171A20] text-6xl font-medium">{homepageData.baseTitle}</h1>
</div>

<div className="flex h-full items-end -translate-y-32  justify-center text-white gap-14 " >
    <div>
    <h1 className="font-bold text-3xl">{homepageData.title1}</h1>
    <h3 className="font-semibold text-2xl">{homepageData.description1}</h3>
    </div>
    <div>
    <h1 className="font-bold text-3xl">{homepageData.title2}</h1>
    <h3 className="font-semibold text-2xl">{homepageData.description2}</h3>
    </div>
    <div>
    <h1 className="font-bold text-3xl">{homepageData.title3}</h1>
    <h3 className="font-semibold text-2xl">{homepageData.description3}</h3>
    </div>
<div>
<Link  to="/" ><button  className="border-2 rounded-md px-12 py-3 hover:border-black duration-200 hover:text-black hover:bg-white">{homepageData.buttonText}</button></Link>
</div>
  

</div>
  </div>;
}
