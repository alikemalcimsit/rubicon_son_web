import React from "react";

export default function HomePage() {
  return <div className="bg-[url('/src/assets/homepagebg.jpg')]  bg-cover h-[100vh]   bg-no-repeat">

<div className="text-center translate-y-36">
    <h1 className="text-[#171A20] text-6xl font-medium">Rubicon</h1>
</div>

<div className="flex h-full items-end -translate-y-32  justify-center text-white gap-14 " >
    <div>
    <h1 className="font-bold text-3xl">2100+</h1>
    <h3 className="font-semibold text-2xl">Hacim</h3>
    </div>
    <div>
    <h1 className="font-bold text-3xl">533km</h1>
    <h3 className="font-semibold text-2xl">Menzil</h3>
    </div>
    <div>
    <h1 className="font-bold text-3xl">AWD</h1>
    <h3 className="font-semibold text-2xl">Çift Motor</h3>
    </div>
<div>
<button className="border-2 rounded-md px-12 py-3">Rubiconu Keşfet</button>
</div>
  

</div>
  </div>;
}
