import "./App.css";
import React, { useState } from "react";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const [conn, setConn] = useState(false);

  const access = (state) => {
    if (state === 1) {
      state = true;
    }
    setConn(state);
  };

  return conn ? <Dashboard /> : <Login access={access} />;
}

export default App;
