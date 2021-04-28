import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
import {FaRegUserCircle} from "react-icons/fa";

function Nav() {
  const [handleShow, setHandleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setHandleShow(true);
    } else {
      setHandleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${handleShow && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="/images/logo.png"
          alt="logo"
        />
        <FaRegUserCircle
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="/images/user.png"
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
