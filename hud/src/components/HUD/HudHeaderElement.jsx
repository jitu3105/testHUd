import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CoppyTextIcon, TimesIcon } from "../../assets/Icons";
import classes from "./style.module.css";

const HudHeaderElement= ({ id, active, setActiveScreenId }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const onCross = () => {
    const arr = location.pathname
      .split("/")
      [location.pathname.split("/").length - 1].split("+");
    const origin = location.pathname
      .split("/")
      .splice(0, location.pathname.split("/").length - 1)
      .join("/");
    const index = location.pathname
      .split("/")
      [location.pathname.split("/").length - 1].split("+")
      .indexOf(id);
    if (arr.length > 1) {
      arr.splice(index, 1);
      console.log(arr);
      navigate(`${origin}/${arr.join("+")}`);
    } else {
      navigate(`${origin}`);
    }
  };
  return (
    <div
      className={`${classes.HudHeaderElementContainer} ${
        active && classes.HudHeaderElementContainerActive
      }`}
      onClick={() => {
        if (!active) {
          setActiveScreenId(id);
        }
      }}
    >
      <div
        title={active ? "click to coppy url" : ""}
        onClick={() => {
          if (active) {
            const temp = location.pathname
              .split("/")
              .splice(0, location.pathname.split("/").length - 1)
              .join("/");
            window.open(
              window.location.origin + `${temp}/${id}`,
                "_blank",
              "toolbar=1,location=1,menubar=1"
            );

            navigator.clipboard.writeText(
              `${window.location.origin}${temp}/${id}`
            );
          }
        }}
      >
        <CoppyTextIcon />
      </div>
      Drone ID {id}
      {active && (
        <section onClick={onCross}>
          <TimesIcon />
        </section>
      )}
    </div>
  );
};

export default HudHeaderElement;
