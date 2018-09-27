import React from "react"
import PropTypes from "prop-types"
import {
  withStyles, AppBar, Toolbar, Typography, CssBaseline
}
  from "@material-ui/core"

import CreateDialog from "../Exercises/Dialog"

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}


function ButtonAppBar(props) {
  const {classes} = props
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar position="relative">
        <Toolbar>
          <Typography
            variant="headline"
            color="inherit"
            className={classes.flex}
          >
            Exercise
          </Typography>
          <CreateDialog/>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
