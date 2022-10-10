import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useTheme } from '@mui/material'
import getDate from '../Helpers/getDate'

function Chart(props) {
  const theme = useTheme()
  const { coinHistory } = props
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

  const options = {
    radius: 0,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Price in time',
      },
    },
  }

  const labels = coinHistory.map(({ time }) => getDate(time))

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: coinHistory.map(({ high }) => high),
        borderColor: theme.palette.graph.default,
      },
    ],
  }

  return <Line options={options} data={data} />
}

export default Chart
