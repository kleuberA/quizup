"use client"
import { questions } from './questions.ts';
import React, { useState } from 'react';
import Question from './Question.tsx'

export default function QuestionsComponent() {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const Questions = questions;

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    };

    const currentQuestion = Questions[currentQuestionIndex];

    return (
        <div>
            {currentQuestion && (
                <Question
                    question={currentQuestion.question}
                    options={currentQuestion.options}
                    answer={currentQuestion.answer}
                    onNext={handleNextQuestion}
                />
            )}
            {currentQuestionIndex === Questions.length && (
                <p>Parabéns, você concluiu o quiz!</p>
            )}
        </div>
    )
}