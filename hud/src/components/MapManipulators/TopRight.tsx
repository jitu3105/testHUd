import React from "react";
import { MapLayersIcon, SearchIcon } from "../../assets/Icons";
import MapTypeSelector from "../MapTypeSelector/MapTypeSelector";
import SearchBtn from "../SearchLocation/SearchBtn";
import classes from "./styles.module.css";
const TopRight: React.FC<{ map: google.maps.Map }> = ({ map }) => {
  return (
    <div className={classes.topRightContainer}>
      <div
        className={`${classes.manipulatorButton} ${classes.manipulatorButtonMargin}`}
      >
        <SearchBtn map={map} />
      </div>
      <div
        className={`${classes.manipulatorButton} ${classes.manipulatorButtonMargin}`}
      >
        <MapTypeSelector map={map} />
      </div>
      
    </div>
  );
};

export default TopRight;
