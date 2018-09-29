import React from "react"
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core"

import { Add } from "@material-ui/icons"


import Form from './Form'
import {withContext} from '../../context'

@withContext
class CreateDialog extends React.Component {
  state = {
    open: false,
  }

  handleClickToggle = () => {
    this.setState({open: !this.state.open})
  }

  handleFormSubmit = (exercise) => {
    this.handleClickToggle()
    this.props.onCreate(exercise)
  }

  render() {
    const {open} = this.state
    const {musclesList} = this.props

    return (
      <React.Fragment>
      <Button
      onClick={this.handleClickToggle}
      variant="fab"
      color="secondary"
      aria-label="add"
      mini
      >
      <Add/>
      </Button>

      <Dialog
      open={open}
      onClose={this.handleClickToggle}
      aria-labelledby="form-dialog-title"
      fullWidth={true}
      maxWidth='sm'
      >
      <DialogTitle id="form-dialog-title">Create an exercise</DialogTitle>
      <DialogContent>
      <DialogContentText>
      Please fill out the form below
      </DialogContentText>

      <Form onSubmit={this.handleFormSubmit} currentExercise={null}/>

      </DialogContent>
      </Dialog>
      </React.Fragment>
    )
  }
}

export default CreateDialog
