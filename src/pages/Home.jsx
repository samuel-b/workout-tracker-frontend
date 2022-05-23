import WorkoutForm from "../components/WorkoutForm/WorkoutForm";
import WorkoutLogList from "../components/WorkoutLog/WorkoutLogList";

const Home = ({ workouts }) => {
    return (
        <>
            <WorkoutForm />
            <WorkoutLogList workouts={workouts} />
        </>
    );
};

export default Home;
