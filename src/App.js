import React, { Component } from "react";
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
        {/* 300 ms */}
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("onEnter")}
          onEntering={() => console.log("onEntering")}
          onEntered={() => console.log("onEntered")}
          onExiting={() => console.log("onExiting")}
          onExited={() => console.log("onExited")}
          onExit={() => console.log("onExit")}
        >
          {state => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exiting" ? 0 : 1
              }}
            ></div>
          )}
        </Transition>
        <Modal show={!this.state.closed} closed={this.toggleModalHandler} />
        {!this.state.closed ? <Backdrop show={!this.state.closed} /> : null}
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
