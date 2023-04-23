import React from "react";

export default function MembersPage() {
  const profileImage = [
    { id: 0, url: "https://picsum.photos/200" },
    { id: 1, url: "https://picsum.photos/200" },
    { id: 2, url: "https://picsum.photos/200" },
    { id: 3, url: "https://picsum.photos/200" },
    { id: 4, url: "https://picsum.photos/200" },
    { id: 5, url: "https://picsum.photos/200" },
    { id: 6, url: "https://picsum.photos/200" },
    { id: 7, url: "https://picsum.photos/200" },
    { id: 8, url: "https://picsum.photos/200" },
    { id: 9, url: "https://picsum.photos/200" },
    { id: 10, url: "https://picsum.photos/200" },
    { id: 11, url: "https://picsum.photos/200" },
    { id: 12, url: "https://picsum.photos/200" },
    { id: 13, url: "https://picsum.photos/200" },
    { id: 14, url: "https://picsum.photos/200" },
  ];
  return (
    <div className="h-[110vh] pt-20 px-24 bg-black items-center justify-center ">
      <h1 className="mx-12 text-2xl font-bold  text-white mb-16">Members</h1>

      <div className=" grid grid-cols-5 gap-x-16 ml-8 gap-y-11 ">
        <div
          className="h-[160px] w-[160px]  hover:scale-110 duration-300 rounded-full border-4 bg-cover bg-center "
          style={{ backgroundImage: `url(${profileImage[0].url})` }}
        ></div>
          <div
          className="h-[160px] w-[160px] hover:scale-110 duration-300 rounded-full border-4 bg-cover bg-center "
          style={{ backgroundImage: `url(${profileImage[1].url})` }}
        ></div>
          <div
          className="h-[160px] w-[160px] hover:scale-110 duration-300 rounded-full border-4 bg-cover bg-center "
          style={{ backgroundImage: `url(${profileImage[2].url})` }}
        ></div>
          <div
          className="h-[160px] w-[160px] hover:scale-110 duration-300 rounded-full border-4 bg-cover bg-center "
          style={{ backgroundImage: `url(${profileImage[0].url})` }}
        ></div>
          <div
          className="h-[160px] w-[160px] hover:scale-110 duration-300 rounded-full border-4 bg-cover bg-center "
          style={{ backgroundImage: `url(${profileImage[0].url})` }}
        ></div>
          <div
          className="h-[160px] w-[160px] hover:scale-110 duration-300 rounded-full border-4 bg-cover bg-center "
          style={{ backgroundImage: `url(${profileImage[0].url})` }}
        ></div>
          <div
          className="h-[160px] w-[160px] hover:scale-110 duration-300 rounded-full border-4 bg-cover bg-center "
          style={{ backgroundImage: `url(${profileImage[0].url})` }}
        ></div>
          <div
          className="h-[160px] w-[160px] hover:scale-110 duration-300 rounded-full border-4 bg-cover bg-center "
          style={{ backgroundImage: `url(${profileImage[0].url})` }}
        ></div>
          <div
          className="h-[160px] w-[160px] hover:scale-110 duration-300 rounded-full border-4 bg-cover bg-center "
          style={{ backgroundImage: `url(${profileImage[0].url})` }}
        ></div>
          <div
          className="h-[160px] w-[160px] hover:scale-110 duration-300 rounded-full border-4 bg-cover bg-center "
          style={{ backgroundImage: `url(${profileImage[0].url})` }}
        ></div>
          <div
          className="h-[160px] w-[160px] hover:scale-110 duration-300 rounded-full border-4 bg-cover bg-center "
          style={{ backgroundImage: `url(${profileImage[0].url})` }}
        ></div>
          <div
          className="h-[160px] w-[160px] hover:scale-110 duration-300 rounded-full border-4 bg-cover bg-center "
          style={{ backgroundImage: `url(${profileImage[0].url})` }}
        ></div>
          <div
          className="h-[160px] w-[160px] hover:scale-110 duration-300 rounded-full border-4 bg-cover bg-center "
          style={{ backgroundImage: `url(${profileImage[0].url})` }}
        ></div>
          <div
          className="h-[160px] w-[160px] hover:scale-110 duration-300 rounded-full border-4 bg-cover bg-center "
          style={{ backgroundImage: `url(${profileImage[0].url})` }}
        ></div>
          <div
          className="h-[160px] w-[160px] hover:scale-110 duration-300 rounded-full border-4 bg-cover bg-center "
          style={{ backgroundImage: `url(${profileImage[0].url})` }}
        ></div>
      </div>
    </div>
  );
}
