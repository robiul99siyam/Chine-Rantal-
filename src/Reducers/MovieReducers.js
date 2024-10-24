const initialition = {
  cardData: [],
};
const MovieReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
   
    return {
      cardData: [...state.cardData, action.payload],
    };
  }
  if (action.type === "REMOVE_TO_CART") {
    return {
      ...state,
      cardData: state.cardData.filter((x) => x.id !== action.payload.id),
    };
  }
  return state;
};

export { initialition, MovieReducer };
