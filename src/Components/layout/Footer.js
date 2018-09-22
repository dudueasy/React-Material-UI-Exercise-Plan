import React from "react"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Paper from "@material-ui/core/Paper"

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const category = this.props.category

    console.log(
      "message from Footer.js for musclesList",
      this.props.musclesList
    )

    // return tab index according to current this.props.category
    const selectedCategoryIndex = this.props.category
      ? this.props.musclesList.findIndex(muscle => muscle === category) + 1
      : 0

    return (
      <Paper>
        <Tabs
          value={selectedCategoryIndex}
          onChange={(e, index) => {
            this.props.handleCategorySelected(e, index)
          }}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" />
          {this.props.musclesList.map((muscle, i) => (
            <Tab label={muscle} key={muscle} />
          ))}
        </Tabs>
      </Paper>
    )
  }
}

