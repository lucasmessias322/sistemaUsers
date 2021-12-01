import React, { useContext, useState } from "react";
import Store from "./data/Store";
import Routes from "./routes";

function App() {
  return (
    <Store>
      <Routes />
    </Store>
  );
}

export default App;
