import { RatingStar } from "../";

const MovieRating = ({ fullRating, currentRating }) => {
  return [...Array(10)].map((i, index) => {
    if (currentRating === index + 1 && currentRating === fullRating) {
      return <RatingStar type="full" key={`rating-${index}`} />;
    }

    if (currentRating === index + 1 && currentRating !== fullRating) {
      return <RatingStar type="current" key={`movie-rating-${index}`} />;
    }

    if (fullRating > index) {
      return <RatingStar type="full" key={`movie-rating-${index}`} />;
    }

    return <RatingStar type="empty" key={`movie-rating-${index}`} />;
  });
};

export default MovieRating;
