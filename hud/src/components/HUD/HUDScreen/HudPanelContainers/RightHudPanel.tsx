import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import GreenText from "../GreenText";
import SideWhiteText from "../SideWhiteText";
import {
  BatteryIcon2,
  HudFilterGrid,
  LTESignalIcon,
  RFSignalIcon,
} from "../../../../assets/Icons";
import { useSelector } from "react-redux";
const RightHudPanel: React.FC<{
  data: any;
  selectedName: string;
  options: any;
  setSelected: any;
}> = ({ data, selectedName, options, setSelected }) => {
  const [msl, setMsl] = useState("---");
  const [agl, setAgl] = useState("---");
  useEffect(() => {
    if (data && data.alt) {
      setAgl(data.alt);
      // alert(data.heading);
    }
    if (data && data.height) {
      setMsl(data.height);
      // alert(data.heading);
    }
  }, [data]);
  // const data = useSelector((state: any) => state.missions.droneStats);
  // useEffect(() => {
  //   if (data.length > 0 && data[0].alt) {
  //     setAgl(data[0].alt);
  //   }
  //   if (data.length > 0 && data[0].height) {
  //     setMsl(data[0].height);
  //   }
  // }, [data]);
  // if(Object.keys.data.height)
  return (
    <>
      <div className={classes.rightTopContainer}>
        <LTESignalIcon />
        <RFSignalIcon />
        <BatteryIcon2 battery={50} />
        {/* {selectedName === "Single view" && (
          <div
            style={{ width: "100%", height: "100%", marginLeft: "1vh" }}
            onClick={() => {
              // alert("asdasd");
              setSelected(options[1]);
            }}
          >
            <HudFilterGrid />
          </div> 
         )} */}
        {/* <GridIcon/> */}
      </div>
      <div className={classes.rightMidContainer}>
        <GreenText heading="MSL" number={`${msl}`} unit="m" right={true} />

        <SideWhiteText heading="AGL" number={`${agl}`} unit="m" right={true} />
      </div>
    </>
  );
};

export default RightHudPanel;
