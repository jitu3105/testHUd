import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import classes from "./styles.module.css";
import { GimbalScalePin } from "../../../../assets/Icons";
const GimbleHorizontalScale: React.FC<{ data: any }> = ({ data }) => {
  const sliderRef: any = useRef();

  const [meter, setmeter] = useState([]);
  const [state, setState] = useState(0);
  const [containerWidth, setContainerWidth] = useState<number>();
  const containerRef = useRef<any>();
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 10,
    slidesToShow: containerWidth
      ? containerWidth > 100
        ? containerWidth / 64
        : containerWidth
      : 30,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
  };
  useEffect(() => {
    var foo: any = [];
    for (var i = 0; i <= 355; i += 5) {
      foo.push(i);
    }
    setmeter(foo);
    console.log(foo.length);
    // setInterval(() => {
    //   const val = Math.floor(Math.random() * foo.length);

    //   setState(val);
    // }, 5000);
  }, []);
  if (sliderRef.current) {
    sliderRef.current.slickGoTo(state / 5);
  }

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

  const updateHeading = () => {
    if (data && data.heading) {
      setState(Number(data.heading));
    }
  };

  useEffect(() => {
    throttle(updateHeading, 50);
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [data]);

  return (
    <div className={classes.gimblascaleContainer} ref={containerRef}>
      <Slider {...settings} ref={sliderRef}>
        {meter.map((num, idx) =>
          num % 2 == 0 ? (
            <div>
              <div key={idx} className={classes.scale}>
                <h3
                  style={
                    containerWidth
                      ? { fontSize: `${containerWidth / 40}px` }
                      : {}
                  }
                >
                  {num == 0 ? "N" : num}
                </h3>
              </div>
            </div>
          ) : (
            <div>
              <div key={idx} className={classes.scale}>
                <h3
                  style={
                    containerWidth
                      ? { fontSize: `${containerWidth / 40}px` }
                      : {}
                  }
                >
                  |
                </h3>
              </div>
            </div>
          )
        )}
      </Slider>
      <div className={classes.Pin}>
        <GimbalScalePin />
        {/* <p>

        {state}
        </p> */}
      </div>
    </div>
  );
};

export default GimbleHorizontalScale;
