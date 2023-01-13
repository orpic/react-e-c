import React from "react";
//eslint-disable-next-line
import classes from "./FilterSubHead.module.css";

const FilterSubHead = ({ subHead, getList, onCheckCallback }) => {
  return (
    <div className={classes.subHead}>
      <p className={classes.filterSubHeading}>{subHead}</p>
      <div className={classes.leftMargin}>
        {getList.map((eachItem) => (
          <label key={eachItem.value} className={classes.container}>
            {eachItem.value}
            <input
              type="checkbox"
              value={eachItem.value}
              checked={eachItem.checkState}
              onChange={onCheckCallback}
            />
            <span className={classes.checkmark}></span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSubHead;
