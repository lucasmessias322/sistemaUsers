import React from "react";
import * as C from "./style";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

function Input(props) {
  
  return (
    <C.InputText>
      <div>
        
         { props.User ? <FaUser color="white" size={20} />: "" }
         { props.Password ? <FaLock color="white" size={20} />: "" }
         { props.Email ? <FaEnvelope color="white" size={20} />: "" }
         
      
        
     
        
      </div>
      <input
        required={true}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type={props.Type}
        placeholder={props.placeholder}
      />
    </C.InputText>
  );
}

export default Input;
