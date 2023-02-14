import React, { useEffect, useRef, useState } from "react";
import classes from "./styles.module.css";
const Index: React.FC<{
  number: any;
  heading: string;
  unit: string;
  left?: boolean;
  right?: boolean;
}> = ({ number, unit, heading, left, right }) => {
  const containerRef = useRef<any>();
  const [containerWidth, setContainerWidth] = useState<any>();
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [number]);
  return number !== undefined ? (
    <div
      ref={containerRef}
      className={classes.HeightContainer}
      style={right ? { justifyContent: "flex-end" } : {}}
    >
      <section className={classes.section}>
        <p
          className={classes.heightNumber}
          style={containerWidth ? { fontSize: `${containerWidth / 4}px` } : {}}
        >
          {number.split(".")[0]}
          {/* . */}
          {/* {number.split(".")[1] && number.split(".")[1].slice(0, 2)} */}
        </p>
        <section className={classes.nameAndUnit}>
          <p
            style={
              containerWidth ? { fontSize: `${containerWidth / 9}px` } : {}
            }
          >
            {heading}
          </p>
          <p
            className={classes.Unit}
            style={
              containerWidth ? { fontSize: `${containerWidth / 9}px` } : {}
            }
          >
            {unit}
          </p>
        </section>
      </section>
    </div>
  ) : (
    <></>
  );
};

export default Index;
