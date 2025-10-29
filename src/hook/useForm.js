import { useState } from "react";


export function Form() {
    const [user,setUser] = useState({
        username:"",
        email:"",
        password:"",
    });

}
export const handleForm = (event) => {
 event.preventDefault() //Esto evita que se recarge la pagina automaticamente 
 console.log("Formulario enviado",user)

}
export const handleUsername = (event) => {
setUser(...user, username: event.target.value)


}