import { useState } from "react";
import {
  FaRegHandRock,
  FaRegHandPaper,
  FaRegHandScissors,
} from "react-icons/fa";

export default function Games() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [botChoice, setBotChoice] = useState(null);
  const [gameResult, setGameResult] = useState(null);

  const choices = ["rock", "paper", "scissors"];

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);

    const randomBotChoice =
      choices[Math.floor(Math.random() * choices.length)];
    setBotChoice(randomBotChoice);

    determineWinner(choice, randomBotChoice);
  };

  const determineWinner = (player, bot) => {
    if (player === bot) {
      setGameResult("Draw!");
    } else if (
      (player === "rock" && bot === "scissors") ||
      (player === "paper" && bot === "rock") ||
      (player === "scissors" && bot === "paper")
    ) {
      setGameResult("You Win!");
    } else {
      setGameResult("You Lose!");
    }
  };

  const handleClosePopup = () => {
    setGameResult(null);
    setPlayerChoice(null);
    setBotChoice(null);
  };

  const getIcon = (choice) => {
    switch (choice) {
      case "rock":
        return <FaRegHandRock />;
      case "paper":
        return <FaRegHandPaper />;
      case "scissors":
        return <FaRegHandScissors />;
      default:
        return null;
    }
  };

  return (
    <div className="relative container h-screen flex flex-col items-center justify-center mx-auto text-center bg-gray-100 gap-10">
      <h1 className="text-2xl font-bold">Selamat Bermain</h1>
      <div className="flex justify-center gap-20">
        {/* Player */}
        <div>
          <h1 className="text-lg font-medium text-violet-500">Player</h1>
          <div className="flex flex-col gap-3 items-center">
            {choices.map((choice) => (
              <button
                key={choice}
                onClick={() => handlePlayerChoice(choice)}
                className={`text-4xl p-3 rounded-full transition-transform hover:scale-110 hover:bg-violet-200 ${
                  playerChoice === choice ? "bg-violet-300 " : ""
                }`}
              >
                {getIcon(choice)}
              </button>
            ))}
          </div>
        </div>

        {/* VS Text */}
        <div className="flex items-center justify-center">
          <h1 className="text-xl font-semibold">VS</h1>
        </div>

        {/* Bot */}
        <div>
          <h1 className="text-lg font-medium text-violet-500">Bot</h1>
          <div className="flex flex-col gap-3 items-center text-4xl">
            {choices.map((choice) => (
              <div
                key={choice}
                className={`text-4xl p-3 rounded-full transition-transform ${
                  botChoice === choice
                    ? "bg-violet-300  scale-110"
                    : "opacity-50"
                }`}
              >
                {getIcon(choice)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup */}
      {gameResult && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">{gameResult}</h2>
            <button
              onClick={handleClosePopup}
              className="mt-4 px-6 py-2 bg-violet-500 text-white rounded-full hover:bg-violet-600 transition"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
