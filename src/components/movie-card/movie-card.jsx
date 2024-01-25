import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Button onClick={() => onMovieClick(movie)} variant="primary">
          Open
        </Button>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    //image: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
