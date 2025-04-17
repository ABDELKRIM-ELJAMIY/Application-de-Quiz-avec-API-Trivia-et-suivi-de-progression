import React from "react";

type props = {
  current: number;
  total: number;
};

const ProgressBar: React.FC<props> = ({ current, total }) => {
  const percentage = (current / total) * 100;
  return (
    <div className="w-full bg-[#06202B] rounded-xl h-4 overflow-hidden">
      <div
        className="bg-[#7AE2CF] h-4 rounded-xl transition-all duration-300"
        style={{ width: `${percentage}%` }}
      >
      </div>
    </div>
  );
};

export default ProgressBar;
