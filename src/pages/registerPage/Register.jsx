import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { getTolocalStorage, saveToLocalStorage } from "../../data/localstorage";

const Register = () => {
  const navigate = useNavigate();

  const [isName, setIsName] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isPhone, setIsPhone] = useState("");

  const userArr =
    getTolocalStorage("users") === null ? [] : getTolocalStorage("users");

  //validate
  const validateForm = () => {
    //check email dup
    const checkEmail = () => {
      if (userArr.length === 0) {
        return false;
      } else {
        const duplicate = userArr.filter((arr) => arr.emmail === isEmail);
        if (duplicate.length === 0) {
          return false;
        } else {
          return true;
        }
      }
    };
    //check input
    if (
      isName === "" ||
      isEmail === "" ||
      isPassword === "" ||
      isPhone === ""
    ) {
      alert("vui long nhap day du thong tin");
      return false;
    }
    if (isPassword.length < 8) {
      alert("password bat buoc phai 8 ki tu tro len!");
      return false;
    }
    if (checkEmail()) {
      alert("trung Email!!!");
      return false;
    }
    return true;
  };

  //get input value
  const inputChangeHandler = (e) => {
    if (e.target.id === "name") {
      setIsName(e.target.value);
    } else if (e.target.id === "email") {
      setIsEmail(e.target.value);
    } else if (e.target.id === "password") {
      setIsPassword(e.target.value);
    } else if (e.target.id === "phone") {
      setIsPhone(e.target.value);
    }
  };

  //submit
  const submitHandler = (e) => {
    console.log("e :>> ", e);
    e.preventDefault();
    if (validateForm()) {
      const dataUser = {
        name: isName,
        email: isEmail,
        password: isPassword,
        phone: isPhone,
      };
      console.log("dataUser :>> ", dataUser);
      userArr.push(dataUser);
      saveToLocalStorage("users", userArr);
      setIsName("");
      setIsEmail("");
      setIsPassword("");
      setIsPhone("");
      navigate("/login");
    }
  };

  //render
  return (
    <div className="wapperRegister">
      <form onSubmit={submitHandler}>
        <div className="formRegister">
          <h4>Sign Up</h4>
          <div>
            <input
              id="name"
              type="text"
              value={isName}
              onChange={inputChangeHandler}
              placeholder="Full Name"
            />
            <input
              style={{ borderTop: "none" }}
              id="email"
              type="text"
              value={isEmail}
              onChange={inputChangeHandler}
              placeholder="Email"
            />
            <input
              style={{ borderTop: "none" }}
              id="password"
              type="password"
              value={isPassword}
              onChange={inputChangeHandler}
              placeholder="Password"
            />
            <input
              style={{ borderTop: "none" }}
              id="phone"
              type="text"
              value={isPhone}
              onChange={inputChangeHandler}
              placeholder="Phone"
            />
          </div>
          <button type="submit">SIGN UP</button>
          <div className="formRegisterClick">
            <span>Login?</span>
            <Link className="formRegisterLink" to={"/login"}>
              {" "}
              Click
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
