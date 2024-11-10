// AddMovieForm.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [openingText, setOpeningText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && releaseDate && openingText) {
      const newMovie = {
        id: Math.random().toString(),
        title,
        releaseDate,
        openingText,
      };
      console.log(newMovie);
      onAddMovie(newMovie);
      setTitle("");
      setReleaseDate("");
      setOpeningText("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="releaseDate">
        <Form.Label>Release Date</Form.Label>
        <Form.Control
          type="date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="openingText">
        <Form.Label>Opening Text</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={openingText}
          onChange={(e) => setOpeningText(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Movie
      </Button>
    </Form>
  );
};

export default AddMovieForm;
