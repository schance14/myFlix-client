import { useState } from "react";
import { Card, Col, Row, Form, Button, Figure } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
import "./profile-view.scss";
export const ProfileView = ({
  user,
  token,
  movies,
  onLoggedOut,
  updatedUser,
}) => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Birthday, setBirthday] = useState("");

  let FavoriteMovies = movies.filter((movie) =>
    user.FavoriteMovies.includes(movie.id)
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      Name,
      Password,
      Email,
      Birthday,
    };
    //endpoint to update profile
    fetch(`https://film-finder-82ebda24dfc3.herokuapp.com/users/${user.Name}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Updating profile inoformation failed");
          return false;
        }
      })
      .then((user) => {
        if (user) {
          alert(" We have successfully updated your profile!");
          updatedUser(user);
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  const deleteAccount = () => {
    //endpoint to delete user account
    fetch(`https://film-finder-82ebda24dfc3.herokuapp.com/users/${user.Name}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        if (response.ok) {
          alert(
            "Your account has been successfully deleted. Sorry to see you go!"
          );
          onLoggedOut();
        } else {
          alert("Could not delete account");
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <>
      <Col md={6}>
        <Card className="mt-2 mb-3">
          <Card.Body>
            <Card.Title>Profile Information</Card.Title>
            <p>Name: {user.Name}</p>
            <p>Email: {user.Email}</p>
            <p>Birthday: {user.Birthday}</p>
          </Card.Body>
        </Card>
        <Button
          variant="danger"
          onClick={() => {
            if (confirm("Are you sure you want to delete your account?")) {
              deleteAccount();
            }
          }}
        >
          Delete Account
        </Button>
      </Col>
      <Col md={6}>
        <Card className="mt-2 mb-3">
          <Card.Body>
            <Card.Title>Update Your Profile Information</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  minLength="3"
                  className="bg-light"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength="4"
                  className="bg-light"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-light"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Birthday:</Form.Label>
                <Form.Control
                  type="date"
                  value={Birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  className="bg-light"
                />
              </Form.Group>
              <Button className="mt-3" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Card>
        <Card.Body>
          <Row>
            <Col md={12}>
              <h3>Your Favorite Movies:</h3>
            </Col>
            {FavoriteMovies.map((movie) => (
              <Col className="mb-4" key={movie.id} xl={2} lg={3} md={4} xs={6}>
                <Figure>
                  <Figure.Image src={movie.ImagePath} />
                </Figure>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
