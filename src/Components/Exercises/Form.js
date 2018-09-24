import React from 'react'

import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

import {withStyles} from "@material-ui/core/styles"

const styles = theme => ({
  FormControl: {
    width: 500
  },
  Select: {
    width: 300
  }
})

export default withStyles(styles)(class Form extends React.Component {

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


  // create a exercise, pass a specificExercise obj.
  handleSubmit = () => {

    // create a exercise Object for onCreate()
    this.props.onSubmit({
      id: this.state.title.toLowerCase().replace(/ /g, "-"),
      ...this.state,
    })

    // clean current form data  &&  close <Dialog>
    this.setState(this.getInitialState())
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
    const {classes, musclesList} = this.props
    console.log('musclesList:', musclesList)


    return (

      <form>
        <TextField
          label="Title"
          value={title}
          name={"title"}
          onChange={this.handleChange}
          margin="normal"
          className={classes.FormControl}
        />
        <br/>
        <FormControl className={classes.FormControl}>
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
              <MenuItem value={muscle} key={muscle}>
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
          className={classes.FormControl}
        />
        <br/>

        <Button color="primary" onClick={this.handleSubmit}>
          {this.props.currentExercise ? 'Edit' : 'Create'}
        </Button>
      </form>
    )

  }
})
