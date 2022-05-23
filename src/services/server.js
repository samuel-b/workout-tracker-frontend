import firestore from "./../firebase.js";
//CREATE
export const create = (
    collectionName,
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
    estOneRepMax,
) => {
    firestore.collection(collectionName).add({
        date: date,
        exercise: exercise,
        equipment: equipment,
        notes: notes,
        estOneRepMax: estOneRepMax,
        setss: [
            {
                reps: Number(repsSetOne),
                set: 1,
                weight: Number(weightSetOne),
            },
            {
                reps: Number(repsSetTwo),
                set: 2,
                weight: Number(weightSetTwo),
            },
            {
                reps: Number(repsSetThree),
                set: 3,
                weight: Number(weightSetThree),
            },
        ],
    });
};

//READ
export const getAll = async (collectionName) => {
    const collectionRef = firestore.collection(collectionName);

    const queryData = await collectionRef.get();

    const documents = queryData.docs;

    const data = documents.map((doc) => ({ id: doc.id, ...doc.data() }));

    return data;
};

//UPDATE

//DELETE
