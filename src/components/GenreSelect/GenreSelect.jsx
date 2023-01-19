import React from "react";
import Select, { components } from "react-select";
import { FiCheck } from "react-icons/fi";
import moviesData from "../../data/movies.json";
import s from "./GenreSelect.module.css";

const CustomOption = ({ children, ...props }) => {
  return (
    <components.Option {...props}>
      <div className={s.checkbox}>{props.isSelected && <FiCheck />}</div>
      {children}
    </components.Option>
  );
};

const GenreSelect = ({ selectedGenres, onSelect }) => {
  const genreOptions = moviesData
    .map((i) => {
      return {
        value: i["genre"],
        label: i["genre"],
      };
    })
    .filter(
      (item, index, array) =>
        array.findIndex((option) => option.label === item.label) === index
    )
    .sort((a, b) => a.label.localeCompare(b.label));

  genreOptions.unshift({
    value: "Any genre",
    label: "Any genre",
  });

  const handleGenreSelect = (values) => {
    if (values.length === 0) {
      onSelect(values);
      return;
    }
    const isAny = values[values.length - 1]?.value === "Any genre";
    if (isAny) {
      onSelect([values[values.length - 1]]);
      return;
    }
    if (!isAny) {
      const notAnyValues = values.filter((i) => i.value !== "Any genre");
      onSelect(notAnyValues);
      return;
    }
  };

  return (
    <label>
      <Select
        // common
        name="genre"
        placeholder="Genre"
        // for select
        isMulti
        value={selectedGenres}
        onChange={handleGenreSelect}
        options={genreOptions}
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
    minWidth: "130px",
  }),
  multiValue: (base) => ({
    ...base,
    display: "none",
  }),
  option: (base, { isSelected }) => ({
    ...base,
    display: "flex",
    alignItems: "center",
    gap: "12px",
    backgroundColor: isSelected ? "#fff" : "#fff",
    color: isSelected ? "#000" : "#000",
  }),
};

export default GenreSelect;
