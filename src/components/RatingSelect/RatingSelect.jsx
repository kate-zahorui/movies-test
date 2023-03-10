import React from "react";
import Select, { components } from "react-select";
import { Checkbox, RatingStar } from "../";

const CustomOption = ({ children, ...props }) => {
  return (
    <components.Option {...props}>
      <Checkbox isSelected={props.isSelected} />
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
        unstyled
        styles={selectStyles}
      />
    </label>
  );
};

const selectStyles = {
  container: (base) => ({
    ...base,
    padding: "5px 9px 5px 16px",
    border: "1px solid #979797",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#171717",
  }),
  menu: (base) => ({
    ...base,
    left: 0,
    marginTop: "4px",
    minWidth: "250px",
    minHeight: "300px",
    border: "1px solid #979797",
    "& > div": {
      padding: "12px",
    },
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
