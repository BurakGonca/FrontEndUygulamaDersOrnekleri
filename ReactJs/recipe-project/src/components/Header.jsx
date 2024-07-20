import React, { useContext, useEffect, useState } from "react";
import "../assets/style/header.scss";
import Logo from "../assets/img/logo.png";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaUserLock } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("");

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const getCurrentUser = async () => {
    const url = "https://api.escuelajs.co/api/v1/auth/profile";
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).access_token
        }`,
      },
    });
    const user = await response.data;
    console.log(user);
    setCurrentUser(user);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      getCurrentUser();
    }
  }, []);

  return (
    <>
      <nav className="header-container">
        <div className="brand">
          <img src={Logo} alt="" />
          <h3>Recipe Platform</h3>
        </div>
        <ul className="liste">
          <li>
            <NavLink to="main">Home</NavLink>
          </li>
          {currentUser && isAuthenticated && (
            <li>
              <NavLink className="navLink" to="forms">
                Add Recipe
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to="recipelist">All Recipes</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
          <li>
            <NavLink
              onClick={isAuthenticated ? handleLogout : handleLogin}
              className="navLink"
              to="login"
            >
              {isAuthenticated ? <FaUserCheck /> : <FaUserLock />}
            </NavLink>
          </li>
          {currentUser && isAuthenticated && (
            <div className="user-info">
              <img
                src={currentUser.avatar}
                alt="User"
                className="user-avatar"
              />
              <div className="user-details">
                <span className="user-email">{currentUser.email}</span>
                <span className="user-role">{currentUser.role}</span>
              </div>
            </div>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
