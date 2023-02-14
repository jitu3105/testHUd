import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { SatelliteIcon } from "../../../../assets/Icons";
import classes from "./styles.module.css";
const Index: React.FC<{ data: any }> = ({ data }) => {
  const [hdop, setHdop] = useState(0);
  const [numSats, setNumSats] = useState(0);
  const ContainerRef = useRef<any>();
  const [constainerWidth, setContainerWidth] = useState<number>();
  // const data=useSelector((state:any)=>state.missions.droneStats)
  useEffect(() => {
    if (data && data.num_sats) {
      setNumSats(Number(data.num_sats));
    }
    if (data && data.EPH) {
      const dta = Number(data.EPH) / 100;
      setHdop(dta);
    }
    if (ContainerRef.current) {
      // console.log(ContainerRef.current.offsetWidth);
      setContainerWidth(ContainerRef.current.offsetWidth);
    }
  }, [data]);

  return (
    <div className={classes.sateliteContainer} ref={ContainerRef}>
      <div className={classes.iconContainer}>
        <SatelliteIcon />
      </div>
      <div className={classes.textContainer}>
        <p
          className={classes.large}
          style={
            constainerWidth ? { fontSize: `${constainerWidth / 4}px` } : {}
          }
        >
          {numSats}
          {/* {data && data.length > 0 && data[0].num_sats
            ? data && data.length > 0 && data[0].num_sats
            : "---"} */}
        </p>
        <p
          className={classes.small}
          style={
            constainerWidth ? { fontSize: `${constainerWidth / 8}px` } : {}
          }
        >
          {/* {data.length > 0 && data[0].eph
            ? data.length > 0 && data[0].eph / 100
            : "---"}{" "} */}
          {hdop ? hdop : "HDOP"}
        </p>
      </div>
    </div>
  );
};

export default Index;
