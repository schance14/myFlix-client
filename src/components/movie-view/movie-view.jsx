import PropTypes from "prop-types";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={movie.Image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.description}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre.genreName}</span>
        <span>{movie.Genre.genreDescription}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director.directorName}</span>
        <span>{movie.Director.directorDescription}</span>
        <span>{movie.Director.directorBirth}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

MovieView.PropTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.shape({
      genreName: PropTypes.string.isRequired,
    }),
    description: PropTypes.string.isRequired,
    director: PropTypes.shape({
      directorName: PropTypes.string.isRequired,
    }),
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
