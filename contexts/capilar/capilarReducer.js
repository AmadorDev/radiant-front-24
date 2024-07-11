const capilarReducer = (state, action) => {
  switch (action.type) {
    case "UP_QUESTION":
      return {
        ...state,
        questions: state.questions.map((x, index) =>
          index === action.value.position ? (x = 1) : x
        ),
      };

    case "RESET_QUESTION":
      return {
        ...state,
        questions: action.value,
      };

    case "MARK_QUESTION":
      return {
        ...state,
        markValue: [...state.markValue, action.value],
      };

    case "MARK_UP_QUESTION":
      return {
        ...state,
        markValue: state.markValue.map((x) =>
          x.q === action.value.q ? { ...x, p: action.value.p } : x
        ),
      };
    case "MARK_RESET_QUESTION":
      return {
        ...state,
        markValue: action.value,
      };

    default:
      return state;
  }
};
export default capilarReducer;
//object updte
// originalData.map(x => (x.id === id ? { ...x, updatedField: 1 } : x));
