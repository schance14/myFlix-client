import { PropTypes } from "prop-types";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Col, Button } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
import { useEffect, useState } from "react";
import "./movie-view.scss";

export const MovieView = ({ movies, user, token, updateUser }) => {
  const { MovieTitle } = useParams();
  const movie = movies.find((m) => m.Title === MovieTitle);
  const [isFavorite, setAsFavorite] = useState(
    user.FavoriteMovies.includes(movie.Title)
  );

  useEffect(() => {
    setAsFavorite(user.FavoriteMovies.includes(movie.Title));
  }, [MovieTitle]);

  const addFavorite = () => {
    fetch(
      `https://film-finder-82ebda24dfc3.herokuapp.com/users/${user.Name}/movies/${movie.title}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed adding movie to list.");
          return false;
        }
      })
      .then((user) => {
        if (user) {
          alert("Successfully added to favorites!");
          setAsFavorite(true);
          updateUser(user);
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  const removeFavorite = () => {
    fetch(
      `https://film-finder-82ebda24dfc3.herokuapp.com/users/${user.Name}/movies/${movie.title}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed");
          return false;
        }
      })
      .then((user) => {
        if (user) {
          alert("Successfully deleted from favorites");
          setAsFavorite(false);
          updateUser(user);
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <Col md={12}>
      <div>
        <img src={movie.imagePath} />
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
        <span>{movie.genre}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director}</span>
      </div>
      <Link to={"/"}>
        <Button variant="primary">Back</Button>
      </Link>
      {isFavorite ? (
        <Button variant="danger" className="ms-2" onClick={removeFavorite}>
          Remove from Favorites
        </Button>
      ) : (
        <Button variant="primary" className="ms-2" onClick={addFavorite}>
          Add to Favorites
        </Button>
      )}
    </Col>
  );
};

MovieView.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};
