import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';
import { Empty } from 'antd';

export function Graph({ weights, unitToKg }) {
  const dates = weights.map(weight => moment(weight.date).format('L'));
  const weightData = weights.map(weight => {
    if (!unitToKg) {
      return Math.round(weight.number * 2.20462);
    }

    return weight.number;
  });

  const options = {
    title: {
      text: 'Daily Weight Log'
    },
    chart: {
      style: {
        fontFamily: 'Questrial'
      }
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: dates
    },
    series: [{
      type: 'line',
      data: weightData.reverse(),
      name: `Weight Log in ${unitToKg ? 'kg' : 'lbs'}`
    }]
  }

  return (
    <div className="graph">
      <h2>Weight Progress</h2>

      {weightData.length <= 1 ?
        <Empty description='Your daily weight log will display here.' />
      :
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      }
    </div>
  );
}