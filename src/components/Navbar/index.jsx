import React from "react";
import classNames from "../../styles/components/navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classNames.navbar}>
      <div></div>
      <div>
        <div>Login</div>
        <div>Signup</div>
      </div>
    </div>
  );
};

export default Navbar;
