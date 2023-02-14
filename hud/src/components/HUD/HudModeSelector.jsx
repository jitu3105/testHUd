import React, { useState } from "react";
import { NumberInputDown } from "../../assets/Icons";
import classes from "./style.module.css";
const HudModeSelector= ({ selected, options, setSelected }) => {
  const [state, setState] = useState<boolean>(false);
  return (
    <button
      className={classes.HudLayoutFilter}
      onBlur={() => {
        // setState(false);
      }}
    >
      <div
        className={classes.filterButton}
        onClick={() => {
          setState(true);
        }}
      >
        {selected.icon}
        <NumberInputDown />
      </div>
      <div
        className={`${classes.filterList} ${state && classes.activeFilterList}`}
      >
        {options.map((opt) => (
          <div
            onClick={() => {
              // console.log("asdasdasd");
              setState(false);
              setSelected(opt);
            }}
          >
            {opt.icon}
            <p>{opt.name}</p>
          </div>
        ))}
      </div>
    </button>
  );
};

export default HudModeSelector;
