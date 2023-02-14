import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
const HorizonLine: React.FC<{ data: any }> = ({ data }) => {
  const [pitch, setPitch] = useState<number>(0);
  const [roll, setRoll] = useState<number>(0);
  useEffect(() => {
    if (data && data.ATTITUDE && data.ATTITUDE.pitch) {
      //    console.log("Pictch", data[0].ATTITUDE.pitch);
      //    console.log("yaw", data[0].ATTITUDE.yaw);
      //    console.log("roll", data[0].ATTITUDE.roll);
      // setPitch(1);
      setPitch(data.ATTITUDE.pitch);
    }
    if (data && data.ATTITUDE && data.ATTITUDE.roll) {
      setRoll(data.ATTITUDE.roll * -1);
    }
  }, [data]);
  return (
    <div className={classes.horizonlineContainer}>
      <div
        className={classes.horizonline}
        style={{
          top: `${((pitch / 180) * 100) / 2}%`,
          transform: `rotate(${roll}deg)`,
        }}
      ></div>
    </div>
  );
};

export default HorizonLine;
