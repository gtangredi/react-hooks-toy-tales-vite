import React from "react";

function ToyCard({ toy, setToys, toys }) {
  function handleDonate() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
    .then((response) => {
      if (response.ok) {
        setToys(toys.filter((t) => t.id !== toy.id));
      }
    })
    .catch((error) => console.error("Error deleting toy:", error));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{ toy.name }</h2>
      <img
        src={ toy.image }
        alt={ toy.name }
        className="toy-avatar"
      />
      <p>{ toy.likes } Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
