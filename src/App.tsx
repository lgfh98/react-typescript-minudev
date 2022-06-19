import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { ApiSub, Sub } from "./types";

type Props = {};

type AppState = {
  subs: Array<Sub>;
  subsCounter: number;
};

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [subsCounter, setSubsCounter] = useState<AppState["subsCounter"]>(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSubs = (): Promise<ApiSub> => {
      return fetch("http://localhost:3001/subs").then((response) =>
        response.json()
      );
    };

    const mapApiSubsToSubs = (apiSubs: ApiSub): Array<Sub> => {
      return apiSubs.map((apiSub) => {
        const {
          nick,
          month: subMonths,
          profileUrl: avatar,
          description,
        } = apiSub;

        return {
          nick,
          avatar,
          subMonths,
          description,
        };
      });
    };

    fetchSubs().then(mapApiSubsToSubs).then(setSubs);
  }, []);

  const handleNewSub = (newSub: Sub) => {
    setSubs([
      ...subs,
      { ...newSub, avatar: `https://i.pravatar.cc/150?u=${newSub.avatar}` },
    ]);
    setSubsCounter(subsCounter + 1);
  };

  return (
    <div ref={divRef} className="App">
      <h4>Total de subscriptores: {subsCounter}</h4>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
