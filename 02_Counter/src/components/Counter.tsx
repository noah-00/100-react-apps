"use client";

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow space-y-8 text-center  text-gray-500">
      <h1 className="text-2xl">React counter</h1>
      <div className="text-xl">{count}</div>
      <div className="space-x-8">
        <button
          className="bg-blue-500 text-white rounded-full h-12 w-12 hover:opacity-80"
          onClick={() => setCount((prev: number) => prev + 1)}
        >
          +
        </button>
        <button
          className="border-blue-500 border-2 rounded-full h-12 w-12 hover:opacity-80"
          onClick={() => setCount((prev: number) => prev - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
};
