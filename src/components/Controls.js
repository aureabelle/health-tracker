import React, { useState } from "react";
import { Button, Drawer, Icon, Switch, Select } from 'antd';

import { MealForm } from "./MealForm";
import { WeightForm } from "./WeightForm";
import Instructions from "../Instructions";

const { Option } = Select;

export function Controls({
  onAddMeal,
  onAddWeight,
  onChangeWeightSwitch,
  onChangeShowSelect
}) {
  const [showForm, setShowForm] = useState(false);
  const [visibleType, setVisibleType] = useState('instructions');

  const handleAddClick = type => {
    setShowForm(true);
    setVisibleType(type);
  };

  const onClose = () => {
    setShowForm(false);
    setVisibleType('instructions');
  };

  return (
    <div className="controls">

      <div className="filter">
        <Select
          showSearch
          style={{ width: 200 }}
          defaultValue="all"
          placeholder="Show All"
          onChange={onChangeShowSelect}
        >
          <Option value="all">Show All</Option>
          <Option value="meal">Meals Only</Option>
          <Option value="weight">Weigths Only</Option>
        </Select>

        <div className="control-weight">
          <span className="label">Display weight in</span>
          <Switch
            checkedChildren="lbs"
            unCheckedChildren="kg"
            onChange={onChangeWeightSwitch}
          />
        </div>
      </div>

      <div className="sub-controls">
        <Button.Group size="large">
          <Button type="primary" onClick={() => handleAddClick('meal')}>
            <Icon type="plus-circle" /> Add Meal
          </Button>
          <Button type="primary" onClick={() => handleAddClick('weight')}>
            <Icon type="plus-circle" /> Add Weight
          </Button>
        </Button.Group>

        <Button type="danger" size="large" onClick={() => handleAddClick('instructions')}>
          Instructions
        </Button>
      </div>

      <Drawer
        title={`${visibleType === 'instructions' ? 'Instructions' : `Add ${visibleType}`}`}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={showForm}
        width={640}
      >
        {visibleType === 'meal' &&
          <MealForm onAddMeal={onAddMeal} />
        }

        {visibleType === 'weight' &&
          <WeightForm
            onAddWeight={onAddWeight}
          />
        }

        {visibleType === 'instructions' &&
          <Instructions />
        }
      </Drawer>
    </div>
  );
}