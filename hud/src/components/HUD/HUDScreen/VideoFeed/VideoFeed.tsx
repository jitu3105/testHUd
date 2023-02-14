import React, { useEffect, useRef } from "react";
import classes from "./styles.module.css";
import { io } from "socket.io-client";
import * as mediasoup from "mediasoup-client";
const VideoFeed = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  let device: mediasoup.Device;
  let consumer: mediasoup.types.Consumer;
  // useEffect(() => {
  //   try {
  //   const socket = io("http://139.84.166.41:3000/mediasoup");
  //   let routerRtpCapabilities;
  //   socket.on("connect", async () => {
  //     console.log("asdasd");
  //   });
  //   socket.on("routerRtpCapabilities", async (rtpCapabilities) => {
  //     routerRtpCapabilities = rtpCapabilities;
  //     console.log(mediasoup);
  //     device = new mediasoup.Device();
  //     console.log(device);
  //     await device.load({ routerRtpCapabilities });
  //     console.log(device);
  //     socket.emit("createRecvTransport");
  //   });

  //   socket.on("recvTransportCreated", async (data) => {
  //     console.log(data);
  //     const consumerTransport = device.createRecvTransport(data);

  //     consumerTransport.on(
  //       "connect",
  //       async ({ dtlsParameters }, callback, errback) => {
  //         try {
  //           // alert("connect event launched");
  //           socket.emit("transport-recv-connect", {
  //             //   transportId: consumerTransport.id,
  //             dtlsParameters,
  //           });
  //           callback();
  //         } catch (err: any) {
  //           errback(err);
  //         }
  //       }
  //     );
  //     console.log(consumerTransport);
  //     console.log(device.rtpCapabilities);
  //     socket.emit("consume", device.rtpCapabilities);
  //     socket.on("consuming", async (params) => {
  //       console.log(params);
  //       consumer = await consumerTransport.consume({
  //         id: params.id,
  //         producerId: params.producerId,
  //         kind: params.kind,
  //         rtpParameters: params.rtpParameters,
  //       });
  //       console.log(consumer);
  //       const { track } = consumer;
  //       const remoteVideo = document.getElementById("remoteVideo");
  //       console.log(remoteVideo);
  //       const stream = new MediaStream([track]);
  //       console.log(track);
  //       console.log(stream);
  //       if (videoRef.current) {
  //         videoRef.current.srcObject = stream;
  //         videoRef.current.onloadedmetadata = () => {
  //         //   alert("asd");
  //           if (videoRef.current) videoRef.current.play();
  //         };
  //       }
  //       // console.log(await navigator.mediaDevices.getUserMedia({ video: true }));
  //       socket.emit("consumer-resume");
  //     });
  //   });
  // } catch (err) {
  //   console.log(err);
  //   alert("adasd");
  // }
  // }, []);

  return (
    <div className={classes.videoFeedContainer}>
      <video ref={videoRef} autoPlay muted></video>
    </div>
  );
};

export default VideoFeed;
