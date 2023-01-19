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
      <div className={s.option__text}>
        <p className={s.option__name}>{children}</p>
        <p className={s.option__genre}>{value?.genre}</p>
      </div>
      <div className={s.rating__container}>
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
  menu: (base) => ({
    ...base,
    left: 0,
    marginTop: "4px",
    border: "1px solid #979797",
    "& > div": {
      padding: "12px",
    },
  }),
  option: (base, { isSelected }) => ({
    ...base,
    backgroundColor: isSelected ? "#fff" : "#fff",
    color: isSelected ? "#000" : "#000",
  }),
};

export default MovieSelect;
