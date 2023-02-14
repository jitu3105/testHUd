import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./styles.module.css";
const Index: React.FC<{ data: any }> = ({ data }) => {
  const containerRef = useRef<any>();
  const [containerWidth, setContainerWidth] = useState<any>();
  const [thrust, setThrust] = useState<number>(0);

  //  const data = useSelector((state: any) => state.missions.droneStats);
  //  if (data.length > 0 &&  Object.keys(data[0]).includes("THRUST")) {
  //    return (
  //      <div className={classes.thrustContainer}>THR {data[0].THRUST}%</div>
  //    );
  //  }
  useEffect(() => {
    console.log(data);
    if (data && data.THRUST) {
      setThrust(thrust);
    }
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [data]);
  return (
    <div
      ref={containerRef}
      className={classes.thrustContainer}
      style={containerWidth ? { fontSize: `${containerWidth /18}px` } : {}}
    >
      THR {thrust !== undefined ? thrust : "---"}%
    </div>
  );
};

export default Index;
