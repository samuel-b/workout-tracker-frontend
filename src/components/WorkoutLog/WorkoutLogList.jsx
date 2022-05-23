import WorkoutLogListItem from "./WorkoutLogListItem";

const WorkoutLogList = ({ workouts }) => {
    return (
        <>
            <h3>Workout Log</h3>
            {workouts.map((workout) => {
                return (
                    <WorkoutLogListItem key={workout.id} workout={workout} />
                );
            })}
        </>
    );
};

export default WorkoutLogList;
