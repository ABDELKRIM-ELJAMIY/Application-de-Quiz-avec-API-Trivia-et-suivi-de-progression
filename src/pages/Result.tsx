import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  score: number;
  total: number;
};

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state as Props;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
        <h2 className="text-4xl font-bold text-white mb-6">Résultat</h2>
        <p className="text-xl text-white">
          Tu as eu{" "}
          <span className="text-orange-500 font-semibold text-2xl">{score}</span> bonnes réponses
          sur <span className="text-orange-400 font-semibold text-2xl">{total}</span> !
        </p>

        <div className="mt-6">
          <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
            <div
              className="bg-orange-500 h-full transition-all duration-500"
              style={{ width: `${(score / total) * 100}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm text-gray-300">
            {(score / total * 100).toFixed(1)}% de réussite
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

export default Result;
