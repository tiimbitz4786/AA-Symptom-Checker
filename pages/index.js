import React, { useState } from 'react';
import Head from 'next/head';

const questions = [
  "Have you ever decided to stop drinking for a week or so, but only lasted for a couple of days?",
  "Do you wish people would mind their own business about your drinking and stop telling you what to do?",
  "Have you ever switched from one kind of drink to another in the hope that this would keep you from getting drunk?",
  "Have you had to have an eye-opener upon awakening during the past year?",
  "Do you envy people who can drink without getting into trouble?",
  "Have you had problems connected with drinking during the past year?",
  "Has your drinking caused trouble at home?",
  "Do you ever try to get extra drinks at a party because you do not get enough?",
  "Do you tell yourself you can stop drinking any time you want to, even though you keep getting drunk when you don't mean to?",
  "Have you missed days of work or school because of drinking?",
  "Do you have blackouts (memory gaps) from drinking?",
  "Have you ever felt that your life would be better if you did not drink?"
];

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [started, setStarted] = useState(false);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const yesCount = answers.filter(a => a === 'yes').length;

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setStarted(false);
  };

  if (!started) {
    return (
      <>
        <Head>
          <title>Is AA For You? - Self Assessment Quiz</title>
          <meta name="description" content="A confidential self-assessment quiz to help you evaluate your relationship with alcohol." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">AA</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Is AA For You?</h1>
              <p className="text-gray-600">A Self-Assessment Quiz</p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                Only you can decide whether you want to give AA a try — whether you think it can help you. 
                The following questions are based on the experience of AA members. Answer them as honestly as you can.
              </p>
            </div>
            
            <p className="text-gray-500 text-sm text-center mb-6">
              This quiz contains {questions.length} yes/no questions and takes about 2-3 minutes.
            </p>
            
            <button
              onClick={() => setStarted(true)}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Begin Quiz
            </button>
            
            <p className="text-gray-400 text-xs text-center mt-6">
              Your answers are completely private and not stored anywhere.
            </p>
          </div>
        </div>
      </>
    );
  }

  if (showResults) {
    return (
      <>
        <Head>
          <title>Your Results - Is AA For You?</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Results</h2>
              <p className="text-gray-600">
                You answered Yes to <span className="font-bold text-blue-600">{yesCount}</span> out of {questions.length} questions
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              {yesCount >= 4 ? (
                <div>
                  <p className="text-gray-700 mb-4">
                    If you answered Yes to four or more questions, you are probably in trouble with alcohol. 
                    Many people have found that talking with others who have faced similar challenges can be helpful.
                  </p>
                  <p className="text-gray-700">
                    Alcoholics Anonymous is a fellowship of people who share their experience, strength, and hope 
                    with each other. There are no fees or dues — just people helping people.
                  </p>
                </div>
              ) : yesCount >= 2 ? (
                <div>
                  <p className="text-gray-700 mb-4">
                    You answered Yes to some of these questions. While this does not necessarily mean you have 
                    a drinking problem, it may be worth reflecting on your relationship with alcohol.
                  </p>
                  <p className="text-gray-700">
                    If you are curious about AA or want to learn more, meetings are open to anyone who wants to stop drinking 
                    or is questioning their drinking habits.
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-gray-700 mb-4">
                    Based on your answers, you may not currently have a problem with alcohol. However, only you 
                    truly know your relationship with drinking.
                  </p>
                  <p className="text-gray-700">
                    If you ever feel concerned in the future, or if you are taking this quiz for someone you care about, 
                    know that help is always available.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-blue-600 rounded-xl p-6 text-white mb-6">
              <h3 className="font-bold text-lg mb-2">Find a Meeting Near You</h3>
              <p className="text-blue-100 text-sm mb-4">
                The AA Meeting Guide app helps you find AA meetings anywhere in the world. 
                It is free and available for iOS and Android.
              </p>
              
                href="https://www.aa.org/meeting-guide-app"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-blue-600 py-3 rounded-lg font-semibold text-center hover:bg-blue-50 transition-colors"
              >
                Get the Meeting Guide App
              </a>
            </div>

            <div className="space-y-3">
              
                href="tel:+12128703400"
                className="block w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium text-center hover:bg-gray-200 transition-colors"
              >
                Call AA: (212) 870-3400
              </a>
              <button
                onClick={restart}
                className="w-full text-gray-500 py-2 font-medium hover:text-gray-700 transition-colors"
              >
                Take Quiz Again
              </button>
            </div>

            <p className="text-gray-400 text-xs text-center mt-6">
              Remember: The only requirement for AA membership is a desire to stop drinking.
            </p>
          </div>
        </div>
      </>
    );
  }

  const progress = ((currentQuestion) / questions.length) * 100;

  return (
    <>
      <Head>
        <title>Question {currentQuestion + 1} - Is AA For You?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-xl text-gray-800 leading-relaxed">
              {questions[currentQuestion]}
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => handleAnswer('yes')}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer('no')}
              className="w-full bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-colors"
            >
              No
            </button>
          </div>

          <button
            onClick={restart}
            className="w-full text-gray-400 py-3 mt-4 text-sm hover:text-gray-600 transition-colors"
          >
            Start Over
          </button>
        </div>
      </div>
    </>
  );
}
