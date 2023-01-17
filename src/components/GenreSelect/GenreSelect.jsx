import React, { useState } from "react";
import Select from "react-select";

const GenreSelect = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  return (
    <label>
      <Select
        // common
        name="genre"
        required
        placeholder="Genre"
        // for select
        value={selectedGenre}
        onChange={setSelectedGenre}
        // options={selectOptions}
        // for styles
        // unstyled
        classNamePrefix="react-select"
      />
    </label>
  );
};

export default GenreSelect;
