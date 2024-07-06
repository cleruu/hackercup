// components/QuizContainer.js
"use client"
import React, { useState } from "react";
import Link from 'next/link';

const QuizContainer = ({ quizType, isAnswered }) => {
  const [dynamicNumber, setDynamicNumber] = useState(1);

  return (
    //Container for quiz
    <div className="px-50vw bg-gray-100 border border-gray-300 rounded-lg p-4 mb-4 max-w-xs">
      <div //State circle (unswared or not)
        className={`py-2 px-2 rounded-full text-white ${
          isAnswered ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {isAnswered ? "Answered" : "Not Answered"}
      </div>
      <div className="text-lg font-bold mt-2 mb-2">
        Reading - Quiz - 1
      </div>
      <div className="mb-2">
        <span className="font-bold">QUIZTYPE: Text analysis</span> {quizType}
      </div>
      <Link href="/kahoot">Open Quiz 1</Link>
        
        <div>
          ---------------
        </div>
        <div>
          ---------------
        </div>

      <div //State circle (unswared or not)
        className={`py-2 px-2 rounded-full text-white ${
          isAnswered ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {isAnswered ? "Answered" : "Not Answered"}
      </div>
      <div className="text-lg font-bold mt-2 mb-2">
        Reading - Quiz - 2
      </div>
      <div className="mb-2">
        <span className="font-bold">QUIZTYPE: Synoynm Antonym</span> {quizType}
      </div>
      <Link href="/ant-syn">Open Quiz 2</Link>

      <div>
          ---------------
        </div>
        <div>
          ---------------
        </div>

      <div //State circle (unswared or not)
        className={`py-2 px-2 rounded-full text-white ${
          isAnswered ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {isAnswered ? "Answered" : "Not Answered"}
      </div>
      <div className="text-lg font-bold mt-2 mb-2">
        Reading - Quiz - 3
      </div>
      <div className="mb-2">
        <span className="font-bold">QUIZTYPE: Connectionss</span> {quizType}
      </div>
      <Link href="/connections">Open Quiz</Link>
    </div>
    
  );
};

export default QuizContainer;
