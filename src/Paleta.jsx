import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Paleta() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center text-[#0B132B]">
      <div className="absolute top-20 left-[30%] font-semibold">
        <p className="p-2 px-4 flex justify-center rounded-full bg-[#5BC0BE] ">
          1
        </p>
        <div className="text-[#3A506B]">Tema</div>
      </div>
      <div className="absolute top-20 left-[45%] font-semibold">
        <p className="p-2 px-4 flex justify-center rounded-full bg-[#5BC0BE]">
          2
        </p>
        <p className="text-[#3A506B]">Model</p>
      </div>
      <div className="absolute  top-20 left-[60%] font-semibold">
        <p className="p-2 px-4 flex justify-center rounded-3xl bg-[#5BC0BE] ">
          3
        </p>
        <p className="text-[#3A506B]">Paleta</p>
      </div>
      <div className=" flex gap-8 font-semibold">
        <div className="flex flex-col justify-center items-center"></div>
        <div></div>
        <div></div>
      </div>
      <div className="absolute bottom-3 left-3 font-semibold">
        <Link
          to="/Stil"
          className="flex justify-center items-center p-4 border-2 rounded-3xl hover:bg-[#0B132B] hover:text-[#edf2f4] border-[#0B132B] duration-500"
        >
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
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <p>Înapoi</p>
        </Link>
      </div>
      <div className="absolute bottom-3 right-3 font-semibold">
        <button className="flex justify-center items-center p-4 border-2 rounded-3xl bg-[#6fffe9] hover:border-[#0B132B] border-[#6fffe9] duration-500">
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
        </button>
      </div>
    </div>
  );
}

export default Paleta;
