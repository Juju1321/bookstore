import React from "react";

export const CheckIcon = ({
  width = "160",
  height = "160",
  fill = "#313037",
}) => {
  return (
   <svg 
      width={width} 
      height={height} 
      viewBox="0 0 160 160" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
   >
      <path 
         d="M70.6667 110.667L117.667 63.6667L108.333 54.3333L70.6667 92L51.6667 73L42.3333 82.3333L70.6667 110.667ZM80 146.667C70.7778 146.667 62.1111 144.916 54 141.413C45.8889 137.911 38.8333 133.162 32.8333 127.167C26.8333 121.167 22.0844 114.111 18.5867 106C15.0889 97.8889 13.3378 89.2222 13.3333 80C13.3333 70.7778 15.0844 62.1111 18.5867 54C22.0889 45.8889 26.8378 38.8333 32.8333 32.8333C38.8333 26.8333 45.8889 22.0845 54 18.5867C62.1111 15.0889 70.7778 13.3378 80 13.3333C89.2222 13.3333 97.8889 15.0845 106 18.5867C114.111 22.0889 121.167 26.8378 127.167 32.8333C133.167 38.8333 137.918 45.8889 141.42 54C144.922 62.1111 146.671 70.7778 146.667 80C146.667 89.2222 144.916 97.8889 141.413 106C137.911 114.111 133.162 121.167 127.167 127.167C121.167 133.167 114.111 137.918 106 141.42C97.8889 144.922 89.2222 146.671 80 146.667ZM80 133.333C94.8889 133.333 107.5 128.167 117.833 117.833C128.167 107.5 133.333 94.8889 133.333 80C133.333 65.1111 128.167 52.5 117.833 42.1667C107.5 31.8333 94.8889 26.6667 80 26.6667C65.1111 26.6667 52.5 31.8333 42.1667 42.1667C31.8333 52.5 26.6667 65.1111 26.6667 80C26.6667 94.8889 31.8333 107.5 42.1667 117.833C52.5 128.167 65.1111 133.333 80 133.333Z" 
         fill={fill}
      />
   </svg>
  );
};