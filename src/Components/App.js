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
      editMode: false,
      mobileContentOpen: false
    }
  }

  // setState of category according to <Footer> <Tabs> onChange() triggered
  handleCategorySelect = (e, i) => {
    let selectedCategory = i === 0 ? "" : musclesList[i - 1]
    this.setState({category: selectedCategory})
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
      })

  }

  handleExerciseSelect = id => {
    this.setState(
      (state, props) => {
        return {
          currentExercise: state.exercisesArray.find(ex => {
            return ex.id === id
          }),
          editMode: false,
          mobileContentOpen: !this.state.mobileContentOpen
        }
      },
      () => {
<<<<<<< HEAD
        console.log("component get updated")
        console.log("mobileContentOpen open:", this.state.mobileContentOpen)
=======
>>>>>>> master
      }
    )
  }

  toggleMobileContentOpen = () => {
    this.setState({
      mobileContentOpen: !this.state.mobileContentOpen
    }, () => {
<<<<<<< HEAD
      console.log('mobileContentOpen:', this.state.mobileContentOpen)
=======
>>>>>>> master
    })
  }


  handleExerciseCreate = (newExercise, originalId) => {

    this.setState(({exercisesArray}) => ({
      currentExercise: newExercise,
      exercisesArray: [...exercisesArray, newExercise]
    }))
  }


  enterEditMode = () => {
    this.setState({editMode: !this.state.editMode})
  }

  // update specific exercise with new one
  handleExerciseEdit = (modifiedExercise, originalId) => {

    this.setState(({exercisesArray}) => ({
      editMode: !this.state.editMode,
      exercisesArray: [...exercisesArray.filter((ex) => {
        return ex.id !== originalId
      }), modifiedExercise],

      currentExercise: modifiedExercise,
    }))
  }

  // handle click on edit button, open a editable form
  handleExerciseSelectEditClick = id => {
    this.setState(({exercisesArray}) => (
        {
          editMode: true,
          mobileContentOpen: true,
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
    onExerciseSelectEdit: this.handleExerciseSelectEditClick,
    allExercises: getExercisesByMuscles(this.state.exercisesArray),
    toggleMobileContentOpen: this.toggleMobileContentOpen,
    enterEditMode: this.enterEditMode
  })

  render() {

    return (
      <Provider value={this.getContext()}>
        <Header/>

        <Exercises/>

        <Footer/>
      </Provider>
    )
  }
}
