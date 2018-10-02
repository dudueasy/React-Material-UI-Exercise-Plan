import React, {Fragment} from 'react'
import {
  Typography,
  Button
} from "@material-ui/core"

import {withStyles} from "@material-ui/core/styles"

import {withContext} from '../../../context'
import Form from '../Form'

const styles = {
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

@withContext
@withStyles(styles)
class Content extends React.Component {


  render() {

    const {
      classes,
      currentExercise: {
        id,
        title = "welcome",
        muscles,
        description = " please select an exercise from the list on the left"
      },
      enterEditMode,
      editMode,
      onExerciseEdit,
      currentExercise,
      musclesList,
      mobileContentOpen
    } = this.props

    return (
      <Fragment>

        {editMode
          ?
          <Form
            onSubmit={onExerciseEdit}
            musclesList={musclesList}
            currentExercise={currentExercise}
            key={id}
            createMode={false}
          />
          : id ? <Fragment>
              <Typography variant="headline" component="h2" gutterBottom>
                {title}
              </Typography>
              <Typography color="textSecondary">
                Muscles
              </Typography>
              <Typography variant="headline" component="h2" gutterBottom>
                {muscles}
              </Typography>
              <Typography color="textSecondary">
                description
              </Typography>
              <Typography component="p">
                {description}
              </Typography>
              <Button color="primary" onClick={enterEditMode} style={{marginTop:10}}>
                Edit
              </Button>
            </Fragment>
            :

            ( <Fragment>
                <Typography variant="headline" component="h2" gutterBottom>
                  {title}
                </Typography>

                <Typography  component="p" gutterBottom>
                  {description}
                </Typography>
              </Fragment>
            )

        }

      </Fragment>
    )
  }
}

export default Content
