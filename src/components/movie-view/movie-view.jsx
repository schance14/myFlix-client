import "./movie-view.scss";
import { Col, Button } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
export const MovieView = ({ movie, onBackClick }) => {
  return (
    <Col md={12}>
      <div>
        <img src={movie.image} />
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
      <Button
        onClick={onBackClick}
        className="back-button"
        style={{ cursor: "pointer" }}
      >
        Back
      </Button>
    </Col>
  );
};
