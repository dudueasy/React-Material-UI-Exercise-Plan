import React, {Fragment} from 'react'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core"

import {Edit, Delete} from "@material-ui/icons"

import {withContext} from '../../../context'

const LeftPane = ({
                    allExercises,
                    category,
                    currentExercise: {
                      id,
                      title = "welcome",
                      description = " please select an exercise from the list on the left"
                    },
                    musclesList,
                    onExerciseSelect,
                    currentExercise,
                    onDelete,
                    onExerciseSelectEdit,
                    editMode,
                    onExerciseEdit
                  }) =>
  <Fragment>
    {allExercises.map(
      ([muscle, currentMuscleRelatedExercises]) => (

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
      )
    )}
  </Fragment>


export default withContext(LeftPane)