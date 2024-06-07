"use client";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import GlassRow from "./GlassRow";
import useColorMatching from "@/hook/useColorMatching";
import GlassRowGuess from "./GlassRowGuess";
import Confetti from "react-confetti";

export default function ColorMatching() {
	const { row, guessHistory, gameState, swap, guessAnswer, reset } =
		useColorMatching();

	return (
		<DndProvider backend={HTML5Backend}>
			<div className="flex flex-col items-center gap-2">
				{typeof window !== "undefined" && gameState === "WIN" ? (
					<Confetti width={window.innerWidth} height={window.innerHeight} />
				) : (
					<></>
				)}

				<GlassRow row={row} swap={swap} />
				<div>
					<button></button>
					<button
						onClick={guessAnswer}
						className="max-w-[200px] focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
					>
						Guess
					</button>
					<button
						onClick={reset}
						className=" max-w-[200px] focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
					>
						Surrender
					</button>
				</div>
				<div
					className={
						guessHistory.length > 0
							? "flex flex-col gap-2 pt-10 max-h-[350px] overflow-y-scroll"
							: "flex flex-col gap-2 pt-10 max-h-[350px]"
					}
				>
					{guessHistory.map((item) => (
						<GlassRowGuess
							key={item.guessNum}
							guessNum={item.guessNum}
							row={item.row}
							numCorrectOrder={item.numCorrectOrder}
						/>
					))}
				</div>
			</div>
		</DndProvider>
	);
}
