import React, { Component, Fragment } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    closed: true
  };

  toggleModalHandler = () => {
    this.setState({ closed: !this.state.closed });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {!this.state.closed ? (
          <Fragment>
            <Modal show={!this.state.closed} closed={this.toggleModalHandler} />
            <Backdrop show={!this.state.closed} />
          </Fragment>
        ) : null}

        <button className="Button" onClick={this.toggleModalHandler}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
