import { GET_TICKER_DATA } from "./types";
import axios from "axios";

export const getTickerData = () => async (dispatch) => {
  try {
    const res = await axios.get("/tickers?symbols=tBTCUSD");
    dispatch({
      type: GET_TICKER_DATA,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};
