import React, { useState } from "react";
import { Form, Input, Button, Radio } from 'antd';

export function WeightForm({ onAddWeight }) {
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("kg");

  const onChange = event => {
    setUnit(event.target.value);
  };

  function onSubmitForm(e) {
    e.preventDefault();
    onAddWeight(weight, unit);
    setWeight("");
  }

  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Item>
        <Input
          placeholder="Enter weight in"
          size="large"
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />

      <Radio.Group onChange={onChange} defaultValue="kg">
        <Radio.Button value="kg">kg</Radio.Button>
        <Radio.Button value="lbs">lbs</Radio.Button>
      </Radio.Group>


      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          Add weight
        </Button>
      </Form.Item>
    </Form>
  );
}
