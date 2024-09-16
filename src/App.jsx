import { useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Stil from "./Stil";
import Tema from "./Tema";
import Paleta from "./Paleta";
function App() {
  const pageHeight = window.innerHeight;
  const [isActive, setisActive] = useState(false);

  function customizeWebiste() {
    setisActive(true);
    setTimeout(() => {
      window.scrollTo({
        top: pageHeight,
        left: 0,
        behavior: "smooth",
      });
    }, 200);
  }

  return (
    <>
      {/* <div class="relative h-full w-full bg-white"><div class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div></div> */}

      <div class=" shadow-2xl shadow-[#6FFFE9] relative font-rubik h-screen w-screen bg-gradient-to-l from-[#0B132B] to-[#276564] flex gap-4 flex-col justify-center items-center text-[#edf2f4]">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <h1 className="z-10 text-9xl font-semibold">AteSite</h1>
        <p className="z-10 text-3xl font-medium">
          Site-ul tau preferat pentru crearea rapida și eficientă a atestatelor{" "}
        </p>
        <input
          className=" p-4 z-10 rounded-3xl w-[60%] text-[#0B132B]"
          type="text"
          placeholder="Zi-ne despre ce dorești să fie atestatul tău"
        />
        <button
          onMouseDown={() => {
            customizeWebiste();
          }}
          className=" flex justify-center items-center z-10 p-4 rounded-2xl hover:bg-[#0B132B] hover:p-6 bg-[#6FFFE9] hover:text-[#edf2f4] text-[#0B132B] duration-500"
        >
          Crează-ți propriul atestat
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
      <div
        className={
          isActive
            ? "h-screen w-screen bg-[#edf2f4] grid grid-cols-2 font-rubik"
            : " hidden"
        }
      >
        <div className="h-full w-full flex justify-center items-center">
          <div className="w-[48em] h-[27em] bg-black rounded-sm"></div>
        </div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Tema />} />
            <Route exact path="/stil" element={<Stil />} />
            <Route exact path="/paleta" element={<Paleta />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
