import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import AddIcon from "@material-ui/icons/Add"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  FormControl: {
    width: 500
  },
  Select: {
    width: 300
  }
})

export default withStyles(styles)(
  class CreateDialog extends React.Component {
    state = {
      open: false,
      exercise: {
        id: "",
        title: "",
        description: "",
        muscles: ""
      }
    }

    handleClickToggle = () => {
      this.setState({ open: !this.state.open })
    }

    handleChange = ({ target: { name, value } }) => {
      console.log("handleChange triggered")
      this.setState(
        {
          exercise: {
            ...this.state.exercise,
            [name]: value
          }
        },
        () => {
          console.log(this.state.exercise)
        }
      )
    }

    // create a exercise
    handleSubmit = () => {
      const { exercise } = this.state

      // create a exercise Object for onCreate()
      this.props.onCreate({
        ...exercise,
        id: exercise.title.toLowerCase().replace(/ /g, "-")
      })

      // clean current form data  &&  close <Dialog>
      this.setState({
        open: false,
        exercise: {
          id: "",
          title: "",
          description: "",
          muscles: ""
        }
      })
    }

    render() {
      const { title, description, muscles } = this.state.exercise
      const { classes, musclesList } = this.props

      return (
        <React.Fragment>
          <Button
            onClick={this.handleClickToggle}
            variant="fab"
            color="default"
            aria-label="add"
            mini
          >
            <AddIcon />
          </Button>

          <Dialog
            open={this.state.open}
            onClose={this.handleClickToggle}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Create an exercise</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill out the form below
              </DialogContentText>
              <form>
                <TextField
                  label="Title"
                  value={title}
                  name={"title"}
                  onChange={this.handleChange}
                  margin="normal"
                  className={classes.FormControl}
                />
                <br />
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
                <br />
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
              </form>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={this.handleSubmit}>
                create
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      )
    }
  }
)
