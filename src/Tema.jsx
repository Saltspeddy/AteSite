import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Tema() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center text-[#0B132B]">
      <div className="absolute top-20 left-[30%] font-semibold">
        <p className="p-2 px-4 flex justify-center rounded-full bg-[#5BC0BE] ">
          1
        </p>
        <div className="text-[#3A506B]">Tema</div>
      </div>
      <div className="absolute top-20 left-[45%] font-semibold">
        <p className="p-2 px-4 flex justify-center rounded-full bg-[#3a506b]">
          2
        </p>
        <p className="text-[#3A506B]">Model</p>
      </div>
      <div className="absolute  top-20 left-[60%] font-semibold">
        <p className="p-2 px-4 flex justify-center rounded-3xl bg-[#3a506b] ">
          3
        </p>
        <p className="text-[#3A506B]">Paleta</p>
      </div>
      <div className=" flex flex-col justify-center items-center gap-8 font-semibold">
        <p className="text-2xl">Zi-ne despre ce dorești să fie atestatul tău</p>
        <input
          className=" p-4 z-10 rounded-3xl w-[30rem] text-[#0B132B]"
          type="text"
          placeholder="ex: Pădure, Istorie, Europa"
        />
      </div>
      <div className="absolute bottom-3 right-3 font-semibold">
        <Link
          to="/stil"
          className="flex justify-center items-center p-4 border-2 rounded-3xl bg-[#6fffe9] hover:border-[#0B132B] border-[#6fffe9] duration-500"
        >
          <p>Înainte</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Tema;
