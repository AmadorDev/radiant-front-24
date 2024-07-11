import React from "react";

export default function Breakcrums({ children }) {
  return (
    
      <div className="container-fluid ">
        <div className="row Breakcrums py-3">
          <div className="col-12">
            <div className="breadcrumb_content ">
              <ul className="breakText ">{children}</ul>
            </div>
          </div>
        </div>
      </div>
    
  )
}