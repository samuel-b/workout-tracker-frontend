import WorkoutChart from "./WorkoutChart";

const WorkoutChartList = ({ data }) => {
    let funArr = [];
    const testFunc = (exercise) => {
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
        <>
            {funArr.map((item) => {
                    return <WorkoutChart key={item.id} item={item} />;
            })}
        </>
    );
};

export default WorkoutChartList;