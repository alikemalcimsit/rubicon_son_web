import React from "react";

export default function Navbar() {
  return (
    <div className="absolute z-10 w-full ">
      <div className="flex  gap-x-20 text-lg  justify-center items-center mt-8">
        <button>Home</button>
        <button>About</button>
        <button>Members</button>
        <button>Contact</button>
      </div>
    </div>
  );
}
