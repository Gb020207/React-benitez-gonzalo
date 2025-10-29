import { useState } from "react";

export function Form() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleForm = (event) => {
    event.preventDefault(); //Esto evita que se recarge la pagina automaticamente
    console.log("Formulario enviado", user);
  };
  const handleUsername = (event) => {
    setUser({ ...user, username: event.target.value }); //Esto deberia de tomar el valor de user al ejecutarse el Submit
  };
  const handleEmail = (event) => {
    setUser({ ...user, email: event.target.value });
  };
  const handlePassword = (event) => {
    setUser({ ...user, password: event.target.value });
  };
  
}
