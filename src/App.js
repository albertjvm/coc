import React, { useState, useEffect } from "react";
import "./App.css";
import { TroopGrid } from "./components/troop-grid";
import { COC } from "./api";

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    COC.getClanMembers().then(r => setMembers(r));
  }, []);

  return (
    <div className="App">
      <TroopGrid players={members} />
    </div>
  );
}

export default App;
