import React, { useReducer, useState, useEffect } from "react";

import capilarContext from "./capilarContext";
import capilarReducer from "./capilarReducer";

const capilarState = ({ children }) => {
  
  const initialState = {
    questions: [0, 0, 0, 0, 0],
    comb: [
      { id: "A", linea: "MACADAMIA",line_id:10 },
      { id: "B", linea: "KERATINA",line_id:4  },
      // { id: "AC", linea: "KERATINA" },
      { id: "C", linea: "ARGAN" ,line_id:11 },
      { id: "D", linea: "POST LISS",line_id:12  },
      { id: "E", linea: "SILVER" ,line_id:6 },
      { id: "F", linea: "PRO FILLER" ,line_id:7 },
    ],
    markValue: [],
  };

  const [state, dispatch] = useReducer(capilarReducer, initialState);

  useEffect(() => {
  
    
  }, []);

  function updateQuestion(payload) {
    dispatch({
      type: "UP_QUESTION",
      value: payload,
    });
  }

  function resetQuestion(payload) {
    dispatch({
      type: "RESET_QUESTION",
      value: [0, 0, 0, 0, 0],
    });
  }
  function markQuestion(payload) {
    if (state.markValue.length > 0) {
      let mark = state.markValue.find((item) => item.q === payload.q);
      if (mark === undefined) {
        dispatch({
          type: "MARK_QUESTION",
          value: payload,
        });
      } else {
        dispatch({
          type: "MARK_UP_QUESTION",
          value: payload,
        });
      }
    } else {
      dispatch({
        type: "MARK_QUESTION",
        value: payload,
      });
    }
  }
  function resetMark() {
    dispatch({
      type: "MARK_RESET_QUESTION",
      value: [],
    });
  }

  return (
    <capilarContext.Provider
      value={{
        questions: state.questions,
        comb: state.comb,
        markValue: state.markValue,
        updateQuestion,
        resetQuestion,
        markQuestion,
        resetMark,
        
      }}
    >
      {children}
    </capilarContext.Provider>
  );
};

export default capilarState;
