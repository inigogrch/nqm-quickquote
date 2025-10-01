import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend
);

interface ChartDataItem {
  month: string;
  year: string;
  grossDeposits: number;
  monthlyNetDeposits: number;
}

interface DataChartProps {
  data: ChartDataItem[];
  chartType: "Line" | "Doughnut";
}

const DataChart = ({ data, chartType }: DataChartProps) => {
  const sortedData = [...data].reverse(); // avoid mutating props

  const lineChartData = {
    labels: sortedData.map((d) => `${d.month} ${d.year}`),
    datasets: [
      {
        label: "Revenue",
        data: sortedData.map((d) => d.grossDeposits),
        borderColor: "#36A2EB",
        backgroundColor: "rgba(54,162,235,0.2)",
        fill: false,
      },
      {
        label: "Expense",
        data: sortedData.map((d) => d.grossDeposits - d.monthlyNetDeposits),
        borderColor: "#FF6384",
        backgroundColor: "rgba(255,99,132,0.2)",
        fill: false,
      },
    ],
  };

  const doughnutChartData = {
    labels: ["Revenue", "Expense"],
    datasets: [
      {
        label: "Value",
        data: [
          sortedData.reduce((acc, d) => acc + d.grossDeposits, 0),
          sortedData.reduce(
            (acc, d) => acc + d.grossDeposits - d.monthlyNetDeposits,
            0
          ),
        ],
        backgroundColor: ["#36A2EB", "#FF6384"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={`${chartType === "Line" ? "w-2/3" : "w-1/3"}`}>
      {chartType === "Line" ? (
        <Line data={lineChartData} />
      ) : (
        <Doughnut data={doughnutChartData} />
      )}
    </div>
  );
};

export default DataChart;