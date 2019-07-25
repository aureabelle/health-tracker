import React from "react";
import moment from 'moment';
import { List, Tag } from 'antd';

import { Graph } from "./Graph";

export function Items({ items, unitToKg, showSelect}) {
  const convertWeight = weight => {
    if (unitToKg) {
      return `${weight} kg`;
    }

    return `${Math.round(weight * 2.20462)} lbs`;
  };

  const filteredItems = () => {
    let filtered = [];

    switch(showSelect) {
      case 'meal':
        filtered = items.filter(item => item.text);
        break;
      case 'weight':
        filtered = items.filter(item => item.number);
        break;
      default:
        filtered = items;
    }

    return filtered;
  };

  return (
    <div className="items">
      <div className="items-list">
        <List
          itemLayout="horizontal"
          dataSource={filteredItems()}
          renderItem={item => {
            const itemLabel = item.text ? item.text : convertWeight(item.number);
            const itemType = item.text ? 'meal' : 'weight';

            return (
              <List.Item>
                <div className="item">
                  <span className="item-date">
                    {moment(item.date).format('lll')}
                  </span>

                  {itemType === 'meal' ?
                    <div className="item-tag">
                      <Tag color="#2db7f5">Meal</Tag>
                    </div>
                  :
                    <div className="item-tag">
                      <Tag color="#87d068">Weight</Tag>
                    </div>
                  }

                  <span className="item-label">{itemLabel}</span>
                </div>
              </List.Item>
            );
          }}
        />
      </div>

      <div className="graphs">
        <Graph
          weights={items.filter(item => item.number)}
          unitToKg={unitToKg}
        />
      </div>
    </div>
  );
}