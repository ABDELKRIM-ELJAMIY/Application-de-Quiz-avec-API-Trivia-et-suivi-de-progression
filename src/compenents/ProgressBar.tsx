import React from "react";

type props = {
  current: number
  total: number
};
const ProgressBar: React.FC<props> = ({ current, total }) => {
  const porcentage = (current / total) * 100;
  return (
    <div
      className="bg-orange-500 h-4 rounded-xl transition-all duration-300"
    style= {{ width: `${porcentage}` }
}

>

    </div>
  )
}
export default ProgressBar;