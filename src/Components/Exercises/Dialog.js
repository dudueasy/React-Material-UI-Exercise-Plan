import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import AddIcon from "@material-ui/icons/Add"

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
          <AddIcon/>
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
