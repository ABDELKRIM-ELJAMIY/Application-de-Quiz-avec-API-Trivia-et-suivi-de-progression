const GameBackground = () => {
    return (
        <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            // src="/public/Design sans titre (1).mp4"
            src="/public/Design sans titre.mp4"

            autoPlay
            loop
            muted
            playsInline
        />
        
    );
};

export default GameBackground;
