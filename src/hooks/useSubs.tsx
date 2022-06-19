import { useEffect, useState } from "react";
import { getAllSubs } from "../services/getAllSubs";
import { AppState, Sub } from "../types";

const useSubs = (): {
  subs: Sub[];
  setSubs: React.Dispatch<React.SetStateAction<Sub[]>>;
} => {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  useEffect(() => {
    getAllSubs().then(setSubs);
  }, []);
  return { subs, setSubs };
};

export default useSubs;
