import React, { useContext, useEffect, useState } from "react";
import Input from "../../components/Input";
import { postLogin } from "../../service/Api";
import { AppContext } from "../../data/Store";
import * as C from "../../styles/style";
import { useHistory } from "react-router";

function initialState() {
  return { user: '', password: '' };
}

function autenticationLogin({user, password}) {
  if (user === 'admin' && password === 'admin') {
    return { token: '1234' };
  }
  return { error: 'Usuário ou senha inválido' };
}

function Login() {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(AppContext);
  const history = useHistory();

  const [password, setPassword] = useState(String);
  const [email, setEmail] = useState(String);

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = autenticationLogin(values);

    if (token) {
      setToken(token);
      return history.push('/dashboard');
    }

    setError(error);
    setValues(initialState);
  }


  return (
    <C.Container>
      <C.FormContainer>
        <form onSubmit={onSubmit}>
          <Input
            type="email"
            name="user"
            onChange={onChange}
            value={values.user}
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
