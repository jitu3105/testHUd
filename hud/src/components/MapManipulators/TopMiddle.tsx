import React, { ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import classes from "./styles.module.css";

// const TopMiddle=ReactDOM.createPortal(child, container);
// ReactDOM.createPortal(child, container);
const TopMiddle: React.FC<{ children: ReactNode }> = ({ children }) => {
  // useEffect(()=>{
  const elRef = useRef<HTMLElement | null>(null);
  if (!elRef.current)
    elRef.current = document.getElementById("topmiddlemanipulator");

  // },[])
  if (elRef.current) return ReactDOM.createPortal(children, elRef.current);

  return <></>;
};

export default TopMiddle;
