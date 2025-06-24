import React from "react";

const Card = ({ name, number, email, image, qualification }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="profile-img" />
      <p>
        <strong>{name}</strong>
      </p>
      <p>Qualification: {qualification}</p>
      <p>Contact: {number}</p>

      <p>{email}</p>
    </div>
  );
};

export default Card;
