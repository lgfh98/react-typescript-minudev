import { useEffect, useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import useSubs from "./hooks/useSubs";
import { AppState, Sub } from "./types";

const App = () => {
  const [subsCounter, setSubsCounter] = useState<AppState["subsCounter"]>(0);
  const divRef = useRef<HTMLDivElement>(null);
  const { subs, setSubs } = useSubs();

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
};

export default App;
