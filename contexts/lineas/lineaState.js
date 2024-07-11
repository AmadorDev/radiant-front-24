import React, { useReducer, useState, useEffect } from "react";

import lineaContext from "./lineaContext";
import lineaReducer from "./lineaReducer";

const lineaState = ({ children }) => {
  const initialState = {
    lineas: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    cover_event:[]
  };
  const [state, dispatch] = useReducer(lineaReducer, initialState);

  useEffect(() => {}, []);
  const upCover = (covers)=>{
    dispatch({
        type:'UP_COVER_EVENT',
        value:covers
    })
  }
  return (
    <lineaContext.Provider
      value={{
        lineas: state.lineas,
        cover_event: state.cover_event,
      upCover
      }}
    >
      {children}
    </lineaContext.Provider>
  );
};

export default lineaState;
