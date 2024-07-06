"use client"
// App.js

import React, { useState } from 'react';
import './App.css';


const questions = [
    {
      question: 'What is the capital of France?',
      options: [
        { text: 'London', colorClass: 'option-red' },
        { text: 'Paris', colorClass: 'option-blue' },
        { text: 'Berlin', colorClass: 'option-yellow' },
        { text: 'Madrid', colorClass: 'option-green' }
      ],
      correctAnswer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: [
        { text: 'Earth', colorClass: 'option-red' },
        { text: 'Mars', colorClass: 'option-blue' },
        { text: 'Venus', colorClass: 'option-yellow' },
        { text: 'Jupiter', colorClass: 'option-green' }
      ],
      correctAnswer: 'Mars'
    }
    // Add more questions as needed
  ];
  
  function kahoot() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
    };
  
    const handleNextQuestion = () => {
      // Check if answer is correct and update score
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
      // Move to the next question
      setSelectedOption('');
      setCurrentQuestion(currentQuestion + 1);
    };
  
    return (
      <div className="App">
        <h1>Kahoot-style Quiz Game</h1>
        {currentQuestion < questions.length ? (
          <div>
            <h2>Question {currentQuestion + 1}:</h2>
            <p>{questions[currentQuestion].question}</p>
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index}>
                  <button
                    onClick={() => handleOptionSelect(option.text)}
                    className={`option-button ${option.colorClass} ${selectedOption === option.text ? 'selected' : ''}`}
                    disabled={selectedOption !== ''}
                  >
                    {option.text}
                  </button>
                </div>
              ))}
            </div>
            <button onClick={handleNextQuestion} disabled={selectedOption === ''}>
              Next Question
            </button>
          </div>
        ) : (
          <div>
            <h2>Quiz Complete!</h2>
            <p>Your score: {score}</p>
          </div>
        )}
      </div>
    );
  }
  
  export default kahoot;