const {Server}=require("socket.io")
const express=require("express")
const cors=require("cors")
const app=express();

app.use(cors({origin:"*"}))

const httpServer=app.listen(3000,()=>{console.log("running on port 3000")})

const io=new Server(httpServer,{cors:{origin:"*"}})






io.on("connect",(socket)=>{
console.log(socket)


const Redis = require("ioredis");
const redis = new Redis({
    host: "139.84.166.41",
    port: 6379,
  });

  

  redis.on("connect", () => {
    let throttlePause;

    const throttle = (callback, time) => {
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
    redis.on("message", async (channel, message) => {
      throttle(() => {
        // console.log(message);
        let parsedData = "";
        try {
          parsedData = JSON.parse(message);
        } catch (err) {
          console.log(err.message);
        }
        console.log(parsedData);
        if (parsedData.lat || parsedData.heading) {
          socket.emit(`droneMoved`, {
            message: {
              message: parsedData,
              socketstring: `63ea209aae1a760ee84b2380_${channel}`,
            },
            
          });
        } else {
          socket.emit(`droneStats`, {
            message: {
              message: parsedData,
              socketstring: `63ea209aae1a760ee84b2380_${channel}`,
            },
            
          });
        }
      }, 50);

      // console.log(`Received ${message} from ${channel}`);
    });

    redis.subscribe("6384a284eb99ea2bf400d331", (err, count) => {
      if (err) {
        // Just like other commands, subscribe() can fail for some reasons,
        // ex network issues.
        console.error("Failed to subscribe: %s", err.message);
      } else {
        // `count` represents the number of channels this client are currently subscribed to.
        console.log(
          `Subscribed successfully! This client is currently subscribed to ${count} channels `
        );
      }
    });
  });

  redis.on("error", (error) => {
    console.log(error);
    console.log("Redis connection error :", error);
  })

})