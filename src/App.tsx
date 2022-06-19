import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { Sub } from "./types";

type Props = {};

type AppState = {
  subs: Array<Sub>;
  subsCounter: number;
};

const INITIAL_STATE = [
  {
    nick: "Luis",
    subMonths: 2,
    avatar: "https://i.pravatar.cc/150?u=Luis",
  },
  {
    nick: "Camilo",
    subMonths: 5,
    avatar: "https://i.pravatar.cc/150?u=Camilo",
    description:
      "Camilo es el mas concurrente y divertido, estoy llenando esto con caracteres para probar un visaje. Lo que le dije sotcio",
  },
];

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [subsCounter, setSubsCounter] = useState<AppState["subsCounter"]>(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSubs(INITIAL_STATE);
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
