"use client";
import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => console.error(error), [error]);

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={reset}>
        Try Again
      </button>
    </div>
  );
}