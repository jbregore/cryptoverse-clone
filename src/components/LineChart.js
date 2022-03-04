import React from 'react';
import { Col, Row, Typography } from 'antd';
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

// import { Line } from 'react-chartjs-2';

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];


    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        // console.log(coinHistory?.data?.history[i].price)
        coinPrice.push(coinHistory?.data?.history[i].price);
        // coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        // coinTimestamp.push(coinHistory.data.history[i].timestamp)
        // var timestamp = coinHistory?.data?.history[i].timestamp;
        // var date = new Date(timestamp);
        // coinTimestamp.push(date);
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString("en-US"));
    }


    const data = {
        labels: coinTimestamp.reverse(),
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice.reverse(),
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <>
            <Row className="chart-header">
                <Typography.Title level={2} className="chart-title">{coinName} Price Chart </Typography.Title>
                <Col className="price-container">
                    <Typography.Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Typography.Title>
                    <Typography.Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Typography.Title>
                </Col>
            </Row>
            <Line data={data} options={options} />
        </>
    );
};

export default LineChart;