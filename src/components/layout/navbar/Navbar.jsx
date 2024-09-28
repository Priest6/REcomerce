import { faCartArrowDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  getTolocalStorage,
  removeTolocalStorage,
} from "../../../data/localstorage";
import { ON_LOGOUT } from "../../../redux/action";
import "./navbar.css";

const Navbar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const dataUser = getTolocalStorage("currentUserActive");
    dataUser === null ? setName("") : setName(dataUser.name);
  }, []);

  const logoutHandler = () => {
    //dispatch
    dispatch(ON_LOGOUT({ email: "", password: "" }));
    setName("");
    removeTolocalStorage("currentUserActive");
  };
  //render
  return (
    <div className="navBar">
      <nav className="row">
        <div className="col-md-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "pageLink active" : "pagesLink"
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "pageLink active" : "pagesLink"
            }
          >
            Shop
          </NavLink>
        </div>
        <div className=" col-md-4 boutique">Boutique</div>
        <div className="col-md-4">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "pageLink active" : "pagesLink"
            }
          >
            <FontAwesomeIcon icon={faCartArrowDown} /> Cart
          </NavLink>
          {name === "" ? (
            <Link className="pagesLink" to="/login">
              <FontAwesomeIcon icon={faUser} /> Login
            </Link>
          ) : (
            <Link className="pagesLink" to="">
              <FontAwesomeIcon icon={faUser} />
              <span onClick={logoutHandler}>{"" + name + " (Logout)"}</span>
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
