<<<<<<< HEAD
import React, {Fragment} from 'react'
=======
import React, {Fragment} from 'react';
>>>>>>> master
import {
  Typography,
  Button,
  CardHeader,
  CardContent,
<<<<<<< HEAD
} from "@material-ui/core"

import {withStyles} from "@material-ui/core/styles"

import {withContext} from '../../../context'
import Form from '../Form'
=======
} from "@material-ui/core";

import {withStyles} from "@material-ui/core/styles";

import {withContext} from '../../../context';
import Form from '../Form';
>>>>>>> master

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
<<<<<<< HEAD
        description = " please select an exercise from the list on the left"
=======
        description = " please select an exercise from the list on the left",
>>>>>>> master
      },
      enterEditMode,
      editMode,
      onExerciseEdit,
      currentExercise,
      musclesList,
<<<<<<< HEAD
      mobileContentOpen
    } = this.props
=======
      mobileContentOpen,
    } = this.props;
>>>>>>> master

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
<<<<<<< HEAD
                <Typography component="body2">
                  {description}
                </Typography>
=======
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
>>>>>>> master
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
<<<<<<< HEAD
    )
  }
}

export default Content
=======
    );
  }
}

export default Content;
>>>>>>> master
