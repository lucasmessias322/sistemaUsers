import React from "react";
import Store from "./data/Store";
import Routes from "./routes";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Store>
      <Routes />
    </Store>
  );
}

export default App;
