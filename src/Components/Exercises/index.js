import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core"

// import CommentIcon from '@material-ui/icons/Comment';
import Delete from '@material-ui/icons/Delete';


import React, {Fragment} from "react"

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 400,
    overflow: "auto"
  }
}
export default ({
                  allExercises,
                  category,
                  handleExerciseSelected,
                  currentExercise: {
                    id,
                    title = "welcome",
                    description = " please select an exercise from the list on the left"
                  },
                  onDelete

                }) => (
  <React.Fragment>
    <Grid container>
      <Grid item xs={5} sm={4}>
        <Paper style={styles.Paper}>
          {allExercises.map(
            ([muscle, currentMuscleRelatedExercises]) =>
              //             apply filter based on props.category
              !category || category === muscle ? (
                <Fragment key={muscle}>
                  <Typography
                    variant="headline"
                    style={{textTransform: "capitalize"}}
                  >
                    {muscle}
                  </Typography>
                  <List component="ul">
                    {currentMuscleRelatedExercises.map(({title, id}) => {
                      return (
                        <ListItem
                          button
                          onClick={() => {
                            handleExerciseSelected(id)
                          }}
                          key={id}
                        >
                          <ListItemText primary={title} />
                          <ListItemSecondaryAction>
                            <IconButton onClick={()=> onDelete(id) }>
                              <Delete />
                            </IconButton>

                          </ListItemSecondaryAction>

                        </ListItem>
                      )
                    })}
                  </List>
                </Fragment>
              ) : null
          )}
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper style={styles.Paper}>
          <Typography variant="display1">{title}</Typography>
          <Typography variant="subheading" style={{marginTop: 20}}>
            {description}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </React.Fragment>
)
