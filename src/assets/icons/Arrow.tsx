import React from "react";

export const Arrow = ({ width = "42", height = "16", fill = "#313037" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 42 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00141 1.99897C8.00141 2.25897 7.90141 2.50897 7.71141 2.70897L3.41141 6.99897L41.0014 6.99897C41.5514 6.99897 42.0014 7.44896 42.0014 7.99896C42.0014 8.54896 41.5514 8.99896 41.0014 8.99896L3.41141 8.99896L7.71141 13.289C8.10141 13.679 8.10141 14.319 7.71141 14.709C7.32141 15.099 6.68141 15.099 6.29141 14.709L0.291406 8.70896C0.201406 8.61896 0.131406 8.50896 0.0814063 8.38896C0.0614063 8.33896 0.0414063 8.29896 0.0414063 8.24896C-0.00859375 8.08896 -0.00859375 7.90896 0.0414063 7.74896C0.0414063 7.69896 0.0614063 7.65897 0.0814063 7.60896C0.131406 7.48897 0.201406 7.37896 0.291406 7.28896L6.29141 1.28897C6.68141 0.898965 7.32141 0.898965 7.71141 1.28897C7.90141 1.48897 8.00141 1.73897 8.00141 1.99897Z"
        fill={fill}
      />
    </svg>
  );
};
