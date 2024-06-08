"use client";

import GlassRow from "./GlassRow";

export default function Play({
	row,
	swap,
	guessAnswer,
	surrender,
}: {
	row: string[];
	swap: (a: string, b: string) => void;
	guessAnswer: () => void;
	surrender: () => void;
}) {
	return (
		<>
			<GlassRow row={row} swap={swap} />
			<div>
				<button
					onClick={guessAnswer}
					className="max-w-[200px] focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
				>
					Guess
				</button>
				<button
					onClick={surrender}
					className=" max-w-[200px] focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
				>
					Surrender
				</button>
			</div>
		</>
	);
}
