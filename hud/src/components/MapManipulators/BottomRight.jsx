import React from "react";
import { LocationIcon, ZoomInIcon, ZoomOutIcon } from "../../assets/Icons";
import SetMyLocation from "../SetMyLocation/SetMyLocation";
import TiltAndRotate from "../TiltAndRotate/TiltAndRotate";
import ZoomEditor from "../ZoomEditor/ZoomEditor";
import classes from "./styles.module.css";
const BottomRight: React.FC<{ map: google.maps.Map }> = ({ map }) => {
  return (
    <div className={classes.bottomRightContainer}>
      <TiltAndRotate map={map} />
      <SetMyLocation map={map} />
      <ZoomEditor map={map} />
    </div>
  );
};

export default BottomRight;
