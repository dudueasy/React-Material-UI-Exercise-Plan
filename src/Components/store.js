const muscles = ["full-body", "shoulders", "chest", "arms", "back", "legs"];

const exercisesArray = [
  {
    id: "rope jumping",
    title: "Rope Jumping",
    description: "Rope Jumping 15mins",
    muscles: "full-body",
  }
  ,
  {
    id: "overhead-press",
    title: "Overhead Press",
    description: "Delts exercise...",
    muscles: "shoulders",
  },
  {
    id: "dips",
    title: "Dips",
    description: "Triceps exercise...",
    muscles: "arms",
  },
  {
    id: "barbell-curls",
    title: "Barbell Curls",
    description: "Biceps exercise...",
    muscles: "arms",
  },
  {
    id: "bench-press",
    title: "Bench Press",
    description: "Chest exercise...",
    muscles: "chest",
  },
  {
    id: "pull-ups",
    title: "Pull Ups",
    description: "Back and biceps exercise...",
    muscles: "back",
  },
  {
    id: "deadlifts",
    title: "Deadlifts",
    description: "Back and leg exercise...",
    muscles: "back",
  },
  {
    id: "squats",
    title: "Squats",
    description: "Legs exercise...",
    muscles: "legs",
  },
];

// gEB function turn exercises data into an enumeratable array below :
//  [['shoulders', [practice1, practice2,...]], ['arms',[practice1, practice2...], ...]
function getExercisesByMuscles(exercises) {

  // initialMuscleRelatedExercises= {muscle1:[], muscle2:[],muscle3:[],...}
  const initialMuscleRelatedExercises = muscles.reduce((accumulator, muscle) => ({
      ...accumulator,
      [muscle]: [],
    }
  ), {});


  return Object.entries(
    exercises.reduce((accumulator, currentExercise) => {
      const {muscles} = currentExercise;
      accumulator[muscles] = [...accumulator[muscles], currentExercise];

      return accumulator;
    }, initialMuscleRelatedExercises),
  );
}

const exercisesKeyValueArray = getExercisesByMuscles(exercisesArray);

export {muscles, exercisesArray, getExercisesByMuscles};
