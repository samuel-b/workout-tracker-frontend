import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const WorkoutInfo = ({ workouts }) => {
    const [workout, setWorkout] = useState({});

    // const { workoutId } = useParams();

    let params = useParams();

    useEffect(() => {
        setWorkout(workouts.find((workout) => workout.id === params.workoutId));
    }, [workouts, params.workoutId]);

    if (!workout.setss) {
        return;
    }

    return (
        <>
            <p>{workout.date}</p>
            <p>{workout.exercise}</p>
            {workout.setss?.map((set, index) => {
                return (
                    <div key={index}>
                        <p>{`Set: ${set.set}`}</p>
                        <p>{`Reps: ${set.reps}`}</p>
                        <p>{`Weight: ${set.weight}kg`}</p>
                    </div>
                );
            })}
            <p>{`Estimated 1RM : ${workout.estOneRepMax}`}</p>
            <p>{`Notes: ${workout.notes}`}</p>
        </>
    );
};

export default WorkoutInfo;
