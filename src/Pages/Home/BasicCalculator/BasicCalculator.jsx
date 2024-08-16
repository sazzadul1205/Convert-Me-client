import React, { useState } from "react";

const BasicCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(input)); // Note: eval can be dangerous, use a proper math parser for production
      } catch (e) {
        setResult("Error");
      }
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "/",
    "1",
    "2",
    "3",
    "*",
    "-",
    "0",
    ".",
    "C",
    "=",
    "+",
  ];

  return (
    <div className="bg-gray-100 h-[700px]">
      <div className="flex justify-center  bg-gray-100 py-10">
        <div className="bg-white p-4 rounded-lg shadow-lg w-80">
          <div className="mb-4 p-2 bg-gray-200 rounded-lg text-right">
            <div className="text-gray-500">{input || "0"}</div>
            <div className="text-2xl">{result || "0"}</div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {buttons.map((btn) => (
              <button
                key={btn}
                className={`btn btn-outline btn-primary ${
                  btn === "+" ? "col-span-2" : ""
                }`}
                style={btn === "=" ? { gridColumn: "span 2" } : {}}
                onClick={() => handleButtonClick(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicCalculator;
