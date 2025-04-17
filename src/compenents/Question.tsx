import React from "react";
import { QuestionType } from "../types/question";
type props = {
    question: QuestionType;
    onAnswer: (answer: string) => void;
    selectedAnswer: string | null;
};
const Question: React.FC<props> = ({ question, onAnswer, selectedAnswer }) => {
    return (
        <div>
            <h2>{question.question}</h2>
            <div>
                {question.answers.map((answer, idx) => (
                    <button
                        key={idx}
                        onClick={() => onAnswer(answer)}
                        className={`
                         ${selectedAnswer === answer
                                ? "bg-orange-500 text-white"
                                : "bg-gray-700 hover:bg-orange-600"
                            }`}
                    >
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    )
};
export default Question;