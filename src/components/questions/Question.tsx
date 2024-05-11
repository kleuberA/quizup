"use client"
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface QuestionProps {
    question: string;
    options: { [key: string]: string };
    answer: string;
    currentIndex: number;
    onNext: () => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, answer, onNext, currentIndex }) => {
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
        setIsDisabled(false);
        onNext();
    };

    return (
        <div className='bg-red-500 min-h-[90dvh] flex justify-center items-center w-full'>
            <div className='w-[40dvw] bg-green-200 min-h-[60dvh] rounded-sm border border-border mx-auto gap-5 flex flex-col items-center justify-center'>
                <h1 className='text-start w-[32dvw] text-xl font-bold'>Questão - {currentIndex}</h1>
                <h2>{question}</h2>
                <ul className='w-[32dvw]'>
                    {Object.entries(options).map(([key, value]) => (
                        <li key={key} className={`${isCorrect && selectedOption === key && 'bg-green-500'} ${!isCorrect && selectedOption === key && 'bg-red-500'}`}>
                            <Label className='flex items-center flex-row gap-2'>
                                <Input
                                    className='w-5 h-10'
                                    type="radio"
                                    value={key}
                                    checked={selectedOption === key}
                                    onChange={() => handleOptionSelect(key)}
                                    disabled={isDisabled}
                                />
                                {value}
                            </Label>
                        </li>
                    ))}
                </ul>
                {selectedOption && (
                    <p>{isCorrect ? 'Resposta correta!' : 'Resposta incorreta.'}</p>
                )}
                {isCorrect && !isCorrect && (
                    <p>Resposta correta: {options[answer]}</p>
                )}
                <Button onClick={handleNext} disabled={!isDisabled}>Próxima Pergunta</Button>
            </div>
        </div>
    );
};

export default Question;