import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import '../assets/style/loginpage.scss'

const LoginPage = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); //otomatik refreshi önlesin diye yazdım.
    try {
      await login(user, password);
      toast.success('Login success!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
      navigate("/");
    } catch (error) {
      toast.error("Login failed!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      setUser("");
      setPassword("");
    }
  };

  return (
    <div className="login-page">
      <div className="head">
        
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <h3>Login</h3>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <input type="submit" value={"Giriş"} />
        <Link to="/">Continue as Guest</Link>
      </form>
    </div>
  );
};

export default LoginPage;
