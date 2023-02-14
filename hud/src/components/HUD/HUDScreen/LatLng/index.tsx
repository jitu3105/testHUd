import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./classes.module.css";

const Index: React.FC<{ data: any }> = ({ data }) => {
  const containerRef = useRef<any>();
  const [containerWidth, setContainerWidth] = useState<number>();
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  useEffect(() => {
    if (data.lat) {
      setLat(String(data.lat));
      setLng(String(data.lng));
    }
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [data]);
  // const data=useSelector((state:any)=>state.missions.droneStats)
  // if(data.length>0&&data[0].lat && data[0].lng){
  //   return (
  //     <div className={classes.locationContainer}>
  //       {String(data[0].lat).split(".")[0]}.
  //       {String(data[0].lat).split(".")[1].slice(0, 2)},
  //       {String(data[0].lng).split(".")[0]}.
  //       {String(data[0].lng).split(".")[1].slice(0, 2)}
  //       {/* {String(data[0].lat).split(".")[1].slice(0, 2)} */}
  //     </div>
  //   );
  // }
  return (
    <div
      ref={containerRef}
      className={classes.locationContainer}
      style={containerWidth ? { fontSize: `${containerWidth /8}px` } : {}}
    >
      {lat},{lng}
    </div>
  );
};

export default Index;
