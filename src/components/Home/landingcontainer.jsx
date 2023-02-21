import React, { useContext } from "react";
import { GlobalContext } from "../../context/Globalcontext";
import classNames from "../../styles/pages/home/landingcontainer.module.scss";

const LandingContainer = () => {
  const { containerHeight, setContainerHeight } = useContext(GlobalContext);
  return (
    <div
      className={classNames.landingContainer}
      style={{ height: containerHeight }}
    >
      Landing container
    </div>
  );
};

export default LandingContainer;
