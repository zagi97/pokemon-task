import React from "react";
import Card from "react-bootstrap/Card";

const Pokemon = (final_props) => {
  return (
    <Card style={{ width: "320px", padding: "20px" }}>
      <Card.Body style={{ flex: "display", justifyContent: "center" }}>
        <Card.Title style={{ color: "white" }}>{final_props.name}</Card.Title>
        <Card.Text style={{ color: "white" }}>{final_props.url}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Pokemon;
