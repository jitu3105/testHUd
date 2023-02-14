import React, { useEffect, useState } from "react";
import classes from "./classes.module.css";

// import MiniMap from "./MiniMap";
import RightHudPanel from "./HudPanelContainers/RightHudPanel";
import LeftHudPanel from "./HudPanelContainers/LeftHudPanel";
import TopMidileContainer from "./HudPanelContainers/TopMiddleContainer";
// import axios from "axios";
// import { HudCenter } from "../../Assets/Svg";
import { HudCenter } from "../../../assets/Icons";

import { useAppSelector } from "../../../redux/hooks";

import HorizonLine from "./HorizonLine/HorizonLine";
import VideoFeed from "./VideoFeed/VideoFeed";

const Index = ({ id, setActiveScreenId, setSelected, selected, options }) => {
  const DronesData = useAppSelector((state) => state.app.droneStats);
  const [drone, setDrone] = useState({});

  useEffect(() => {
    const thisDrone = DronesData?.filter((drn) => drn.droneId === id);
    if (thisDrone && thisDrone.length > 0) {
      // console.log(thisDrone[0]);
      setDrone(thisDrone[0]);
    }
  }, [DronesData]);

  return (
    <div
      className={classes.HUDContainer}
      onDoubleClick={() => {
        setSelected(options[0]);
        setActiveScreenId(id);
      }}
    >
      <div className={classes.HUD}>
        <VideoFeed />
        {/* <embed
          src="http://139.84.166.41:3000"
          // src="http://139.84.166.41:8000/stream_viewer?topic=/v4l/camera/image_raw"
          className={classes.embed}
        /> */}
        <div className={classes.blackshade}></div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <HudCenter />
        </div>
        <LeftHudPanel data={drone} />
        <TopMidileContainer data={drone} />
        <RightHudPanel
          data={drone}
          selectedName={selected.name}
          setSelected={setSelected}
          options={options}
        />
        <HorizonLine data={drone} />
        {/* {selected && selected.name === "Single view" && (
          <MiniMap data={drone} />
        )} */}
      </div>
    </div>
  );
};

export default Index;
