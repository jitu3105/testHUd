import React from "react";
import classes from "./classes.module.css";
import hudImage from "../../Assets/huds/hudimage.jpeg";

import MiniMap from "./MiniMap";
const index: React.FC<{ map: google.maps.Map; setMap: any }> = ({
  map,
  setMap,
}) => {
  return (
    <div className={classes.HUDContainer}>
      <div className={classes.HUD}>
        <img src={hudImage} alt="" className={classes.hudimage} />
        <MiniMap />
      </div>
    </div>
  );
};

export default index;
