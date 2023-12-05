import propTypes from "prop-types";

export const MovieCard = ({ movieData, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movieData);
      }}
    >
      {movieData.title}
    </div>
  );
};

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
  }).isRequired,
  onMovieClick: propTypes.func.isRequired,
};
