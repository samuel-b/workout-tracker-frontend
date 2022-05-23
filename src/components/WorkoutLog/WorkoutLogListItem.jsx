import { Link } from "react-router-dom";
const WorkoutLogListItem = ({ workout }) => {
    return (
        <Link to={`/workout/${workout.id}`}>
            <p>{`${workout.date} - ${workout.exercise}`}</p>
        </Link>
    );
};

export default WorkoutLogListItem;
