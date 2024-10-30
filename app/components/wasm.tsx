"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

interface WasmAddTwoProps {
  number1: number;
  number2: number;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
const WasmAddTwoComponent = ({ number1, number2 }: WasmAddTwoProps) => {
  const [addTwo, setAddTwo] =
    useState<(number1: number, number2: number) => number>();

  useEffect(() => {
    const loadWasm = async () => {
      const wasmModule = (await import("@/../pkg/index.wasm")) as any;
      setAddTwo(() => wasmModule.add);
    };

    loadWasm();
  }, []);

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-gray-700">Sum:</h3>
      <p className="text-2xl font-bold text-blue-600">
        {addTwo ? addTwo(number1, number2) : "Loading..."}
      </p>
    </div>
  );
};
const WasmAddTwo = dynamic(() => Promise.resolve(WasmAddTwoComponent), {
  // Ensure only client-side execution:
  ssr: false,
});

export default WasmAddTwo;
