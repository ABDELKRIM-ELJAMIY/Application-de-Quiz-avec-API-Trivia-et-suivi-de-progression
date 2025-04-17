import {useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/quiz");
    };

    return (
        <div>
            <h1>MARHABA</h1>
            <button
                onClick={handleStart}
                className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-xl"
            >
                Commencer
            </button>
        </div>
    )
}
export default Home;
