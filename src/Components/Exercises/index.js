import React, {Fragment} from "react"
import {
  Grid,
  Paper,
  Hidden,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core"

import {withStyles} from "@material-ui/core/styles"

import {withContext} from '../../context'
import LeftPane from './Exercise_layout/LeftPane'
import Content from './Exercise_layout/Content'


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
    },
  }
)

class Exercise extends React.Component {
  state = {
    mobileContentOpen: this.props.mobileContentOpen
  }

  toggleMobileContentOpen = () => {
    this.setState({
      mobileContentOpen: !this.state.mobileContentOpen
    })
  }


  render() {
    const {classes} = this.props
    return (

      <React.Fragment>
        <Grid container className={classes.container}>

          <Grid item xs={12} sm={5} className={classes.item}>
            <Paper className={classes.paper}>
              <LeftPane/>
            </Paper>
          </Grid>

          <Hidden xsDown>
            <Grid item sm={7} className={classes.item}>
              <Paper className={classes.paper}>
                <Content/>
              </Paper>
            </Grid>
          </Hidden>

          <Hidden smUp>
            <Dialog
              open={this.props.mobileContentOpen}
              onClose={this.props.toggleMobileContentOpen}
              fullWidth={true}
              maxWidth='sm'
            >
              <DialogContent>
                <Content/>

              </DialogContent>
            </Dialog>


          </Hidden>

        </Grid>
      </React.Fragment>
    )
  }
}

export default withContext(withStyles(styles)(Exercise))
