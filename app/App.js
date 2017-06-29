import React from "react";
import ReactDOM from "react-dom";
import Main from "./Components/Main"


class App extends React.Component {
  
  render() {
    return (

      <Main title="MainPage"/>

    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

