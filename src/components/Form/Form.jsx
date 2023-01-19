import { useEffect, useState } from "react";
import { GenreSelect, MovieSelect, RatingSelect } from "../";
import useMoviesFiltering from "../../services/hooks/useMoviesFiltering";
import s from "./Form.module.css";

const Form = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedGenres, setSelectedGenres] = useState(null);
  const { movieOptions, filterByRating, filterByGenre, filterByAll } =
    useMoviesFiltering();

  useEffect(() => {
    if (!selectedRating) return;
    if (selectedRating?.length === 0) {
      filterByGenre(selectedGenres);
      return;
    }
    filterByAll({ selectedRating, selectedGenres });
    // eslint-disable-next-line
  }, [selectedRating, selectedRating?.length]);

  useEffect(() => {
    if (!selectedGenres) return;
    if (selectedGenres?.length === 0) {
      filterByRating(selectedRating);
      return;
    }
    filterByAll({ selectedRating, selectedGenres });
    // eslint-disable-next-line
  }, [selectedGenres, selectedGenres?.length]);

  return (
    <form className={s.form}>
      <MovieSelect
        selectedMovie={selectedMovie}
        onSelect={setSelectedMovie}
        movieOptions={movieOptions}
      />
      <RatingSelect
        selectedRating={selectedRating}
        onSelect={setSelectedRating}
      />
      <GenreSelect
        selectedGenres={selectedGenres}
        onSelect={setSelectedGenres}
      />
    </form>
  );
};

export default Form;
