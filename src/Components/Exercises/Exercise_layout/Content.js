import React, {Fragment} from 'react';
import {
  Typography,
  Button,
  CardHeader,
  CardContent,
} from "@material-ui/core";

import {withStyles} from "@material-ui/core/styles";

import {withContext} from '../../../context';
import Form from '../Form';

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
        description = " please select an exercise from the list on the left",
      },
      enterEditMode,
      editMode,
      onExerciseEdit,
      currentExercise,
      musclesList,
      mobileContentOpen,
    } = this.props;

    return (
      <Fragment>

        {editMode
          ?
          <CardContent>
            <Form
              onSubmit={onExerciseEdit}
              musclesList={musclesList}
              currentExercise={currentExercise}
              key={id}
              createMode={false}
            />
          </CardContent>
          : id ? <Fragment>
              <CardHeader title={title} subheader={muscles}/>
              <CardContent>
                {
                  (description.split(/\n/)).map((desc, index) => (
                      desc ?
                        <Typography variant="body1" key={index}>
                          {desc}
                        </Typography>
                        :
                        <br key={index}/>
                    ),
                  )
                }
                <Button color="primary" onClick={enterEditMode} style={{marginTop: 10}}>
                  Edit
                </Button>
              </CardContent>
            </Fragment>
            :

            ( <Fragment>
                <CardHeader title={title} subheader={muscles}>
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
    );
  }
}

export default Content;
