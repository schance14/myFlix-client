export const MovieCard = ({ movie, onMovieClick }) => {
  console.log(movie);
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.title}
    </div>
  );
};
