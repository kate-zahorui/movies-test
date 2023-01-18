import { useState } from "react";
import { GenreSelect, NameSelect, RatingSelect } from "../";
import s from "./Form.module.css";

const Form = () => {
  const [selectedGenres, setSelectedGenres] = useState(null);

  return (
    <form className={s.form}>
      <NameSelect />
      <RatingSelect />
      <GenreSelect
        selectedGenres={selectedGenres}
        onSelect={setSelectedGenres}
      />
    </form>
  );
};

export default Form;
