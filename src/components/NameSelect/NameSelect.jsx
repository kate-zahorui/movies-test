import React, { useState } from "react";
import Select from "react-select";
import moviesData from "../../data/movies.json";
import s from "./NameSelect.module.css";

const NameSelect = () => {
  const [name, setName] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSelectChange = (value) => {
    setName(value);
  };

  const movieOptions = moviesData.map((i) => {
    return {
      value: i["name"],
      label: i["name"],
    };
  });

  return (
    <label className={s.label}>
      <Select
        // common
        name="name"
        required
        placeholder="Enter movie name"
        // for input
        isSearchable={true}
        inputValue={name}
        onInputChange={handleSelectChange}
        // for select
        value={selectedMovie}
        onChange={setSelectedMovie}
        // for menu (list of options)
        options={movieOptions}
        // for styles
        // unstyled
        classNamePrefix="react-select"
      />
    </label>
  );
};

export default NameSelect;
