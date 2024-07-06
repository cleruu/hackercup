"use client"
// App.jsx
import React, { useState } from 'react';
import './App.css';

function connections() {
  const initialGrid = [
    'Apple', 'Lion', 'Rome', 'Guitar',
    'Soccer', 'Winter', 'Democracy', 'Pyramid',
    'Algebra', 'Mystery', 'Picasso', 'Saturn',
    'Samurai', 'Sherlock', 'Symphony', 'Espresso'
  ];

  const [grid, setGrid] = useState(initialGrid);
  const [selectedWords, setSelectedWords] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(4);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [correctGroup, setCorrectGroup] = useState([]);

  const handleWordClick = (word) => {
    if (selectedWords.length < 4 && !selectedWords.includes(word)) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleSubmit = () => {
    if (selectedWords.length === 4) {
      // Example check for correctness: all words starting with the same letter
      const firstLetter = selectedWords[0][0];
      const correct = selectedWords.every(word => word[0] === firstLetter);

      if (correct) {
        setScore(score + 1);
        setGrid(grid.filter(word => !selectedWords.includes(word)));
        setSelectedWords([]);
        setFeedbackMessage('Correct!');
        setCorrectGroup([...selectedWords]);
      } else {
        setLives(lives - 1);
        setFeedbackMessage('Incorrect! Try again.');
        setSelectedWords([]); // Reset selected words on incorrect answer
        setCorrectGroup([]);
      }
    } else {
      setFeedbackMessage('Please select 4 words.');
    }
  };

  const resetGame = () => {
    setScore(0);
    setLives(4);
    setSelectedWords([]);
    setFeedbackMessage('');
    setCorrectGroup([]);
    setGrid(initialGrid);
  };

  return (
    <div className="App">
      <header>
        <h1>Connections Game</h1>
        <p>Score: {score} | Lives: {lives}</p>
        {lives === 0 && <p>Game Over!</p>}
        <button onClick={resetGame}>Reset Game</button>
      </header>

      <div className="game-container">
        <div className="word-grid">
          {grid.map((word, index) => (
            <div
              key={index}
              className={`word ${selectedWords.includes(word) ? 'selected' : ''}`}
              onClick={() => handleWordClick(word)}
            >
              {word}
            </div>
          ))}
        </div>

        <div className="submit-section">
          <button onClick={handleSubmit} className="submit-button">Submit</button>
          {feedbackMessage && <div className="feedback">{feedbackMessage}</div>}
        </div>

        <div className="correct-group">
          {correctGroup.length > 0 && (
            <div>
              <p>Correct Group:</p>
              <ul>
                {correctGroup.map((word, index) => (
                  <li key={index}>{word}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default connections;