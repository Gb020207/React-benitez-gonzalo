
export const Register = () => {
  return (
    <div>
      <form  action="#">
        <input type="text" id="username" placeholder="Username" required/>
        <input type="email" id="email" placeholder="Email" required/>
        <input type="password" id="password" placeholder="Password" required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};
