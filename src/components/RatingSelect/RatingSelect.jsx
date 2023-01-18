import React from "react";
import Select, { components } from "react-select";
import { FiCheck } from "react-icons/fi";
import s from "./RatingSelect.module.css";
import svg from "../../assets/sprite.svg";

const CustomOption = ({ children, ...props }) => {
  return (
    <components.Option {...props}>
      <div className={s.checkbox}>{props.isSelected && <FiCheck />}</div>
      <div style={{ display: "flex", gap: "3px" }}>
        {props.value === "Any rating" && children}
        {props.value !== "Any rating" &&
          [...Array(10)].map((i, index) => {
            if (props.value > index) {
              return (
                <svg width="16px" height="16px" key={`rating-${index}`}>
                  <use href={`${svg}#icon-star-full`}></use>
                </svg>
              );
            }
            return (
              <svg width="16px" height="16px" key={`rating-${index}`}>
                <use href={`${svg}#icon-star-empty`}></use>
              </svg>
            );
          })}
      </div>
    </components.Option>
  );
};

const RatingSelect = ({ selectedRating, onSelect }) => {
  const ratingOptions = [...Array(10)].map((i, index) => {
    return {
      value: index + 1,
      label: index + 1,
    };
  });

  ratingOptions.unshift({
    value: "Any rating",
    label: "Any rating",
  });

  return (
    <label>
      <Select
        // common
        name="rating"
        placeholder="Rating"
        // for select
        isMulti
        value={selectedRating}
        onChange={onSelect}
        options={ratingOptions}
        // for menu
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{ Option: CustomOption }}
        // for styles
        // unstyled
        // classNamePrefix="react-select"
        styles={selectStyles}
      />
    </label>
  );
};

const selectStyles = {
  placeholder: (base) => ({
    ...base,
    color: "#171717",
  }),
  menu: (base) => ({
    ...base,
    minWidth: "250px",
    minHeight: "300px",
    paddingTop: "5px",
  }),
  multiValue: (base) => ({
    ...base,
    display: "none",
  }),
  option: (base, { isSelected }) => ({
    ...base,
    height: "25px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    backgroundColor: isSelected ? "#fff" : "#fff",
    color: isSelected ? "#000" : "#000",
  }),
};

export default RatingSelect;
