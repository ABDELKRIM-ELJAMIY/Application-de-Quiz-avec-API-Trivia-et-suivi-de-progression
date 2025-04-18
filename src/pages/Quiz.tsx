import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuestions } from "../utils/fetchQuestions";
import { QuestionType } from "../types/question";
import Question from "../compenents/Question";
import ProgressBar from "../compenents/ProgressBar";
import GameBackground from "../compenents/GameBackground ";

const Quiz = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions().then(setQuestions);
  }, []);

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

  if (questions.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-xl">
        <p className="drop-shadow-[0_0_10px_#00FFC3] animate-pulse">Chargement...</p>
      </div>
    );

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4  text-white">
      <GameBackground />
      <div className="relative z-10 max-w-xl w-full bg-[#0A0F2C] p-6 rounded-2xl shadow-[0_0_20px_#00FFC3]">
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
