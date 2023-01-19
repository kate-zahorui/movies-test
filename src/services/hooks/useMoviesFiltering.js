import { useState } from "react";
import moviesData from "../../data/movies.json";

const initialMoviesArray = moviesData.map((i) => {
  return {
    value: i,
    label: i["name"],
  };
});

export default function useMoviesFiltering() {
  const [movieOptions, setMovieOptions] = useState(initialMoviesArray);

  const filterByRating = (selectedRating) => {
    if (!selectedRating) return;
    if (selectedRating?.length === 0) {
      setMovieOptions(initialMoviesArray);
      return;
    }
    const anyRating = selectedRating.find((i) => i.value === "Any rating");
    if (anyRating) {
      setMovieOptions(initialMoviesArray);
    }
    if (!anyRating) {
      setMovieOptions(() => {
        return initialMoviesArray.filter((i) =>
          selectedRating.find(
            (item) => item.value === Math.floor(i.value.rating)
          )
        );
      });
    }
  };

  const filterByGenre = (selectedGenres, type = "initial") => {
    if (!selectedGenres) return;
    if (selectedGenres?.length === 0) {
      setMovieOptions((previousState) => {
        if (type === "initial") {
          return initialMoviesArray;
        }
        if (type === "previous") {
          return previousState;
        }
      });
      return;
    }
    const anyGenre = selectedGenres.find((i) => i.value === "Any genre");
    if (anyGenre) {
      setMovieOptions((previousState) => {
        if (type === "initial") {
          return initialMoviesArray;
        }
        if (type === "previous") {
          return previousState;
        }
      });
      return;
    }

    if (!anyGenre) {
      setMovieOptions((previousState) => {
        if (type === "initial") {
          return initialMoviesArray.filter((i) =>
            selectedGenres.find((item) => item.value === i.value.genre)
          );
        }
        if (type === "previous") {
          return previousState.filter((i) =>
            selectedGenres.find((item) => item.value === i.value.genre)
          );
        }
      });
    }
  };

  const filterByAll = ({ selectedRating, selectedGenres }) => {
    filterByRating(selectedRating);
    filterByGenre(selectedGenres, "previous");
  };

  return { movieOptions, filterByRating, filterByGenre, filterByAll };
}
