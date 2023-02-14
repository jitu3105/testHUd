import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import HudScreen from "./HUDScreen/index";
import classes from "./style.module.css";
import {
  HudFilterFullscreen,
  HudFilterGrid,
  NumberInputDown,
  TiltDown,
} from "../../assets/Icons";
import HudContainer from "../MapManipulators/HudContainer";
import HudHeaderElement from "./HudHeaderElement";
import { useAppDispatch } from "../../redux/hooks";
import { setHideSideNav } from "../../redux/features/app/appSlice";
import HudModeSelector from "./HudModeSelector";
const Hud = () => {
  // const { links } = useParams();
  // console.log(links);

  const options = [
    { icon: <HudFilterFullscreen />, name: "Single view" },
    { icon: <HudFilterGrid />, name: "Grid view" },
  ];

  // console.log(typeof options);

  const [selected, setSelected] = useState();
  // const [state, setState] = useState(false);
  const location = useLocation();
  const [activeScreenId, setActiveScreenId] = useState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      location.pathname
        .split("/")
        [location.pathname.split("/").length - 1].includes("HUD")
    ) {
      console.log(options[0]);

      if (!selected) {
        setSelected(options[0]);
      }

      if (!activeScreenId) {
        setActiveScreenId(
          location.pathname
            .split("/")
            [location.pathname.split("/").length - 1].split("=")[1]
            .split("+")[0]
        );
      }

      if (
        location.pathname
          .split("/")
          [location.pathname.split("/").length - 1].split("=")[1]
          .split("+").length -
          1 >
        0
      ) {
        setSelected(options[1]);
      }

      dispatch(setHideSideNav(true));
    }
  }, []);
  // const [map, setMap] = useState<google.maps.Map>();
  console.log(
    location.pathname.split("/")[location.pathname.split("/").length - 1]
  );

  useEffect(() => {
    if (
      location.pathname
        .split("/")
        [location.pathname.split("/").length - 1].includes("HUD") &&
      location.pathname
        .split("/")
        [location.pathname.split("/").length - 1].split("=")[1]
        .split("+").length <= 1
    ) {
      setSelected(options[0]);
    } else {
      setSelected(options[1]);
    }
  }, [location]);

  console.log(
    location.pathname
      .split("/")
      [location.pathname.split("/").length - 1].includes("HUD")
  );
  // alert(activeScreenId);
  return (
    <>
      {location.pathname
        .split("/")
        [location.pathname.split("/").length - 1].includes("HUD") ? (
        // <HudContainer>
        <div className={classes.HudContainer}>
          <div
            style={{
              gridTemplateColumns: `repeat(
              ${
                location.pathname
                  .split("/")
                  [location.pathname.split("/").length - 1].split("=")[1]
                  .split("+").length <= 3
                  ? location.pathname
                      .split("/")
                      [location.pathname.split("/").length - 1].split("=")[1]
                      .split("+").length
                  : location.pathname
                      .split("/")
                      [location.pathname.split("/").length - 1].split("=")[1]
                      .split("+").length === 4
                  ? 2
                  : 3
              }
                    , 1fr)`,
            }}
            className={
              selected && selected.name === "Grid view"
                ? classes.HudGridScreen
                : classes.HudScreen
            }
          >
            {selected && selected.name === "Single view" && selected && (
              <HudScreen
                setActiveScreenId={setActiveScreenId}
                setSelected={setSelected}
                selected={selected}
                options={options}
                id={
                  location.pathname
                    .split("/")
                    [location.pathname.split("/").length - 1].split("=")[1]
                    .split("+")[0]
                }
              />
            )}
            {selected &&
              selected.name === "Grid view" &&
              location.pathname
                .split("/")
                [location.pathname.split("/").length - 1].split("=")[1]
                .split("+")
                .map((element) => (
                  <>
                    <HudScreen
                      id={element}
                      setSelected={setSelected}
                      selected={selected}
                      options={options}
                      setActiveScreenId={setActiveScreenId}
                    />
                  </>
                ))}
          </div>
        </div>
      ) : (
        // </HudContainer>
        <></>
      )}
    </>
  );
};

export default Hud;
