import React from "react";
export function Meals({ meals }) {
  return (
    <>
      <h2>Meals</h2>
      <ul>
        {meals.map(meal => (
          <li>{meal.text}</li>
        ))}
      </ul>
    </>
  );
}
