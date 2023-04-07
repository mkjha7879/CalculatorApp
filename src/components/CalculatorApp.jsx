import React, { Fragment, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const CalculatorApp = () => {
  const [number, setNuber] = useState("");
  const handleclick = (e) => {
    setNuber(number.concat(e.target.value));
  };
  const handleClear = () => {
    setNuber("");
  };
  const handleSlice = () => {
    setNuber(number.slice(0, -1));
  };
  const handleAnswer=()=>{
    try {
        setNuber(eval(number).toString())
    } catch (error) {
       setNuber("Invalid")
    }
  }
  return (
    <Fragment>
      <div className="text-green-500">Hello</div>
      <section>
        <div className="bg-gray-900 w-96 h-screen mx-auto rounded-lg overflow-hidden mt-10">
          <div className="text-gray-200 w-full font-bold text-3xl h-16 flex items-center space-x-2 pl-2">
            <GiHamburgerMenu />
            <p>CALCULATOR APP </p>
          </div>
          {/* screen */}
          <div className="w-full h-20">
            <input
              type="text"
              placeholder="0"
              className="w-full h-full border border-white bg-gray-900 text-4xl text-right pr-5 text-white"
              value={number}
            />
          </div>
          {/* key part */}
          <div className="grid grid-cols-4 gap-2 mt-10 mx-3">
            <button
              onClick={handleClear}
              className="text-black   bg-white font-bold rounded-lg w-20 h-20 text-3xl flex justify-center items-center shadow"
            >
              AC
            </button>
            <button
              onClick={handleSlice}
              className=" font-bold text-black  bg-white rounded-lg w-20 h-20 text-3xl flex justify-center items-center shadow"
            >
              C
            </button>
            <button
              value="/"
              onClick={handleclick}
              className=" font-bold text-black  bg-white rounded-lg w-20 h-20 text-3xl flex justify-center items-center shadow"
            >
              /
            </button>
            <button
              value="+"
              onClick={handleclick}
              className=" font-bold text-black  bg-white rounded-lg w-20  text-3xl flex justify-center items-center shadow row-span-2 h-40"
            >
              +
            </button>

            <button
              value="9"
              onClick={handleclick}
              className="text-white font-bold bg-indigo-500 rounded-lg w-20 h-20 text-3xl flex justify-center items-center shadow"
            >
              9
            </button>
            <button
              value="8"
              onClick={handleclick}
              className="text-white font-bold bg-indigo-500 rounded-lg w-20 h-20 text-3xl flex justify-center items-center shadow"
            >
              8
            </button>
            <button
              value="7"
              onClick={handleclick}
              className="text-white font-bold bg-indigo-500 rounded-lg w-20 h-20 text-3xl flex justify-center items-center shadow"
            >
              7
            </button>

            <button
              value="4"
              onClick={handleclick}
              className="text-white font-bold bg-indigo-500 rounded-lg w-20 h-20 text-3xl flex justify-center items-center shadow"
            >
              4
            </button>
            <button
              value="5"
              onClick={handleclick}
              className="text-white font-bold bg-indigo-500 rounded-lg w-20 h-20 text-3xl flex justify-center items-center shadow"
            >
              5
            </button>
            <button
              value="6"
              onClick={handleclick}
              className="text-white font-bold bg-indigo-500 rounded-lg w-20 h-20 text-3xl flex justify-center items-center shadow"
            >
              6
            </button>
            <button
              value="-"
              onClick={handleclick}
              className=" font-bold text-black  bg-white rounded-lg w-20 h-20 text-3xl flex justify-center items-center shadow"
            >
              -
            </button>

            <button
              value="1"
              onClick={handleclick}
              className="text-white font-bold bg-indigo-500 rounded-lg w-20 h-20 text-3xl flex justify-center items-center shadow"
            >
              1
            </button>
            <button
              value="2"
              onClick={handleclick}
              className="text-white font-bold bg-indigo-500 rounded-lg w-20 h-20 text-3xl flex justify-center items-center shadow"
            >
              2
            </button>
            <button
              value="3"
              onClick={handleclick}
              className="text-white font-bold bg-indigo-500 rounded-lg w-20 h-20 text-3xl flex justify-center items-center shadow"
            >
              3
            </button>
            <button
              value="*"
              onClick={handleclick}
              className=" font-bold text-black  bg-white rounded-lg w-20 h-20 text-3xl flex justify-center items-center shadow"
            >
              *
            </button>

            <button
              value="0"
              onClick={handleclick}
              className="text-white font-bold bg-indigo-500 rounded-lg w-20 h-20 text-3xl flex justify-center items-center shadow"
            >
              0
            </button>
            <button
              value="."
              onClick={handleclick}
              className="text-white font-bold bg-indigo-500 rounded-lg w-20 h-20 text-3xl flex justify-center items-center shadow"
            >
              .
            </button>
            <button
            
              onClick={handleAnswer}
              className=" font-bold text-black  bg-white rounded-lg w-40 h-20 text-3xl flex justify-center items-center shadow col-span-2"
            >
              =
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CalculatorApp;
