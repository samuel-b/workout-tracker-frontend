import "bootstrap/dist/css/bootstrap.min.css";
import { getAll } from "./services/server";
import { useQuery } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./theme";
import BootstrapNav from "./components/BootstrapNav/BootstrapNav";
import WorkoutInfo from "./components/WorkoutInfo/WorkoutInfo";
import WorkoutChartList from "./components/WorkoutChart/WorkoutChartList";
import WorkoutLogList from "./components/WorkoutLog/WorkoutLogList";
import WorkoutForm from "./components/WorkoutForm/WorkoutForm";
import { ThemeProvider } from "styled-components";

function App() {
    const getData = async () => {
        const data = await getAll("workouts");
        return data;
    };

    const { data, isLoading, isError } = useQuery("workouts", getData);

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <span>Error...</span>;
    }

    return (
        <BrowserRouter basename="/workout-tracker-react">
            <ThemeProvider theme={theme}>
                <BootstrapNav />
                <Routes>
                    <Route path="/" element={<WorkoutForm />} />
                    <Route
                        path="/charts"
                        element={<WorkoutChartList data={data} />}
                    />
                    <Route
                        path="/logs"
                        element={<WorkoutLogList workouts={data} />}
                    />
                    <Route
                        path="/workout/:workoutId"
                        element={<WorkoutInfo workouts={data} />}
                    />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
