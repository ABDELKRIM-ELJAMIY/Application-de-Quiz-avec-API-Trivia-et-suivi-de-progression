import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/quiz");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
            <div className="text-center mb-12">
                <h1 className="text-6xl font-bold text-orange-500 mb-8">MARHABA</h1>
                <p className="text-xl text-gray-300 mb-10">Bienvenue à notre quiz interactif</p>
            </div>
            <button
                onClick={handleStart}
                className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl text-white font-bold text-lg transition-colors duration-300 shadow-lg"
            >
                Commencer
            </button>
        </div>
    )
}

export default Home;