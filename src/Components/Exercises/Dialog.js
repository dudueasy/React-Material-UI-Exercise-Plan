import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import AddIcon from "@material-ui/icons/Add"

import Form from './Form'


export default class CreateDialog extends React.Component {
  state = {
    open: false,
  }

  handleClickToggle = () => {
    this.setState({open: !this.state.open})
  }

  handleFormSubmit = (exercise)=>{
    this.handleClickToggle()
    this.props.onCreate(exercise)
  }

  render() {
    const {open} = this.state
    const {musclesList, onCreate} = this.props

    return (
      <React.Fragment>
        <Button
          onClick={this.handleClickToggle}
          variant="fab"
          color="default"
          aria-label="add"
          mini
        >
          <AddIcon/>
        </Button>

        <Dialog
          open={open}
          onClose={this.handleClickToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create an exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>

            <Form
              musclesList={musclesList}
              onSubmit={this.handleFormSubmit }
            />

          </DialogContent>
        </Dialog>
      </React.Fragment>
    )
  }
}

