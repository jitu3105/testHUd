import { useEffect, useState } from "react";
import "./App.css";
import socket from "socket.io-client";
import Hud from "./components/HUD/Hud";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { updateDroneState } from "./redux/features/app/appSlice";
import { useDispatch } from "react-redux";
function App() {
  const [sockett, setSockett] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!sockett) {
      const temp = socket.connect("http://localhost:3000");
      setSockett(temp);
    } else {
      sockett.on("droneMoved", async (ack) => {
        // console.log(ack);

        dispatch(updateDroneState(ack.message));
      });
      sockett.on("droneStats", async (ack) => {
        dispatch(updateDroneState(ack.message));

        // console.log(ack);
      });
    }
  }, [sockett]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Hud />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
