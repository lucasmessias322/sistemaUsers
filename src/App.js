import React from "react";
import Store from "./data/Store";
import RouterComponent from "./routes";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Store>
      <RouterComponent />
    </Store>
  );
}

export default App;
