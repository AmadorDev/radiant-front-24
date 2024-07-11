import React, { useReducer, useState, useEffect } from "react";
import eventContext from "./eventContext";
import eventReducer from "./eventReducer";

const eventState = ({ children }) => {
  const initialState = {
    cover: [],
   
  };
  const [state, dispatch] = useReducer(eventReducer, initialState);


  const upCover = (covers)=>{
    dispatch({
        type:'UP_COVER',
        value:covers
    })
  }

  return (
    <eventContext.Provider
      value={{
        cover: state.cover,
        upCover
      }}
    >
      {children}
    </eventContext.Provider>
  );
};

export default eventState;
