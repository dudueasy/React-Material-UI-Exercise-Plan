import React, {Fragment} from 'react'
import {
  Typography,
  Button,
  CardHeader,
  CardContent,
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
              <CardHeader title={title} subheader={muscles}/>
              <CardContent>
                <Typography color="textSecondary">
                  Description
                </Typography>
                <Typography component="body2">
                  {description}
                </Typography>
                <Button color="primary" onClick={enterEditMode} style={{marginTop: 10}}>
                  Edit
                </Button>
              </CardContent>
            </Fragment>
            :

            ( <Fragment>
                <CardHeader title={title}>
                </CardHeader>
                <CardContent>

                  <Typography component="p" gutterBottom>
                    {description}
                  </Typography>
                </CardContent>
              </Fragment>
            )

        }

      </Fragment>
    )
  }
}

export default Content
