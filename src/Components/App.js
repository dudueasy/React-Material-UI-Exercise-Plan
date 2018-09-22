import React from "react"
import {Header, Footer} from "./layout"
import Exercises from "./Exercises"
import {
  muscles as musclesList,
  exercisesArray,
  getExercisesByMuscles
} from "./store"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      exercisesArray: exercisesArray,
      currentExercise: {},
      category: ""
    }
  }

  // setState of category according to <Footer> <Tabs> onChange() triggered
  handleCategorySelected = (e, i) => {
    let selectedCategory = i === 0 ? "" : musclesList[i - 1]
    this.setState({category: selectedCategory})
  }

  handleExerciseSelected = id => {
    this.setState(
      (state, props) => {
        return {
          currentExercise: state.exercisesArray.find(ex => {
            return ex.id === id
          })
        }
      },
      () => {
        console.log("component get updated")
      }
    )
  }

  handleExerciseCreated = exercise => {
    this.setState(({exercisesArray}) => ({
      exercisesArray: [...exercisesArray, exercise]
    }))
  }

  handleExerciseDelete = id => {
    this.setState(({exercisesArray}) => (
        {exercisesArray: exercisesArray.filter(exercise => exercise.id !== id)}
      ),
      () => {
        console.log('exercise is deleted ')
      })

  }

  render() {
    const {category, exercisesArray, currentExercise} = this.state
    const allExercises = getExercisesByMuscles(exercisesArray)

    return (
      <div>
        <Header
          onExerciseCreate={this.handleExerciseCreated}
          musclesList={musclesList}
        />
        <Exercises
          currentExercise={currentExercise}
          category={category}
          allExercises={allExercises}
          handleExerciseSelected={this.handleExerciseSelected}
          onDelete={this.handleExerciseDelete}
        />

        <Footer
          musclesList={musclesList}
          handleCategorySelected={this.handleCategorySelected}
          category={category}
        />
      </div>
    )
  }
}
