import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuestions } from "../utils/fetchQuestions";
import { QuestionType } from "../types/question";
import Question from "../compenents/Question";
import ProgressBar from "../compenents/ProgressBar";

const Quiz = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const navigate = useNavigate();


  fetchQuestions().then(setQuestions);


  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);

    if (answer === questions[currentIndex].correct_answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        navigate("/result", {
          state: { score, total: questions.length },
        });
      }
    }, 100);
  };

  if (questions.length === 0) return <p className="text-[#F5EEDD]">Chargement...</p>;

  return (
    <div className="min-h-screen bg-[#06202B] flex flex-col items-center justify-center px-4">
      <div className="max-w-xl w-full">
        <Question
          question={questions[currentIndex]}
          onAnswer={handleAnswer}
          selectedAnswer={selectedAnswer}
        />
        <ProgressBar current={currentIndex + 1} total={questions.length} />
      </div>
    </div>
  );
};

export default Quiz;
