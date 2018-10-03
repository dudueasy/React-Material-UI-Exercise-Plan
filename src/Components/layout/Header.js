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
  Appbar:{
    background: 'linear-gradient( left, rgba(229, 73, 45, 0.97)20%, rgb(251, 200, 195)70%,rgb(246, 172, 160) 100%)',
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
      <AppBar position="relative"   className={classes.Appbar}>
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
