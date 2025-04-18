import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import GameBackground from "../compenents/GameBackground ";

const Home = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");

    const handleStart = () => {
        if (name.trim() !== "") {
            localStorage.setItem("playerName", name);
            navigate("/quiz");
            toast.success(`Prépare-toi ${name}, le quiz commence!`);
        } else {
            toast.error("Veuillez entrer votre nom !");
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
            <GameBackground />

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
                <div className="text-center mb-12">
                    <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-[0_0_12px_#00FFC3]">
                        MARHABA
                    </h1>
                    <p className="text-xl text-[#66FCF1] mb-10 drop-shadow-[0_0_6px_#00FFC3]">
                        Bienvenue à notre quiz interactif
                    </p>
                </div>

                <input
                    type="text"
                    placeholder="Entrez votre nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mb-6 px-6 py-3 rounded-xl border border-[#00FFC3] bg-[#0A0F2C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FFC3] shadow-[0_0_12px_#00FFC3]"
                />

                <button
                    onClick={handleStart}
                    className="bg-[#00FFC3] hover:bg-[#00BFFF] px-8 py-3 rounded-xl text-[#0A0F2C] font-bold text-lg transition-colors duration-300 shadow-[0_0_16px_#00FFC3]"
                >
                    Commencer
                </button>
            </div>
        </div>
    );
};

export default Home;
