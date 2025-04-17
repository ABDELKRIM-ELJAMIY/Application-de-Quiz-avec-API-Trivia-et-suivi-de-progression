import React from "react";
import { QuestionType } from "../types/question";

type props = {
    question: QuestionType;
    onAnswer: (answer: string) => void;
    selectedAnswer: string | null;
};

const Question: React.FC<props> = ({ question, onAnswer, selectedAnswer }) => {
    return (
        <div className="p-6 bg-[#06202B] rounded-lg shadow-lg max-w-3xl mx-auto my-4">
            <h2 className="text-2xl font-bold mb-6 text-[#F5EEDD]">{question.question}</h2>
            <div className="flex flex-col space-y-3">
                {question.answers.map((answer, idx) => (
                    <button
                        key={idx}
                        onClick={() => onAnswer(answer)}
                        className={`
              py-3 px-6 rounded-md text-lg font-medium transition-colors duration-200 
              ${selectedAnswer === answer
                                ? "bg-[#7AE2CF] text-white"
                                : "bg-[#077A7D] hover:bg-[#7AE2CF]"
                            }
            `}
                    >
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;
