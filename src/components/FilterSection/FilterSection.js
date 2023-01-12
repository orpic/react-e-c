import React from "react";
// eslint-disable-next-line
import classes from "./FilterSection.module.css";

import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../store/filterSlice";

const FilterSection = () => {
  const dispatch = useDispatch();
  const colorList = useSelector((state) => state.filter.color);
  const genderList = useSelector((state) => state.filter.gender);
  const typeList = useSelector((state) => state.filter.type);
  // console.log(colorList, genderList, typeList);

  const onCheckStateChangeHandler = (event) => {
    const v = event.target.value;
    const s = event.target.checked;
    dispatch(filterActions.toggleColorFliter({ value: v, checkState: s }));

    // console.log(v, s);
    // console.log(event.target);
    // console.log(event);
  };

  return (
    <>
      <div className={classes.filterArea}>
        <div className={classes.move}>
          <h2>Filters</h2>

          <p className={classes.filterSubHeading}>Color</p>
          <div className={classes.leftMargin}>
            {colorList.map((eachColor) => (
              <label key={eachColor.value} className={classes.container}>
                {eachColor.value}
                <input
                  type="checkbox"
                  value={eachColor.value}
                  checked={eachColor.checkState}
                  onChange={onCheckStateChangeHandler}
                />
                <span className={classes.checkmark}></span>
              </label>
            ))}
          </div>

          <p className={classes.filterSubHeading}>Gender</p>
          <div className={classes.leftMargin}>
            {genderList.map((eachGender) => (
              <label key={eachGender.value} className={classes.container}>
                {eachGender.value}
                <input
                  type="checkbox"
                  value={eachGender.value}
                  checked={eachGender.checkState}
                  onChange={"h"}
                />
                <span className={classes.checkmark}></span>
              </label>
            ))}
          </div>

          <p className={classes.filterSubHeading}>Type</p>
          <div className={classes.leftMargin}>
            {typeList.map((eachType) => (
              <label key={eachType.value} className={classes.container}>
                {eachType.value}
                <input
                  type="checkbox"
                  value={eachType.value}
                  checked={eachType.checkState}
                  onChange={"h"}
                />
                <span className={classes.checkmark}></span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
