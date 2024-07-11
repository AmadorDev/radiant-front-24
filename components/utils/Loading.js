import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center  w-full h-screen bg-slate-500 items-start">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"
      />
    </div>
  );
}
