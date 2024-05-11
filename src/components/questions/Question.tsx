"use client"
import React, { useState } from 'react';

interface QuestionProps {
    question: string;
    options: { [key: string]: string };
    answer: string;
    onNext: () => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, answer, onNext }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        setIsCorrect(option === answer);
        setIsDisabled(true);
    };

    const handleNext = () => {
        setSelectedOption(null);
        setIsCorrect(null);
        onNext();
    };

    return (
        <div>
            <h2>{question}</h2>
            <ul>
                {Object.entries(options).map(([key, value]) => (
                    <li key={key} className={`${isCorrect && selectedOption === key && 'bg-green-500'} ${!isCorrect && selectedOption === key && 'bg-red-500'}`}>
                        <label>
                            <input
                                type="radio"
                                value={key}
                                checked={selectedOption === key}
                                onChange={() => handleOptionSelect(key)}
                                disabled={isDisabled}
                            />
                            {value}
                        </label>
                    </li>
                ))}
            </ul>
            {selectedOption && (
                <p>{isCorrect ? 'Resposta correta!' : 'Resposta incorreta.'}</p>
            )}
            {isCorrect && !isCorrect && (
                <p>Resposta correta: {options[answer]}</p>
            )}
            <button onClick={handleNext} disabled={!isDisabled}>Próxima Pergunta</button>
        </div>
    );
};

export default Question;