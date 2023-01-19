import React from "react";
import Select, { components } from "react-select";
import { FiCheck } from "react-icons/fi";
import { RatingStar } from "../";
import s from "./RatingSelect.module.css";

const CustomOption = ({ children, ...props }) => {
  return (
    <components.Option {...props}>
      <div className={s.checkbox}>{props.isSelected && <FiCheck />}</div>
      <div style={{ display: "flex", gap: "3px" }}>
        {props.value === "Any rating" && children}
        {props.value !== "Any rating" &&
          [...Array(10)].map((i, index) => {
            if (props.value > index) {
              return <RatingStar type="full" key={`rating-${index}`} />;
            }
            return <RatingStar type="empty" key={`movie-rating-${index}`} />;
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

  const handleRatingSelect = (values) => {
    if (values.length === 0) {
      onSelect(values);
      return;
    }
    const isAny = values[values.length - 1]?.value === "Any rating";
    if (isAny) {
      onSelect([values[values.length - 1]]);
      return;
    }
    if (!isAny) {
      const notAnyValues = values.filter((i) => i.value !== "Any rating");
      onSelect(notAnyValues);
      return;
    }
  };

  return (
    <label>
      <Select
        // common
        name="rating"
        placeholder="Rating"
        // for select
        isMulti
        value={selectedRating}
        onChange={handleRatingSelect}
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
