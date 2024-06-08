"use client";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import GlassRow from "./GlassRow";
import useColorMatching from "@/hook/useColorMatching";
import GlassRowGuess from "./GlassRowGuess";
import Confetti from "react-confetti";
import Play from "./Play";
import Surrender from "./Surrender";
import Win from "./Win";

export default function ColorMatching() {
	const {
		row,
		guessHistory,
		gameState,
		correctAnswer,
		swap,
		guessAnswer,
		reset,
		surrender,
	} = useColorMatching();

	return (
		<DndProvider backend={HTML5Backend}>
			{gameState === "STAND_BY" || gameState === "PLAY" ? (
				<p className="text-md text-white pb-5">
					Guess the order of the color! drag the glass to swap position
				</p>
			) : (
				<></>
			)}
			{gameState === "WIN" ? (
				<p className="text-md text-white pb-5">
					Congrats you guess correctly :)
				</p>
			) : (
				<></>
			)}
			{gameState === "SURRENDER" ? (
				<p className="text-md text-white pb-5">
					Game over T T the correct answer is:
				</p>
			) : (
				<></>
			)}

			<div className="flex flex-col items-center gap-2">
				{typeof window !== "undefined" && gameState === "WIN" ? (
					<Confetti width={window.innerWidth} height={window.innerHeight} />
				) : (
					<></>
				)}
				{gameState === "STAND_BY" || gameState === "PLAY" ? (
					<Play
						row={row}
						swap={swap}
						guessAnswer={guessAnswer}
						surrender={surrender}
					/>
				) : (
					<></>
				)}
				{gameState === "WIN" ? (
					<Win correctAnswer={correctAnswer} reset={reset} />
				) : (
					<></>
				)}
				{gameState === "SURRENDER" ? (
					<Surrender correctAnswer={correctAnswer} reset={reset} />
				) : (
					<></>
				)}
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
