import { useState } from 'react';
import "./styles.module.scss";

export default function Equal() {
  const [rotated, setRotated] = useState(false);

  const handleClick = () => {
    setRotated(!rotated);
  };

  return (
    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleClick}>
      <path d={rotated ? "M1 0.8125L15 6.8125" : "M1 6.8125H15"} stroke="#3C1441" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
      <path d={rotated ? "M1 6.8125L15 0.8125" : "M1 0.8125H15"} stroke="#3C1441" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
    </svg>
  );
}
