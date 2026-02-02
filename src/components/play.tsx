import { useState } from "react";

const InitBoard = [null, null, null, null, null, null, null, null, null];
const WIN_LINES: number[][] = [
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
  const [player, setPlayer] = useState("⭕️");
  const [board, setBoard] = useState(InitBoard);
  const [win, setWin] = useState(false);
  const checkWin = () => {
    if (win) return;
    WIN_LINES.forEach((line: number[]) => {
      const firstCell = board[line[0]];
      if (
        firstCell &&
        firstCell === board[line[1]] &&
        firstCell === board[line[2]]
      ) {
        console.log("Winner is", firstCell);
        setWin(true);
      }
    });
  };
  checkWin();
  const clickedCell = (cell: null | string, index: number) => {
    if (cell) return;
    if (win) return;
    setBoard((prev) => {
      const newBoard = [...prev];
      newBoard[index] = player;
      return newBoard;
    });

    setPlayer((prev) => {
      if (prev === "⭕️") return "❌";
      return "⭕️";
    });
  };
  return (
    <div>
      <div className="m-2">Now Playing:{player}</div>
      <div className="grid grid-cols-3">
        {board.map((cell, index) => (
          <div
            className="flex items-center justify-center w-20 h-20 border border-black"
            key={index}
            onClick={() => clickedCell(cell, index)}
          >
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
};
