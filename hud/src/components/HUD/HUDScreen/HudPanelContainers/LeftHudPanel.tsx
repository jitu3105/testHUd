import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import GreenText from "../GreenText";
import SideWhiteText from "../SideWhiteText";
import LatLng from "../LatLng";
import Thrust from "../Thrust";
import Satellite from "../Satellite";
import { useSelector } from "react-redux";

const LeftHudPanel: React.FC<{ data: any }> = ({ data }) => {
  const [cas, setCas] = useState("---");
  const [gs, setGs] = useState("---");
  useEffect(() => {
    // console.log(data);
    if (data.speed) {
      setGs(data.speed);
    }
    if(data.airspeed_dir){
      setCas(data.airspeed_dir)
    }
  }, [data]);
  // const data = useSelector((state: any) => state.missions.droneStats);
  // useEffect(() => {
  //   if (data.length > 0 && data[0].airspeed) {
  //     setCas(data[0].airspeed);
  //   }
  //   if (data.length > 0 && data[0].speed) {
  //     setGs(data[0].speed);
  //   }
  // }, [data]);
  return (
    <>
      <div className={classes.leftTopContainer}>
        <section className={classes.row}>
          <Satellite data={data} />
          <LatLng data={data} />
        </section>
        <Thrust data={data} />
      </div>
      <div className={classes.leftMidContainer}>
        <GreenText heading="CAS" number={`${cas}`} unit="m/s" left={true} />
        <SideWhiteText heading="GS" number={`${gs}`} unit="m/s" left={true} />
      </div>
    </>
  );
};

export default LeftHudPanel;
