import { useState } from "react";
import { create } from "../../services/server";
import { FormWrapper } from "./StyledWorkoutForm";
import {
    StyledButton,
    StyledInput,
    StyledTextArea,
    StyledSelect,
} from "./StyledWorkoutForm";

const WorkoutForm = () => {
    const initialState = {
        date: "",
        exercise: "Incline Bench-Press",
        equipment: "Dumbells",
        repsSetOne: 0,
        weightSetOne: 0,
        repsSetTwo: 0,
        weightSetTwo: 0,
        repsSetThree: 0,
        weightSetThree: 0,
        notes: "",
    };

    const [state, setState] = useState(initialState);

    const handleInput = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setState((prev) => ({ ...prev, [inputName]: inputValue }));
    };

    const formatDate = (date) => {
        return date.split("-").reverse().join("/");
    };

    const calcOneRepMax = () => {
        const arr = [];
        arr.push(state.weightSetOne / (1.0278 - 0.0278 * state.repsSetOne));
        arr.push(state.weightSetTwo / (1.0278 - 0.0278 * state.repsSetTwo));
        arr.push(state.weightSetThree / (1.0278 - 0.0278 * state.repsSetThree));
        return Number(
            arr
                .sort(function (a, b) {
                    return b - a;
                })[0]
                .toFixed(2),
        );
    };

    const handleSubmit = () => {
        create(
            "workouts",
            formatDate(state.date),
            state.exercise,
            state.equipment,
            state.notes,
            state.repsSetOne,
            state.weightSetOne,
            state.repsSetTwo,
            state.weightSetTwo,
            state.repsSetThree,
            state.weightSetThree,
            calcOneRepMax(),
        );
    };

    return (
        <FormWrapper>
            <StyledInput
                type="date"
                name="date"
                value={state.date}
                onChange={handleInput}
            />
            <StyledSelect
                name="exercise"
                value={state.exercise}
                onChange={handleInput}>
                <option disabled>--Chest/Triceps--</option>
                <option value="Incline Bench-Press">Incline Bench-Press</option>
                <option value="Bench-Press">Bench-Press</option>
                <option value="Decline Bench-Press">Decline Bench-Press</option>
                <option value="Close-Grip Bench-Press">
                    Close-Grip Bench-Press
                </option>
                <option value="Chest Flyes">Chest Flyes</option>
                <option value="Tricep Extension">Tricep Extension</option>
                <option disabled>--Legs--</option>
                <option value="Deadlift">Deadlift</option>
                <option value="Goblet Squat">Goblet Squat</option>
                <option value="Leg Extension">Leg Extension</option>
                <option value="Leg Curl">Leg Curl</option>
                <option value="Calf Raise">Calf Raise</option>
                <option disabled>--Back/Biceps--</option>
                <option value="Row"> Row</option>
                <option value="Incline Row">Incline Row</option>
                <option value="Bent-Over Row">Bent-Over Row</option>
                <option value="Hammer Curl">Hammer Curl</option>
                <option value="Preacher Curl">Preacher Curl</option>
            </StyledSelect>
            <StyledSelect
                name="equipment"
                value={state.equipment}
                onChange={handleInput}>
                <option value="Dumbbells">Dumbbells</option>
                <option value="Machine">Machine</option>
            </StyledSelect>
            <p>Set 1</p>
            <StyledInput
                type="number"
                name="repsSetOne"
                value={state.repsSetOne}
                onChange={handleInput}
            />
            <StyledInput
                type="number"
                name="weightSetOne"
                value={state.weightSetOne}
                onChange={handleInput}
            />
            <p>Set 2</p>
            <StyledInput
                type="number"
                name="repsSetTwo"
                value={state.repsSetTwo}
                onChange={handleInput}
            />
            <StyledInput
                type="number"
                name="weightSetTwo"
                value={state.weightSetTwo}
                onChange={handleInput}
            />
            <p>Set 3</p>
            <StyledInput
                type="number"
                name="repsSetThree"
                value={state.repsSetThree}
                onChange={handleInput}
            />
            <StyledInput
                type="number"
                name="weightSetThree"
                value={state.weightSetThree}
                onChange={handleInput}
            />
            <StyledTextArea
                onChange={handleInput}
                name="notes"
                value={state.notes}
                rows="5"></StyledTextArea>
            <StyledButton onClick={handleSubmit}>Submit</StyledButton>
        </FormWrapper>
    );
};

export default WorkoutForm;
