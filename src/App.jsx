import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import PlayerInfo from "./components/PlayerInfo";
import { WINNING_COMBINATIONS } from "./winning-combinations";
WINNING_COMBINATIONS;
const derivedCurrentPlayer = (turns) => {
  let currPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    currPlayer = "O";
  }
  return currPlayer;
};
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = derivedCurrentPlayer(gameTurns);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currPlayer = derivedCurrentPlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo
            name={"Player 1"}
            symbol={"X"}
            isActive={activePlayer === "X"}
          />
          <PlayerInfo
            name={"Player 2"}
            symbol={"O"}
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
