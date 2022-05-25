import { useState } from "react";
import { create } from "../../services/server";
import { FormWrapper } from "./StyledWorkoutForm";

const WorkoutForm = () => {
    const [date, setDate] = useState("");
    const [exercise, setExercise] = useState("Incline Bench-Press");
    const [equipment, setEquipment] = useState("Dumbbells");
    const [notes, setNotes] = useState("");
    const [repsSetOne, setRepsSetOne] = useState(0);
    const [repsSetTwo, setRepsSetTwo] = useState(0);
    const [repsSetThree, setRepsSetThree] = useState(0);
    const [weightSetOne, setWeightSetOne] = useState(0);
    const [weightSetTwo, setWeightSetTwo] = useState(0);
    const [weightSetThree, setWeightSetThree] = useState(0);

    const handleDate = (e) => {
        const day = e.target.value.slice(8);
        const year = e.target.value.slice(0, 4);
        const month = e.target.value.slice(5, 7);
        setDate(`${day}/${month}/${year}`);
    };

    const handleExercise = (e) => {
        setExercise(e.target.value);
    };

    const handleEquipment = (e) => {
        setEquipment(e.target.value);
    };

    const handleNotes = (e) => {
        setNotes(e.target.value);
    };

    const handleRepsSetOne = (e) => {
        setRepsSetOne(e.target.value);
    };

    const handleWeightSetOne = (e) => {
        setWeightSetOne(e.target.value);
    };

    const handleRepsSetTwo = (e) => {
        setRepsSetTwo(e.target.value);
    };

    const handleWeightSetTwo = (e) => {
        setWeightSetTwo(e.target.value);
    };

    const handleRepsSetThree = (e) => {
        setRepsSetThree(e.target.value);
    };

    const handleWeightSetThree = (e) => {
        setWeightSetThree(e.target.value);
    };

    const calcOneRepMax = () => {
        const arr = [];
        arr.push(weightSetOne / (1.0278 - 0.0278 * repsSetOne));
        arr.push(weightSetTwo / (1.0278 - 0.0278 * repsSetTwo));
        arr.push(weightSetThree / (1.0278 - 0.0278 * repsSetThree));
        return Number(
            arr
                .sort(function (a, b) {
                    return b - a;
                })[0]
                .toFixed(2),
        );
    };

    const handleSubmit = () => {
        if (
            !date ||
            !repsSetOne ||
            !repsSetTwo ||
            !repsSetThree ||
            !weightSetOne ||
            !weightSetTwo ||
            !weightSetThree
        ) {
            alert("Missing Input Fields");
            return;
        }
        create(
            "workouts",
            date,
            exercise,
            equipment,
            notes,
            repsSetOne,
            weightSetOne,
            repsSetTwo,
            weightSetTwo,
            repsSetThree,
            weightSetThree,
            calcOneRepMax(),
        );
    };

    return (
        <FormWrapper>
            <input onChange={handleDate} type="date" required />
            <select onChange={handleExercise} name="" id="">
                <option value="Incline Bench-Press">Incline Bench-Press</option>
                <option value="Bench-Press">Bench-Press</option>
                <option value="Decline Bench-Press">Decline Bench-Press</option>
                <option value="Close-Grip Bench-Press">
                    Close-Grip Bench-Press
                </option>
                <option value="Chest Flyes">Chest Flyes</option>
                <option value="Tricep Extension">Tricep Extension</option>
                <option value="Deadlift">Deadlift</option>
                <option value="Goblet Squat">Goblet Squat</option>
                <option value="Leg Extension">Leg Extension</option>
                <option value="Leg Curl">Leg Curl</option>
                <option value="Calf Raise">Calf Raise</option>
            </select>
            <select onChange={handleEquipment} name="" id="">
                <option value="Dumbbells">Dumbbells</option>
                <option value="Machine">Machine</option>
            </select>
            <p>Set 1</p>
            <input
                onChange={handleRepsSetOne}
                type="number"
                placeholder="Reps"
                required
            />
            <input
                onChange={handleWeightSetOne}
                type="number"
                placeholder="Weight"
                required
            />
            <p>Set 2</p>
            <input
                onChange={handleRepsSetTwo}
                type="number"
                placeholder="Reps"
                required
            />
            <input
                onChange={handleWeightSetTwo}
                type="number"
                placeholder="Weight"
                required
            />
            <p>Set 3</p>
            <input
                onChange={handleRepsSetThree}
                type="number"
                placeholder="Reps"
                required
            />
            <input
                onChange={handleWeightSetThree}
                type="number"
                placeholder="Weight"
                required
            />
            <textarea onChange={handleNotes} name="" id="" rows="5"></textarea>
            <button onClick={handleSubmit}>Submit</button>
        </FormWrapper>
    );
};

export default WorkoutForm;
