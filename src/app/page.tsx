import ColorMatching from "@/component/ColorMatching";

export default function Home() {
	return (
		<div className="bg-blue-950 w-screen h-screen">
			<main className="w-screen min-h-[500px] grid place-items-center">
				<div className="flex flex-col justify-start items-center gap-2">
					<h1 className="text-3xl font-bold text-white">Color Matching Game</h1>
					<p className="text-md text-white pb-5">
						Guess the order of the color! drag the glass to swap position
					</p>
					<ColorMatching />
				</div>
			</main>
		</div>
	);
}
