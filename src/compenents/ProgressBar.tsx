import React from "react";

type props = {
  current: number;
  total: number;
};

const ProgressBar: React.FC<props> = ({ current, total }) => {
  const percentage = (current / total) * 100;
  return (
    <div className="w-full bg-gray-700 rounded-xl h-4 overflow-hidden">
      <div
        className="bg-orange-500 h-4 rounded-xl transition-all duration-300"
        style={{ width: `${percentage}%` }}
      >
      </div>
    </div>
  )
}

export default ProgressBar;