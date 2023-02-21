import React from "react";
import classNames from "../../styles/components/navbar.module.scss";

//assets
import whitelogo from "../../assets/images/logowhite.svg";

const Navbar = () => {
  return (
    <div className={classNames.navbar}>
      <div className={classNames.logoDiv}>
        <img src={whitelogo} alt="whitelogo" />
      </div>
      <div className={classNames.accountsDiv}>
        <div>Login</div>
        <div>Signup</div>
      </div>
    </div>
  );
};

export default Navbar;
