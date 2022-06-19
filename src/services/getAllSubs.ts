import axios from "axios";
import { ApiSub, Sub } from "../types";

export const getAllSubs = async () => {
  const apiSubs = await fetchSubs();
  return mapApiSubsToSubs(apiSubs);
};

const fetchSubs = async (): Promise<ApiSub> => {
  const response = await axios.get("http://localhost:3001/subs");
  return response.data;
};

const mapApiSubsToSubs = (apiSubs: ApiSub): Array<Sub> => {
  return apiSubs.map((apiSub) => {
    const { nick, months: subMonths, profileUrl: avatar, description } = apiSub;

    return {
      nick,
      avatar,
      subMonths,
      description,
    };
  });
};
