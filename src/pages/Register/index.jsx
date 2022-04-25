import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Input from "../../components/Input";
import { postRegister } from "../../service/Api";
import { useNavigate, Link } from "react-router-dom";
import * as C from "../../styles/style";
import { ToastContainer, toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const [response, setResponse] = useState({ msg: "", userCriado: false });
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    postRegister(values)
      .then((response) => {
        console.log(response.data);
        setResponse(response.data);
      })
      .catch((error) => toast("Erro ao se registrar: " + error));
  }

  useEffect(() => {
    if (response.userCriado) {
      return navigate("/");
    } else {
      if (response.msg !== "") {
        toast(response.msg);
      }
    }
  }, [response]);

  return (
    <C.Container>
      <C.FormContainer>
        <form onSubmit={onSubmit}>
          <Input
            User={true}
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
            placeholder="Seu nome"
            require
          />
          <Input
            Email
            type="email"
            name="email"
            onChange={onChange}
            value={values.email}
            placeholder="Seu email"
            require
          />
          <Input
            Password={true}
            type="text"
            name="password"
            onChange={onChange}
            value={values.password}
            placeholder="Sua senha"
            require
          />
          <Input
            Password={true}
            type="text"
            name="confirmpassword"
            onChange={onChange}
            value={values.confirmpassword}
            placeholder="Digite sua senha novamente"
            require
          />
          <C.ButtonSubmit>Enviar</C.ButtonSubmit>
        </form>
        <C.H4>
          Possui uma conta?{" "}
          <span>
            <Link to="/">LOGIN</Link>
          </span>
        </C.H4>
      </C.FormContainer>
      <ToastContainer theme="dark" />
    </C.Container>
  );
}

export default Register;
