import GlassGuess from "./GlassGuess";

export default function GlassRowGuess({
	row,
	numCorrectOrder,
	guessNum,
}: { row: string[]; numCorrectOrder: number; guessNum: number }) {
	return (
		<div>
			<div className="flex gap-2 justify-evenly items-center">
				<div className="w-[100px] text-5xl text-white text-center">
					{guessNum}
				</div>
				{row.map((item) => (
					<GlassGuess key={item} color={item} />
				))}
			</div>
			<div className="text-white text-center">
				{numCorrectOrder} Correct Order !!!
			</div>
		</div>
	);
}
