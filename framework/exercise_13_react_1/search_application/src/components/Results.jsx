import React from "react";

const Results = ({ items }) => {
  if (items.length === 0) {
    return (
      <ul>
        <li>Nenhum resultado encontrado.</li>
      </ul>
    );
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Results;