import React, { useState } from "react";
import Select from "react-select";

import s from "./NameSelect.module.css";

const NameSelect = () => {
  const [name, setName] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSelectChange = (value) => {
    setName(value);
  };

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
        // options={selectOptions}
        menuIsOpen={name.length > 0}
        // for styles
        // unstyled
        classNamePrefix="react-select"
      />
    </label>
  );
};

export default NameSelect;
