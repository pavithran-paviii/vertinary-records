import React, { useContext } from "react";
import { GlobalContext } from "../../context/Globalcontext";
import classNames from "../../styles/pages/home/landingcontainer.module.scss";

//assets
import logowhite from "../../assets/images/logowhite.svg";

const LandingContainer = () => {
  const { containerHeight, setContainerHeight } = useContext(GlobalContext);
  return (
    <div
      className={classNames.landingContainer}
      style={{ height: containerHeight }}
    >
      <div className={classNames.landingCircle}>
        <div>Manage records</div>
        <img src={logowhite} alt="logowhite" />
        <div>at ease</div>
      </div>
    </div>
  );
};

export default LandingContainer;
