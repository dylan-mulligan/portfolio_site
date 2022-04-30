import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Game from "./Game";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <div className='container'>
    <div className='vertical-center'>
      <header>
        <h4>Tic-Tac-Toe</h4>
      </header>
      <div className='container'>
        <Game />
      </div>
      <footer>
        <div>Created By: Dylan Mulligan</div>
        <button
          className={'icon-button'}
          onClick={() => window.open("https://github.com/dylan-mulligan")}
        >
          <img className='icon' src='github-icon.png'/>
        </button>
      </footer>
    </div>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
