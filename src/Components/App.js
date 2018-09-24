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
      category: "",
      editMode: false
    }
  }

  // setState of category according to <Footer> <Tabs> onChange() triggered
  handleCategorySelect = (e, i) => {
    let selectedCategory = i === 0 ? "" : musclesList[i - 1]
    this.setState({category: selectedCategory})
  }


  // take a specificExercise as parameter, insert this specificExercise into  exercisesArray
  handleExerciseCreate = exercise => {
    this.setState(({exercisesArray}) => ({
      exercisesArray: [...exercisesArray, exercise]
    }))
  }

  handleExerciseDelete = id => {
    this.setState(({exercisesArray}) => (
        {
          exercisesArray: exercisesArray.filter(exercise => exercise.id !== id),
          editMode: false,
          currentExercise: {},
        }
      ),
      () => {
        console.log('exercise is deleted ')
      })

  }

  handleExerciseSelect = id => {
    this.setState(
      (state, props) => {
        return {
          currentExercise: state.exercisesArray.find(ex => {
            return ex.id === id
          }),
          editMode:false
        }
      },
      () => {
        console.log("component get updated")
      }
    )
  }




  handleExerciseCreate = exercise => {
    this.setState(({exercisesArray}) => ({
      exercisesArray: [...exercisesArray, exercise]
    }))
  }
  // handleExerciseCreate = exercise => {
  //   this.setState(({exercisesArray}) => ({
  //     exercisesArray: [...exercisesArray, exercise]
  //   }))
  // }

  // update specific exercise with new one
  handleExerciseEdit = exercise => {
    this.setState(({exercisesArray}) => ({
      editMode: !this.state.editMode,
      exercisesArray: [... exercisesArray.filter((ex) => {
        return ex.id !== exercise.id
      }), exercise],
      exercise
    }))
  }

  handleExerciseSelectEdit = id => {
    this.setState(({exercisesArray}) => (
        {
          editMode: true,
          currentExercise: exercisesArray.find(ex => {
            return ex.id === id
          })
        }
      )
    )
  }

  render() {
    const {category, exercisesArray, currentExercise, editMode} = this.state
    const allExercises = getExercisesByMuscles(exercisesArray)

    return (
      <div>
        <Header
          onExerciseCreate={this.handleExerciseCreate}
          musclesList={musclesList}
        />
        <Exercises
          currentExercise={currentExercise}
          category={category}
          musclesList={musclesList}
          allExercises={allExercises}
          handleExerciseSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
          editMode={editMode}
          onEdit={this.handleExerciseEdit}
        />

        <Footer
          musclesList={musclesList}
          handleCategorySelect={this.handleCategorySelect}
          category={category}
        />
      </div>
    )
  }
}
