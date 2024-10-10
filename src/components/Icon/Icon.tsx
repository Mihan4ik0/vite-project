// src/components/Icon/Icon.tsx

import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      height="90"
      viewBox="0 0 90 90"
    >
      <rect width="90" height="90" rx="15" fill="#D9D9D9" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize="24"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fill="#9E1300"
      >
        Q
      </text>
    </svg>
  );
}

export default Icon;
