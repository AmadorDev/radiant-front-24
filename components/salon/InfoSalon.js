import React from "react";

export default function InfoSalon({ salon }) {
  return (
    
      <div className="overflow-hidden shadow-md shadow">
        {/* card header */}
        <div className="px-6 py-4 bg-white border-b border-gray-200 font-bold uppercase">
          {salon?.name} <br></br> 
          <small>
          {salon?.distric} <strong>({salon?.city})</strong>
          </small>
        </div>
      
        <div className="p-6 bg-white border-b border-gray-200">
          <p>{salon?.address}</p>
        </div>
      </div>
   
  );
}
