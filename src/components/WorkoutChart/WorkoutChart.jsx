import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const WorkoutChart = ({ item }) => {
    const options = {
        responsive: false,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: `${item.exercise} Estimated 1RM`,
            },
        },
    };

    let labels = item.dateArr.sort();
    let dataset = item.oneRmArr;
    const data = {
        labels,
        datasets: [
            {
                label: "Weight(kg)",
                data: dataset,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };
    return (
        <>
            <Line width={500} height={300} options={options} data={data} />
        </>
    );
};

export default WorkoutChart;
