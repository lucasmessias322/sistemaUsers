import React, { useEffect, useContext } from "react";
import * as C from "./style";
import { getUserdata } from "../../service/Api";
import { AppContext } from "../../data/Store";
import { config } from "../../service/Api";

function DashBoard() {
  const { token, currentUserData } = useContext(AppContext);

  useEffect(() => {
    getUserdata("619d28618844a4acfa4a665a", config(token)).then((response) =>
      console.log(response)
    );
  }, []);
  console.log(currentUserData);

  return (
    <C.Container>
      <h1>Meu Dashbord</h1>
    </C.Container>
  );
}

export default DashBoard;
