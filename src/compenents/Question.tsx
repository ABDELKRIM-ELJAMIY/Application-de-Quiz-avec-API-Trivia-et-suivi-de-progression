import React from "react";
import { QuestionType } from "../types/question";

type Props = {
    question: QuestionType;
    onAnswer: (answer: string) => void;
    selectedAnswer: string | null;
};

const Question: React.FC<Props> = ({ question, onAnswer, selectedAnswer }) => {
    return (
        <div className="p-6 bg-[#0A0F2C] rounded-2xl shadow-[0_0_20px_#1E90FF] max-w-3xl mx-auto my-8">
            <h2 className="text-2xl font-bold mb-6 text-[#00FFC3] drop-shadow-[0_0_5px_#00FFC3]">
                {question.question}
            </h2>

            <div className="flex flex-col space-y-4">
                {question.answers.map((answer, idx) => (
                    <button
                        key={idx}
                        onClick={() => onAnswer(answer)}
                        className={`py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-300
              border border-[#00FFC3] hover:scale-105 shadow-[0_0_10px_#00FFC3]
              ${selectedAnswer === answer
                                ? "bg-[#00FFC3] text-black"
                                : "bg-[#1B003C] text-white hover:bg-[#00FFC3] hover:text-black"
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
