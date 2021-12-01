import React from 'react'
import * as C from '../../styles/style'

function Register() {
    return (
    <C.Container>
      <C.FormContainer>
        <form action="">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          <C.ButtonSubmit>Enviar</C.ButtonSubmit>
        </form>
        <C.H4>Possui uma conta? <span><a href="">LOGIN</a></span></C.H4>
      </C.FormContainer>
    </C.Container>
    )
}

export default Register
