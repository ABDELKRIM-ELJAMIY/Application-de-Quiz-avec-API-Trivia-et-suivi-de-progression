import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

type Props = {
  score: number;
  total: number;
};

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");

  const { score, total } = location.state as Props;

  useEffect(() => {
    const playerName = localStorage.getItem("playerName");
    if (playerName) {
      setName(playerName);
    }
  }, []); 

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#06202B] px-4">
      <div className="bg-[#1f2937] p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
        <h2 className="text-4xl font-bold text-[#F5EEDD] mb-6">Résultat</h2>
        <h2 className="text-4xl font-bold text-[#00fc3f] mb-6">{name}</h2>
        <p className="text-xl text-[#F5EEDD]">
          Tu as eu{" "}
          <span className="text-[#7AE2CF] font-semibold text-2xl">{score}</span> bonnes réponses
          sur <span className="text-[#7AE2CF] font-semibold text-2xl">{total}</span> !
        </p>

        <div className="mt-6">
          {/* <div className="w-full bg-[#374151] rounded-full h-4 overflow-hidden">
            <div
              className="bg-[#7AE2CF] h-full transition-all duration-500"
              style={{ width: `${(score / total) * 100}%` }}
            ></div>
          </div> */}
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-8 bg-[#7AE2CF] hover:bg-[#077A7D] text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

export default Result;
