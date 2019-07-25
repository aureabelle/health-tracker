import React from "react";
export function Weights({ weights }) {
  return (
    <>
      <h2>Weights</h2>
      <ul>
        {weights.map(weight => (
          <li>{weight.number}</li>
        ))}
      </ul>
    </>
  );
}
