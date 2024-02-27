import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movie-card.scss";

export const MovieCard = ({ movie }) => {
  return (
    <Card className="movie-card">
      <Card.Body>
        <Card.Img src={movie.ImagePath} className="img" />
        <Card.Title>{movie.title}</Card.Title>
        <Link
          to={`/movies/${encodeURIComponent(movie.id)}`}
          className="mt-auto"
        >
          <Button variant="primary">Open</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
