const menuReducer = (state, action) => {
  switch (action.type) {
    case "UP_MENU":
      return {
        ...state,
        defaultMenu: state.defaultMenu.map((x) =>
          x.code === action.value.code ? { ...x, cate: action.value.data } : x
        ),
      };

    case "STATIC_REGISTER":
      return {
        ...state,
        register: action.value,
      };
    case "STATIC_INFO":
      return {
        ...state,
        info: action.value,
      };
    case "STATIC_FOOTER":
      return {
        ...state,
        menu_footer: action.value,
      };
    case "STATIC_LINE":
      return {
        ...state,
        line_st: action.value,
      };
    case "UP_COVER_EVENT":
      return {
        ...state,
        cover_event: action.value,
      };
    case "SET_BANNER":
      return {
        ...state,
        banner: action.value,
      };
    default:
      return state;
  }
};
export default menuReducer;
// originalData.map(x => (x.id === id ? { ...x, updatedField: 1 } : x));
