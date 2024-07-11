const eventReducer = (state, action) => {
    switch (action.type) {
      case "UP_COVER":
        
        return {
          ...state,
          cover: [...state.cover,action.value],
          
        };
  
  
      default:
        return state;
    }
  };
  export default eventReducer;

  