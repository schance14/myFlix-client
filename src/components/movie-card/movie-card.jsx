import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export const MovieCard = ({ movie }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Link
          to={`/movies/${encodeURIComponent(movie.title)}`}
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
    image: PropTypes.string.isRequired,
  }).isRequired,
};
