import React from "react";
// eslint-disable-next-line
import classes from "./FilterSection.module.css";

import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../store/filterSlice";
import { FilterSubHead } from "../../components";

const FilterSection = () => {
  const dispatch = useDispatch();
  const colorList = useSelector((state) => state.filter.color);
  const genderList = useSelector((state) => state.filter.gender);
  const typeList = useSelector((state) => state.filter.type);
  const priceList = useSelector((state) => state.filter.price);
  // console.log(colorList, genderList, typeList);

  const onCheckColorChangeHandler = (event) => {
    dispatch(
      filterActions.toggleColorFliter({
        value: event.target.value,
        checkState: event.target.checked,
      })
    );
  };

  const onCheckGenderChangeHandler = (event) => {
    dispatch(
      filterActions.toggleGenderFliter({
        value: event.target.value,
        checkState: event.target.checked,
      })
    );
  };

  const onCheckTypeChangeHandler = (event) => {
    dispatch(
      filterActions.toggleTypeFliter({
        value: event.target.value,
        checkState: event.target.checked,
      })
    );
  };

  const onCheckPriceChangeHandler = (event) => {
    dispatch(
      filterActions.togglePriceFliter({
        value: event.target.value,
        checkState: event.target.checked,
      })
    );
  };

  return (
    <>
      <div className={classes.filterArea}>
        <div className={classes.move}>
          <h2>Filters</h2>
          <FilterSubHead
            subHead={"color"}
            getList={colorList}
            onCheckCallback={onCheckColorChangeHandler}
          />
          <FilterSubHead
            subHead={"gender"}
            getList={genderList}
            onCheckCallback={onCheckGenderChangeHandler}
          />
          <FilterSubHead
            subHead={"type"}
            getList={typeList}
            onCheckCallback={onCheckTypeChangeHandler}
          />
          <FilterSubHead
            subHead={"price"}
            getList={priceList}
            onCheckCallback={onCheckPriceChangeHandler}
          />
        </div>
      </div>
    </>
  );
};

export default FilterSection;
