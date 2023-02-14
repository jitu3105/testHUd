import React from "react";

const Logo = () => {
  return (
    <svg
      width="150"
      height="37"
      viewBox="0 0 150 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: "100%", height: "100%",objectFit:"cover" }}
    >
      <rect
        x="0.091156"
        y="0.287109"
        width="149.705"
        height="36.6367"
        fill="url(#pattern0)"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_4674_35099"
            transform="scale(0.0021097 0.00862069)"
          />
        </pattern>
        <image
          id="image0_4674_35099"
          width="474"
          height="116"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Logo;
