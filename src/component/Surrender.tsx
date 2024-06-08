import StaticGlass from "./StaticGlass";

export default function Surrender({
	correctAnswer,
	reset,
}: {
	correctAnswer: string[];
	reset: () => void;
}) {
	return (
		<>
			<div className="flex gap-2 justify-evenly">
				{correctAnswer.map((item) => (
					<StaticGlass key={item} color={item} />
				))}
			</div>
			<button
				onClick={reset}
				className="max-w-[200px] focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
			>
				Try Again
			</button>
		</>
	);
}
