import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CodeBlock from "./components/CodeBlock/CodeBlock";

class App extends Component() {
  state = {
    pages: ["CodeBlock", "TodoList"],
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Starter - React Components Practice</h2>
          <a
            class="code-link"
            target="blank"
            href="https://github.com/santhoshsoundar/react-comp-prac"
          >
            {"<GitHub>"}
          </a>
        </header>
        <div className="content">
          {/* <CodeBlock /> */}
          <div className="pages-panel">
            {/* {pages.map((this.page) => (
              <span className="page-highlight">{page}</span>
            ))} */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
