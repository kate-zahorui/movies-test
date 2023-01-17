import React, { useState } from "react";
import Select from "react-select";

const RatingSelect = () => {
  const [selectedRating, setSelectedRating] = useState(null);

  return (
    <label>
      <Select
        // common
        name="rating"
        required
        placeholder="Rating"
        // for select
        value={selectedRating}
        onChange={setSelectedRating}
        // options={selectOptions}
        // for styles
        // unstyled
        classNamePrefix="react-select"
      />
    </label>
  );
};

export default RatingSelect;
