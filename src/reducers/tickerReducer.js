import { GET_TICKER_DATA } from "../actions/types";
const initialState = {
  ticker: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TICKER_DATA:
      return {
        ...state,
        ticker: action.payload,
      };
    default:
      return state;
  }
};
