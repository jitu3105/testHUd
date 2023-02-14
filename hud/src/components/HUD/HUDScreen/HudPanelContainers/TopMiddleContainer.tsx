import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import classes from "./styles.module.css";
import GimbleHorizontalScale from "../GimbleHorizontalScale";
const TopMidileContainer: React.FC<{ data: any }> = ({ data }) => {
 
  return (
    <div className={classes.topMiddleContainer}>
      <GimbleHorizontalScale data={data}/>
    </div>
  );
};

export default TopMidileContainer;
