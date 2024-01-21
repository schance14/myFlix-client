import { Button, Card } from "react-bootstrap";
export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card>
      <Card.img variant="top" src={movie.image} />
      <Card.body>
        <Card.title>{movie.title}</Card.title>
        <Button onClick={() => onMovieClick(movie)} variant="link">
          Open
        </Button>
      </Card.body>
    </Card>
  );
};
