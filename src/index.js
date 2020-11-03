import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
class App extends React.Component {
  state = { lat: null, errMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }

  renderContent() {
    //How to render what i need

    //1. has lat but has no error message  == show lat an if state
    if (this.state.lat && !this.state.errMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    //2. has No lat but has error message == show err  an if state
    if (!this.state.lat && this.state.errMessage) {
      return <h1>{this.state.errMessage}</h1>;
    }
    //3. No lat and no error message == show loading   an return state
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return this.renderContent();
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
