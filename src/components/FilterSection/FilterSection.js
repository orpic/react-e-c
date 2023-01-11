import React from "react";
// eslint-disable-next-line
import classes from "./FilterSection.module.css";

const FilterSection = () => {
  const filterList = [
    {
      title: "color",
      tags: ["red", "blue", "green"],
    },
    {
      title: "gender",
      tags: ["men", "women"],
    },
    {
      title: "price",
      tags: [" < ₹250", "₹251 - ₹450", " > ₹451"],
    },
    {
      title: "type",
      tags: ["polo", "hoodie", "basic"],
    },
  ];
  return (
    <>
      <div className={classes.filterArea}>
        <div className={classes.move}>
          <h2>Filters</h2>
          {filterList.map((eachFilter) => (
            <>
              <p className={classes.filterSubHeading}>{eachFilter.title}</p>
              <div className={classes.leftMargin}>
                {eachFilter.tags.map((eachTag) => (
                  <label className={classes.container}>
                    {eachTag}
                    <input type="checkbox" />
                    <span className={classes.checkmark}></span>
                  </label>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterSection;
