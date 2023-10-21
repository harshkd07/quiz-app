import React, { useState } from 'react';

const questions = [
  {
    question: 'What does CPU stand for in the context of computer technology?',
    options: ['Central Process Unit', 'Computer Processing Unit', 'Central Processing Unit', 'Central Program Unit'],
    correctAnswer: 'Central Processing Unit',
  },
  {
    question: 'Which programming language is commonly used for building web applications and websites?',
    options: ['Java', 'HTML', 'Python', ' C++'],
    correctAnswer: 'HTML',
  },
  {
    question: 'What does "URL" stand for in the context of the internet?',
    options: ['Universal Resource Locator', 'Uniform Resource Locator', 'Unique Resource Locator', ' Unified Resource Locator'],
    correctAnswer: 'Uniform Resource Locator',
  },
  {
    question: 'Which of the following is NOT a type of cloud service model?',
    options: ['Infrastructure as a Service (IaaS)', 'Software as a Service (SaaS)', 'Platform as a Service (PaaS)', 'Internet as a Service (InaaS)'],
    correctAnswer: 'Internet as a Service (InaaS)',
  },
  // Add more questions and options
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {showResult ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Quiz Results</h2>
          <p className="text-lg mt-4">Your score: {score} out of {questions.length}</p>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold">  Q: {questions[currentQuestion].question}</h2>
          <div className="mt-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="bg-gray-200 hover:bg-gray-300 rounded p-2 m-2"
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
