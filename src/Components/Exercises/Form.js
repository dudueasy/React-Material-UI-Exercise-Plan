import React from 'react'

import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"


export default class Form extends React.Component {

  state = this.getInitialState()

  getInitialState() {
    const {currentExercise} = this.props

    return currentExercise
      ? currentExercise
      :
      {
        id: "",
        title: "",
        description: "",
        muscles: ""
      }
  }


  // create a exercise, passing a newExercise obj.
  handleSubmit = () => {

    // create a exercise Object for onCreate()
    this.props.onSubmit({
      id: this.state.title.toLowerCase().replace(/ /g, "-"),
      ...this.state,
    })
  }

  // handleChange function receive an Event as parameter
  handleChange = ({target: {name, value}}) => {
    console.log("handleChange triggered")
    this.setState(
      {[name]: value},
      () => {
        console.log('state is updated')
      }
    )
  }

  // handleChange = name =>( {target:{value}}) =>
  //   this.setState({[name]: value})

  render() {
    const {title, muscles, description} = this.state
    const {classes, musclesList, width} = this.props
    console.log('musclesList:', musclesList)


    return (

      <form
      >
        <TextField
          label="Title"
          value={title}
          name={"title"}
          onChange={this.handleChange}
          margin="normal"
          fullWidth
        />
        <br/>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="age-simple">Muscles</InputLabel>
          <Select
            value={muscles}
            name="muscles"
            onChange={this.handleChange}
            inputProps={{
              name: "muscles"
            }}
          >

            {musclesList.map(muscle => (
              <MenuItem
                value={muscle} key={muscle}>
                {muscle}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br/>
        <TextField
          label="Description"
          fullWidth
          multiline
          rows="4"
          rowsMax="4"
          name="description"
          value={description}
          onChange={this.handleChange}
          margin="normal"
        />
        <br/>

        <Button color="primary"
                onClick={this.handleSubmit}
                disabled={!title || !muscles}
        >
          {this.props.currentExercise ? 'Edit' : 'Create'}
        </Button>
      </form>
    )

  }
}