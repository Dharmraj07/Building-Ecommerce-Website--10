// MovieCard.js
import React from "react";
import { Card, Col } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Release Date: {new Date(movie.releaseDate).toLocaleDateString()}
          </Card.Subtitle>
          <Card.Text>{movie.openingText.slice(0, 150)}...</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCard;
