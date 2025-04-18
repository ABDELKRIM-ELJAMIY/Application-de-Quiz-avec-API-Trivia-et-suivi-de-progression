import React from "react";

type props = {
  current: number;
  total: number;
};

const ProgressBar: React.FC<props> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full bg-[#1B003C] rounded-xl h-4 shadow-inner shadow-[inset_0_0_10px_#1B003C] overflow-hidden mt-6">
      <div
        className="bg-[#00FFC3] h-full rounded-xl shadow-[0_0_15px_#00FFC3] transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
