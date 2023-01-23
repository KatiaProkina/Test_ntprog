import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import "../style/LoginPage.css";
import { AuthContext } from "../context/auth";
import user from "../../newJsonUsers.json";

import { useState } from "react";
const LoginPage = () => {
  const { newUser, setNewUser } = useContext(AuthContext);
  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  const handleLogin = () => {
    const newUser = user.find((item) => item.email === valueEmail);
    if (!newUser) return;
    if (newUser.password !== valuePassword) return;
    setNewUser(newUser);
  };

  if (newUser) {
    return <Navigate to="/orders" />;
  }
  return (
    <div className="container">
      <div className="login-container">
        <form className="form-enter" action="">
          <input
            className="input"
            type="text"
            name="login"
            placeholder="Email"
            value={valueEmail}
            onChange={(e) => setValueEmail(e.target.value)}
          />
          <input
            className="input"
            type="text"
            name="password"
            placeholder="Пароль"
            value={valuePassword}
            onChange={(e) => setValuePassword(e.target.value)}
          />
          <button className="button" onClick={handleLogin}>
            ВОЙТИ
          </button>
          <Link className="login-link">Забыли пароль</Link>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
