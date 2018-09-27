import React from "react"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Paper from "@material-ui/core/Paper"
import withWidth, {isWidthUp} from '@material-ui/core/withWidth';
import {withContext} from "../../context"


export default withContext(
  withWidth()(
    class Footer extends React.Component {
      constructor(props) {
        super(props)
        this.state = {}
      }

      render() {
        const {category, width} = this.props

        // return tab index according to current this.props.category
        const selectedCategoryIndex = this.props.category
          ? this.props.musclesList.findIndex(muscle => muscle === category) + 1
          : 0

        return (
          <Paper>
            <Tabs
              value={selectedCategoryIndex}
              onChange={(e, index) => {
                this.props.onCategorySelect(e, index)
              }}
              indicatorColor="primary"
              textColor="primary"
              centered={width !== 'xs'}
              scrollable={width === 'xs'}
            >
              <Tab label="All"/>
              {this.props.musclesList.map((muscle, i) => (
                <Tab label={muscle} key={muscle}/>
              ))}
            </Tabs>
          </Paper>
        )
      }
    }
  )
)
