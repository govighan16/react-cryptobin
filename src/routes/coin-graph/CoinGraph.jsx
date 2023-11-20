import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
import "./CoinGraph.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const CoinGraph = ({ graphData, coinId }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Past 60 Days",
        color: "#fff",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
          callback: (value, index, values) => `$${value}`,
        },
      },
    },
  };
  const data = {
    labels: graphData.map((val) => moment(val.x).format("DD MMM YYYY")),
    datasets: [
      {
        fill: true,
        lineTension: 0.7,
        label: coinId,
        data: graphData.map((val) => `${val.y}`),
        borderColor: "#00ff00",
        backgroundColor: "rgba(0, 255, 0, 0.2)",
      },
    ],
  };

  const data2 = {
    labels: ["Jan", "Feb", "March"],
    datasets: [
      {
        fill: true,
        data: ["1", "2", "3"],
        borderColor: "blue",
        backgroundColor: "red",
      },
    ],
  };

  return (
    <div className="coin-graph-container">
      {graphData.length > 0 ? (
        <Line options={options} data={data} />
      ) : (
        <div>
          <h2>Loading graph data...</h2>
        </div>
      )}
    </div>
  );
};

export default CoinGraph;
