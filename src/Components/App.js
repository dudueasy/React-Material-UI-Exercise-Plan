import React from "react"
import {Header, Footer} from "./layout"
import Exercises from "./Exercises"
import {
  muscles as musclesList,
  exercisesArray,
  getExercisesByMuscles
} from "./store"
import {Provider} from '../context'

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
    this.setState(({exercisesArray, currentExercise, editMode}) => (
        {
          exercisesArray: exercisesArray.filter(exercise => exercise.id !== id),
          editMode: id === currentExercise.id ? false : editMode,
          currentExercise: id === currentExercise.id ? {} : currentExercise,
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
          editMode: false
        }
      },
      () => {
        console.log("component get updated")
      }
    )
  }


  handleExerciseCreate = exercise => {
    console.log('newExercise  :', exercise)

    this.setState(({exercisesArray}) => ({
      currentExercise: exercise,
      exercisesArray: [...exercisesArray, exercise]
    }))
  }

  // update specific exercise with new one
  handleExerciseEdit = exercise => {
    console.log('newExercise  :', exercise)

    this.setState(({exercisesArray}) => ({
      currentExercise: exercise,
      editMode: !this.state.editMode,
      exercisesArray: [... exercisesArray.filter((ex) => {
        return ex.id !== exercise.id
      }), exercise],
      exercise
    }))
  }

  // open a editable form
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

  getContext = () => ({
    musclesList,
    ...this.state,
    onCreate: this.handleExerciseCreate,
    onCategorySelect: this.handleCategorySelect,
    onDelete: this.handleExerciseDelete,
    onExerciseSelect: this.handleExerciseSelect,
    onExerciseEdit: this.handleExerciseEdit,
    onExerciseSelectEdit: this.handleExerciseSelectEdit,
    allExercises: getExercisesByMuscles(this.state.exercisesArray)
  })

  render() {
    // const {category, exercisesArray, currentExercise, editMode} = this.state
    // const allExercises = getExercisesByMuscles(exercisesArray)

    return (
      <Provider value={this.getContext()}>
        <Header/>

        <Exercises/>

        <Footer/>
      </Provider>
    )
  }
}
