import React from 'react';
import { Line } from 'react-chartjs-2';
import {Col, Row, Typography } from 'antd';
import Chart from 'chart.js/auto'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for(let i = 0; i < coinHistory?.data?.history?.length; i+= 1) {
    coinPrice.push(coinHistory.data.history[i].price)
  }
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp*1000).toLocaleDateString("en-US"));
  }

  // data object in chartJs
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd'
      }
    ]
  }

  /* const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }; */
  const options = { scales: { y: { ticks: { beginAtZero: true, }, }, }, };

  return (
    <>
    <Row className='chart-header'>
        <Typography.Title level={2} className='chart-title'>{coinName} Price Chart</Typography.Title>
        <Col className='price-container'>
            <Typography.Title level={5} className='price-change'>{coinHistory?.data?.change}%</Typography.Title>
            <Typography.Title level={5} className='current-change'>Current {coinName} Price: $ {currentPrice} </Typography.Title>
        </Col>
    </Row>
    <Line data={data} options={options}></Line>
    </>
  )
}

export default LineChart