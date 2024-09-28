import React, { useEffect, useState } from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getTolocalStorage, saveToLocalStorage } from "../../data/localstorage";
import { ON_LOGIN } from "../../redux/action";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const userArr = getTolocalStorage("users");
    userArr === null ? setUserData([]) : setUserData(userArr);
  }, []);
  console.log(userData);

  //validate
  const validateForm = () => {
    if (isEmail === "" || isPassword === "") {
      alert("vui long nhap day du thong tin");
      return false;
    }
    if (isPassword.length < 8) {
      alert("password bat buoc phai 8 ki tu tro len!");
      return false;
    }
    return true;
  };

  //get value input
  const inputChangeHandler = (e) => {
    if (e.target.id === "email") {
      setIsEmail(e.target.value);
    } else if ((e.target.id = "password")) {
      setIsPassword(e.target.value);
    }
  };

  //submit
  const submitHandler = (e) => {
    console.log(e);
    e.preventDefault();
    if (validateForm()) {
      //check infor login
      const currentUser = userData.find(
        (user) => user.email === isEmail && user.password === isPassword
      );
      if (currentUser) {
        alert("Login Success!");
        saveToLocalStorage("currentUserActive", currentUser);
        dispatch(ON_LOGIN({ email: isEmail, password: isPassword }));
        navigate("/");
      } else {
        alert("User doesn't exist or wrong information");
        setIsPassword("");
      }
    }
  };
  //render
  return (
    <div className="wapperLogin">
      <form onSubmit={submitHandler}>
        <div className="formLogin">
          <h4>Sign In</h4>
          <div>
            <input
              id="email"
              type="text"
              value={isEmail}
              onChange={inputChangeHandler}
              placeholder="Email"
            />
            <input
              style={{ borderTop: "none" }}
              id="password"
              type="text"
              value={isPassword}
              onChange={inputChangeHandler}
              placeholder="Password"
            />
          </div>
          <button type="submit">SIGN IN</button>
          <div className="formLoginClick">
            <span> Create an acount?</span>
            <Link className="formLoginLink" to={"/register"}>
              {" "}
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
