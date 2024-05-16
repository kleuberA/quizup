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
    const [initQuestions, setInitQuestions] = useState(false);
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
        <div className='min-h-[90dvh] flex justify-center items-center w-full'>
            {!initQuestions && (
                <div className='w-[80dvw] lg:w-[40dvw] min-h-[30dvh] p-4 rounded-sm border-2 border-dashed border-border mx-auto gap-5 flex flex-col items-center justify-center'>
                    <h1 className='text-center w-[32dvw] text-xl font-bold'>Iniciar Questionário!</h1>
                    <span className='text-xs font-semibold tracking-wider'>Clique no botão abaixo para iniciar o questionário!</span>
                    <Button onClick={() => setInitQuestions(!initQuestions)}>Iniciar Questionário</Button>
                </div>
            )}
            {initQuestions && (
                <div className='w-[80dvw] lg:w-[40dvw] min-h-[60dvh] p-4 rounded-sm border border-border mx-auto gap-5 flex flex-col items-center justify-center'>
                    <h1 className='text-start w-[32dvw] text-xl font-bold'>Questão - {currentIndex}</h1>
                    <h2>{question}</h2>
                    <ul className='w-[60dvw] lg:w-[32dvw] flex flex-col gap-2'>
                        {Object.entries(options).map(([key, value]) => (
                            <li key={key} className={`border-2 border-border text-accent-foreground p-2 rounded-md ${isCorrect && selectedOption === key && 'bg-green-500'} ${!isCorrect && selectedOption === key && 'bg-red-500'}`}>
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
                        <p className={`text-sm tracking-widest text-start w-[31dvw] ${isCorrect ? 'text-green-500' : 'text-red-500'} `}>{isCorrect ? 'Resposta correta!' : 'Resposta incorreta.'}</p>
                    )}
                    {isCorrect && !isCorrect && (
                        <p>Resposta correta: {options[answer]}</p>
                    )}
                    <Button onClick={handleNext} disabled={!isDisabled}>Próxima Pergunta</Button>
                </div>
            )}
        </div>
    );
};

export default Question;