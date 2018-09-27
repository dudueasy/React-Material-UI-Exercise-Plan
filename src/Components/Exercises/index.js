import React, {Fragment} from "react"
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
import {Edit, Delete} from '@material-ui/icons/';
import {withStyles} from "@material-ui/core/styles"

import {withContext} from '../../context'
import Form from './Form'

const styles = theme => ({
    paper: {
      padding: 20,
      overflowY: "auto",
      [theme.breakpoints.up('sm')]: {
        marginTop: 5,
        height: 'calc( 100% - 10px) '
      },
      [theme.breakpoints.down('xs')]: {
        height: '100%'
      }
    },
    '@global': {
      'html': {
        'position': 'fixed '
      },
      'html, body, #root': {
        height: '100%',
        width: '100%'
      }
    },
    container: {
      [theme.breakpoints.up('sm')]:
        {
          height: 'calc( 100% - 64px - 48px) '
        }
      ,

      [theme.breakpoints.down('xs')]:
        {
          height: 'calc( 100% - 56px - 48px) '
        }
    }
    ,
    item: {
      [theme.breakpoints.down('xs')]:
        {
          height: '50%'
        }
    }
  }
)

const Exercise = ({
                    classes,
                    allExercises,
                    category,
                    musclesList,
                    onExerciseSelect,
                    currentExercise,
                    currentExercise: {
                      id,
                      title = "welcome",
                      description = " please select an exercise from the list on the left"
                    },
                    onDelete,
                    onExerciseSelectEdit,
                    editMode,
                    onExerciseEdit
                  }) => (

  <React.Fragment>
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={5} className={classes.item}>
        <Paper className={classes.paper}>
          {allExercises.map(
            ([muscle, currentMuscleRelatedExercises]) =>

              // applying filter base on props.category
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
                            onExerciseSelect(id)
                          }}
                          key={id}
                        >
                          <ListItemText primary={title}/>
                          <ListItemSecondaryAction>
                            <IconButton onClick={() =>
                             onExerciseSelectEdit(id)}>
                              <Edit/>
                            </IconButton>
                            <IconButton onClick={() => onDelete(id)}>
                              <Delete/>
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
      <Grid item xs={12} sm={7} className={classes.item}>
        <Paper className={classes.paper}>
          <Typography variant="display1"
                      gutterBottom>
            {title}
          </Typography>
          {editMode
            ? <Form
              onSubmit={onExerciseEdit}
              musclesList={musclesList}
              currentExercise={currentExercise}
              key={id}
              createMode={false}
            >
            </Form>
            :
            <Typography variant="subheading">
              {description}
            </Typography>
          }
        </Paper>
      </Grid>
    </Grid>
  </React.Fragment>
)

export default withContext(withStyles(styles)(Exercise))
