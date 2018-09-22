import React from "react"
import ReactDOM from "react-dom"
import App from "./Components/App.js"


if(module.hot) {
  module.hot.accept();
}


const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
