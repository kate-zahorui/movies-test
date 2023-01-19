import React, { useState } from "react";
import Select, { components } from "react-select";
import { MovieRating } from "../";
import s from "./MovieSelect.module.css";

const CustomOption = (props) => {
  const { children, value } = props;

  const fullRating = Math.floor(value?.rating);
  const currentRating = Math.ceil(value?.rating);

  return (
    <components.Option {...props}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{children}</p>
        <p>{value?.genre}</p>
      </div>
      <div
        style={{
          display: "inline-flex",
          gap: "3px",
          padding: "4px",
          backgroundColor: "#fff",
        }}
      >
        <MovieRating fullRating={fullRating} currentRating={currentRating} />
      </div>
    </components.Option>
  );
};

const MovieSelect = ({ selectedMovie, onSelect, movieOptions }) => {
  const [name, setName] = useState("");

  const handleSelectChange = (value) => {
    setName(value);
  };

  return (
    <label className={s.label}>
      <Select
        // common
        name="name"
        placeholder="Enter movie name"
        // for input
        isSearchable={true}
        inputValue={name}
        onInputChange={handleSelectChange}
        options={movieOptions}
        // for select
        value={selectedMovie}
        onChange={onSelect}
        // for menu (list of options)
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
  menu: (base) => ({
    ...base,
    minHeight: "300px",
    paddingTop: "5px",
  }),
  option: (base, { isSelected }) => ({
    ...base,
    backgroundColor: isSelected ? "#fff" : "#fff",
    color: isSelected ? "#000" : "#000",
  }),
};

export default MovieSelect;
