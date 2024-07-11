const lineaReducer = (state, action) => {
  switch (action.type) {
    case "UP_QUESTION":
      return {
        ...state,
        questions: state.questions.map((x, index) =>
          index === action.value.position ? (x = 1) : x
        ),
      };

    case "UP_COVER_EVENT":
      return {
        ...state,
        cover:  action.value,
      };
    default:
      return state;
  }
};
export default lineaReducer;
