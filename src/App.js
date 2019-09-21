import React, { Component, Fragment } from "react";
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    closed: true,
    showBlock: false
  };

  toggleModalHandler = () => {
    this.setState({ closed: !this.state.closed });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState(prevState => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        <Transition in={this.state.showBlock} timeout={300}>
          {/* 300 ms */}
          <div
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
              margin: "auto"
            }}
          ></div>
        </Transition>
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
