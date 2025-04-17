import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const Home = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");

    const handleStart = () => {
        if (name.trim() !== "") {
            localStorage.setItem("playerName", name);
            navigate("/quiz");
            toast.success(`Prépare - toi ${name}, le quiz commence!`);
        } else {
            toast.error("Veuillez entrer votre nom !");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#06202B] p-6">
            <div className="text-center mb-12">
                <h1 className="text-6xl font-bold text-[#F5EEDD] mb-8">MARHABA</h1>
                <p className="text-xl text-[#7AE2CF] mb-10">Bienvenue à notre quiz interactif</p>
            </div>

            <input
                type="text"
                placeholder="Entrez votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-6 px-6 py-3 rounded-xl border border-[#7AE2CF] bg-[#077A7D] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7AE2CF]"
            />

            <button
                onClick={handleStart}
                className="bg-[#7AE2CF] hover:bg-[#077A7D] px-8 py-3 rounded-xl text-white font-bold text-lg transition-colors duration-300 shadow-lg"
            >
                Commencer
            </button>
        </div>
    );
};

export default Home;
