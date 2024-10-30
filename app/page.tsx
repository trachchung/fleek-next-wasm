"use client";

import { useState } from "react";
import WasmAddTwo from "./components/wasm";

export default function Home() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Number 1:</span>
          <input
            type="number"
            value={number1}
            onChange={(e) => setNumber1(Number(e.target.value))}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-700 font-medium">Number 2:</span>
          <input
            type="number"
            value={number2}
            onChange={(e) => setNumber2(Number(e.target.value))}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <WasmAddTwo number1={number1} number2={number2} />
      </div>
    </div>
  );
}
