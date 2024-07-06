import React from "react";
import "./App.css";

const antsyn = () => {
  return (
    <div className="App">
      <header className="rectangle">
        <p className="rectangle-text">Synonym and Antonym</p>
        <div className="answer-box">
          <p className="answer-box-text">
            The word "happy" is a synonym of which of the following words?
          </p>
          <div className="button-container">
            <button className="button">A) Sad</button>
            <button className="button">B) Joyful</button>
            <button className="button">C) Angry</button>
            <button className="button">D) Confused</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default antsyn;