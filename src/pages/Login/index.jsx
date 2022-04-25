import React, { useContext, useEffect, useState } from "react";
import Input from "../../components/Input";
import { postLogin} from "../../service/Api";
import { AppContext } from "../../data/Store";
import * as C from "../../styles/style";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


function Login() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const { token, setToken, currentUserData,setCurrentUserData } = useContext(AppContext);
  const navigate = useNavigate();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

 async function onSubmit(event) {
    event.preventDefault();

    postLogin(values.email, values.password).then((response) => {
         setToken(response.data.token)
         setCurrentUserData(response.data.user)
      });

    if (token) {
      setToken(token);
      
      return navigate('/dashboard')
    }

    setError(error);
    setValues({ email: "", password: "" });
  }

  useEffect(() => {
    if (token) {
      console.log("token é: " + token);
      console.log("currentUserData", currentUserData);
      navigate('/dashboard')
    }
  }, [token]);

  
  return (
    <C.Container>
      <C.FormContainer>
        <form onSubmit={onSubmit}>
          <Input
            User
            type="email"
            name="email"
            onChange={onChange}
            value={values.email}
            require
            placeholder="Digite seu email"
          />
          <Input
            Password
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
            require
            placeholder="Digite sua senha"
          />

          <C.ButtonSubmit>Enviar</C.ButtonSubmit>
        </form>
        <C.H4>
          Não possui uma conta?{" "}
          <span>
            <Link to="/register">REGISTER</Link>
          </span>
        </C.H4>
      </C.FormContainer>
      <ToastContainer />
    </C.Container>
  );
}

export default Login;
