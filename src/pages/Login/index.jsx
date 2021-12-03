import React, { useContext, useEffect, useState } from "react";
import Input from "../../components/Input";
import { postLogin } from "../../service/Api";
import { AppContext } from "../../data/Store";
import * as C from "../../styles/style";
import { useHistory } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const { token, setToken } = useContext(AppContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    postLogin(values.email, values.password).then((response) =>
      setToken(response.data.token)
    );

    if (token) {
      setToken(token);
      return history.push('/dashboard')
    }

    setError(error);
    setValues({ email: "", password: "" });
  }

  useEffect(() => {
    if (token) {
      console.log("token é: " + token);
      history.push('/dashboard')
    }
  }, [token]);

  return (
    <C.Container>
      <C.FormContainer>
        <form onSubmit={onSubmit}>
          <Input
            type="email"
            name="email"
            onChange={onChange}
            value={values.email}
          />
          <Input
            type="text"
            name="password"
            onChange={onChange}
            value={values.password}
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
