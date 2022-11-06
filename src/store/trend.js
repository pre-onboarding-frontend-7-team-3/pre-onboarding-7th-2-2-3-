import axios from "axios";
import { selector } from "recoil";

export const trendDataQuery = selector({
  key: "trendDataQuery",
  get: async ({ get }) => {
    // const date = get(dateState);
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/trend_data`);
    return res.data;
  },
});