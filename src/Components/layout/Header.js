import React from "react"
import {
  AppBar, Toolbar, Typography, CssBaseline
}
  from "@material-ui/core"

import {withStyles} from "@material-ui/core/styles"

import CreateDialog from "../Exercises/Dialog"

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
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
           Traineer
          </Typography>
          <CreateDialog/>
        </Toolbar>
      </AppBar>
    </div>
  )
}


export default withStyles(styles)(ButtonAppBar)
