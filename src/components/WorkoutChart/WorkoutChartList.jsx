import WorkoutChart from "./WorkoutChart";
import StyledWorkoutChartList from "./StyledWorkoutChartList";

const WorkoutChartList = ({ data }) => {
    let funArr = [];
    const testFunc = (exercise) => {
        //Sorts data by data.date (DD/MM/YY) in ascending order to label/display charts correctly.
        data.sort((a, b) => {
            const aa = a.date.split("/").reverse().join();
            const bb = b.date.split("/").reverse().join();
            return aa < bb ? -1 : aa > bb ? 1 : 0;
        });
        let oneRmArr = [];
        let dateArr = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].exercise === exercise) {
                oneRmArr.push(data[i].estOneRepMax);
                dateArr.push(data[i].date);
            }
        }
        let exerciseObj = {
            exercise: exercise,
            oneRmArr: oneRmArr,
            dateArr: dateArr,
        };
        funArr.push(exerciseObj);
    };

    for (let i = 0; i < data.length; i++) {
        testFunc(data[i].exercise);
    }

    //Removes duplicates from array
    //https://stackoverflow.com/questions/40784330/remove-objects-in-array-with-duplicate-properties
    funArr = funArr.filter(function (el) {
        if (!this[el.exercise]) {
            this[el.exercise] = true;
            return true;
        }
        return false;
    }, Object.create(null));

    return (
        <StyledWorkoutChartList>
            {funArr.map((item, index) => {
                return <WorkoutChart key={index} item={item} />;
            })}
        </StyledWorkoutChartList>
    );
};

export default WorkoutChartList;
