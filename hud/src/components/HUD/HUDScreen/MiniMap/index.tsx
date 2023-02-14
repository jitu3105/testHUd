import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import mapImage from "../../../Assets/huds/mapimage.jpeg";
// import { setHUDView } from "../../../Redux/app/Actions/appActions";
import classes from "./styles.module.css";
import droneIconBase from "../../../../assets/images/droneIcon.svg";
import { MiniMapBackIcon } from "../../../../assets/Icons";

// import droneIconBase from "../../../../Assets/images/droneIcon.svg";
// import droneIconBase from "../../../Assets/images/droneIconBase.svg";
// import droneIcon from "../../../Assets/images/droneIcon.svg";
const Index: React.FC<{ data: any }> = ({ data }) => {
  const dispatch = useDispatch();
  const [map, setMap] = useState<any>();
  const [droneMarker, setDroneMarker] = useState<any>();
  const [droneMarkerIcon, setDroneMarkerIcon] = useState<any>();
  const ref: any = useRef();
  const droneIcon = {
    path: "M19.7049 1.0825L10.1049 19.0659L0.183207 0.498289L9.64375 4.4149L19.7049 1.0825Z",
    fillColor: "#fff",
    strokeWeight: 0,
    fillOpacity: 1,
    anchor: new google.maps.Point(10, 8),
    scaledSize: new google.maps.Size(55, 55),
    zIndex: 5,
    rotation: 180,
  };

  useEffect(() => {
    const DroneIconBase = {
      url: droneIconBase,
      anchor: new google.maps.Point(27.5, 28.5),
      scaledSize: new google.maps.Size(55, 55),
    };

    const tempMap = new window.google.maps.Map(ref.current, {
      center: { lat: 28.559885, lng: 77.102536 },
      zoom: 14,
      mapId: "e01784bfd2c79a72",
      controlSize: 30,
      heading: 0,
      tilt: 0,
      disableDoubleClickZoom: true,
      fullscreenControl: false,
      keyboardShortcuts: false,
      panControl: false,
      scrollwheel: true,
      zoomControl: false,
      clickableIcons: false,
      streetViewControl: false,
      // gestureHandling: "cooperative",
      gestureHandling: "none",
      mapTypeControl: false,
      disableDefaultUI: true,
    });
    const markerBase = new window.google.maps.Marker({
      map: tempMap,
      icon: DroneIconBase,
    });
    const markerIcon = new window.google.maps.Marker({
      map: tempMap,
      icon: droneIcon,
      zIndex: 5,
    });
    setDroneMarker(markerBase);
    setDroneMarkerIcon(markerIcon);
    console.log(tempMap);
    setMap(tempMap);
  }, []);
  const deleteHUD = () => {
    // dispatch(setHUDView(false));
  };

  // const drones = useSelector((data: any) => data.missions.droneStats);

  // useEffect(() => {
  //   // console.log("asdas");
  //   // console.log(drones.length);
  //   // console.log(map);

  //   // const droneMarker = new window.google.maps.Marker({
  //   //   map: map,
  //   //   icon: DroneIconBase,
  //   // });
  //   if (drones.length > 0 && map && droneMarker && droneMarkerIcon) {
  //     console.log(droneMarker);
  //     const drone = drones[0];
  //     console.log(drone);
  //     console.log(drone.lat);
  //     console.log(drone.lng);
  //     map.setCenter({ lat: drone.lat, lng: drone.lng });
  //     map.setZoom(20);
  //     droneMarker.setPosition({ lat: drone.lat, lng: drone.lng });
  //     droneMarkerIcon.setPosition({ lat: drone.lat, lng: drone.lng });
  //     // console.log(180 + Number(drone.heading));
  //     // droneMarkerIcon.icon.rotation = String(180 + Number(drone.heading));
  //     // droneMarkerIcon.setIcon(droneMarker.icon);
  //   }

  //   // droneMarker.setMap(null);
  // }, [drones]);
  let throttlePause: boolean;

  const throttle = (callback: Function, time: number) => {
    //don't run the function if throttlePause is true
    if (throttlePause) return;
    //set throttlePause to true after the if condition. This allows the function to be run once
    throttlePause = true;

    //setTimeout runs the callback within the specified time
    setTimeout(() => {
      callback();

      //throttlePause is set to false once the function has been called, allowing the throttle function to loop
      throttlePause = false;
    }, time);
  };
  const updateMiniMap = () => {
    if (data && data.lat) {
      map.setCenter({ lat: data.lat, lng: data.lng });
      droneMarker.setPosition({ lat: data.lat, lng: data.lng });
      droneMarkerIcon.setPosition({ lat: data.lat, lng: data.lng });
    }
    if (data && data.heading) {
      map.setHeading(data.heading);
    }
    // alert("asdasd");
  };
  useEffect(() => {
    throttle(updateMiniMap, 50);
  }, [data]);

  return (
    <div className={classes.MiniMapContainer}>
      <div className={classes.miniMap}>
        <div ref={ref} className={classes.actualmap}></div>
        <div className={classes.backIcon} onClick={deleteHUD}>
          <MiniMapBackIcon />
        </div>
      </div>
      {/* <img src={mapImage} alt="" className={classes.mapImage} /> */}
    </div>
  );
};

export default Index;
