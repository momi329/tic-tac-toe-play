import { useState } from "react";

const InitBoard = [null, null, null, null, null, null, null, null, null];
const WIN_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const Play = () => {
  const [player, setPlayer] = useState(InitBoard);
  return (
    <div className="grid grid-cols-3">
      {player.map((cell, index) => (
        <div
          className="flex items-center justify-center w-20 h-20 border border-black"
          key={index}
        >
          {index}
        </div>
      ))}
    </div>
  );
};
