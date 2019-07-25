import React, { useState } from "react";
import { Form, Input, Button } from 'antd';

export function MealForm({ onAddMeal }) {
  const [meal, setMeal] = useState("");
  function onSubmitForm(e) {
    e.preventDefault();
    onAddMeal(meal);
    setMeal("");
  }
  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Item>
        <Input
          placeholder="Enter meal"
          size="large"
          value={meal}
          onChange={e => setMeal(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          Add meal
        </Button>
      </Form.Item>
    </Form>
  );
}
