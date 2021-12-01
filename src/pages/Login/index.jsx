import React, { useContext, useEffect, useState } from "react";
import Input from "../../components/Input";
import { postLogin } from "../../service/Api";
import { AppContext } from "../../data/Store";
import * as C from "../../styles/style";

function Login() {
  const { status, setStatus } = useContext(AppContext);
  const [password, setPassword] = useState(String);
  const [email, setEmail] = useState(String);

  async function Login(e) {
    e.preventDefault();

   await postLogin(email, password).then((response) => {
      if (response.status === 200) {
        console.log("Logado Status: " + response.status);
        setStatus(response.status);
      }
    });
  };
  
  useEffect(() => {
    console.log(status);
  }, [status]);

  return (
    <C.Container>
      <C.FormContainer>
        <form onSubmit={(e) => Login(e)}>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <C.ButtonSubmit>Enviar</C.ButtonSubmit>
        </form>
        <C.H4>
          Não possui uma conta?{" "}
          <span>
            <a href="">REGISTER</a>
          </span>
        </C.H4>
      </C.FormContainer>
    </C.Container>
  );
}

export default Login;
