import React, { useState, useEffect } from 'react';
import { notification, Icon } from 'antd';

const defaultMessages = [
  {
    type: "tip",
    title: "Base your meals on higher fibre starchy carbohydrates",
    text: "Starchy carbohydrates should make up just over a third of the food you eat. They include potatoes, bread, rice, pasta and cereals."
  },
  {
    type: "tip",
    title: "Eat lots of fruits and vegetables",
    text: "It's recommended that you eat at least 5 portions of a variety of fruit and veg every day. They can be fresh, frozen, canned, dried or juiced."
  },
  {
    type: "tip",
    title: "Eat more fish, including a portion of oily fish",
    text: "Fish is a good source of protein and contains many vitamins and minerals."
  },
  {
    type: "tip",
    title: "Cut down on saturated fat and sugar",
    text: "You need some fat in your diet, but it's important to pay attention to the amount and type of fat you're eating. Regularly consuming foods and drinks high in sugar increases your risk of obesity and tooth decay."
  },
  {
    type: "tip",
    title: "Eat less salt: no more than 6g a day for adults",
    text: "Eating too much salt can raise your blood pressure. People with high blood pressure are more likely to develop heart disease or have a stroke."
  },
  {
    type: "tip",
    title: "Get active and be a healthy weight",
    text: "As well as eating healthily, regular exercise may help reduce your risk of getting serious health conditions. It's also important for your overall health and wellbeing."
  },
  {
    type: "tip",
    title: "Do not get thirsty",
    text: "You need to drink plenty of fluids to stop you getting dehydrated. The government recommends drinking 6 to 8 glasses every day. This is in addition to the fluid you get from the food you eat."
  },
  {
    type: "tip",
    title: "Do not skip breakfast",
    text: "A healthy breakfast high in fibre and low in fat, sugar and salt can form part of a balanced diet, and can help you get the nutrients you need for good health."
  }
];

export function Notification() {
  const [messages] = useState(defaultMessages);

  useEffect(() => {
    for (let i = 0; i < messages.length; i++) {
      const message = messages[i];
      const title = message.title;
      const description = message.text;

      setTimeout(() => {
        openNotificationWithIcon('info', title, description);
      }, 30000 * i);
    }
  }, [messages]);

  const openNotificationWithIcon = (type, title, description) => {
    notification[type]({
      message: title,
      description: description,
      duration: 10,
      icon: <Icon type="smile" />
    });
  };

  return null;
}