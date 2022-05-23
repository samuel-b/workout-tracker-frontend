import "bootstrap/dist/css/bootstrap.min.css";
import { getAll } from "./services/server";
import { useQuery } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BootstrapNav from "./components/BootstrapNav/BootstrapNav";
import Home from "./pages/Home";
import WorkoutInfo from "./components/WorkoutInfo/WorkoutInfo";

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
        <BrowserRouter>
            <BootstrapNav />
            <Routes>
                <Route path="/" element={<Home workouts={data} />} />
                <Route
                    path="/workout/:workoutId"
                    element={<WorkoutInfo workouts={data} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
