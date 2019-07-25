import React, { useState } from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css';
import "./styles.css";

import { Controls } from "./components/Controls";
import { Items } from "./components/Items";
import { Notification } from "./components/Notification";

const initialMeals = [{ text: "spaghetti", date: Date.now() }];
const initialWeights = [{ number: 155, date: Date.now() }];

function App() {
  const [meals, setMeals] = useState(initialMeals);
  const [weights, setWeights] = useState(initialWeights);
  const [unitToKg, setUnitToKg] = useState(true);
  const [showSelect, setShowSelect] = useState('all');

  const onAddMeal = meal => {
    setMeals(meals => [...meals, { text: meal, date: Date.now() }]);
  };

  const onAddWeight = (weight, unit) => {
    const lbsToKg = Math.round((weight * 0.453592) * 100) / 100;
    const convertedWeight = unit === 'lbs' ? lbsToKg : weight;

    setWeights(weights => [...weights, { number: Number(convertedWeight), date: Date.now() }]);
  };

  const onChangeWeightSwitch = (checked, event) => {
    setUnitToKg(!checked);
  };

  const onChangeShowSelect = value => {
    setShowSelect(value);
  };

  const items = [...meals, ...weights];
  const sortedItems = items.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="App">
      <h1>Health Tracker</h1>
      <div className="container">
        <main>
          <Controls
            onAddMeal={onAddMeal}
            onAddWeight={onAddWeight}
            onChangeWeightSwitch={onChangeWeightSwitch}
            onChangeShowSelect={onChangeShowSelect}
          />

          <Items
            items={sortedItems}
            unitToKg={unitToKg}
            showSelect={showSelect}
          />

          <Notification />
        </main>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
