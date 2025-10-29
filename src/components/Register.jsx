export const Register = () => {
  return (
    <div>
      <form action="#">
        <input type="text" placeholder="Username" required/>
        <input type="email" placeholder="Email" required/>
        <input type="password" placeholder="Password" required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};
