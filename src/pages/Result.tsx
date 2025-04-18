import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import GameBackground from "../compenents/GameBackground ";

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
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <GameBackground />

      <div className="relative z-10 bg-[#0A0F2C] bg-opacity-90 p-10 rounded-2xl shadow-[0_0_30px_#1E90FF] text-center max-w-md w-full">
        <h2 className="text-5xl font-bold text-[#00FFC3] mb-4 drop-shadow-[0_0_8px_#00FFC3]">
          Résultat
        </h2>

        <h3 className="text-4xl font-bold text-white mb-8 drop-shadow-[0_0_5px_#7AE2CF]">
          Bravo, <span className="text-[#00FFC3]">{name}</span> !
        </h3>

        <p className="text-xl text-[#F5EEDD] mb-6">
          Tu as eu{" "}
          <span className="text-[#00FFC3] font-bold text-3xl">{score}</span> bonnes réponses
          sur{" "}
          <span className="text-[#00FFC3] font-bold text-3xl">{total}</span>.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-[#00FFC3] hover:bg-[#1B003C] text-black hover:text-white font-bold py-3 px-8 rounded-full shadow-[0_0_15px_#00FFC3] transition-all duration-300"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

export default Result;
