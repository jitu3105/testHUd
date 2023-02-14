export const throttleHelper = (callback: Function, time: number) => {
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

  throttle(callback, time);
};
