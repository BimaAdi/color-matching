import ColorMatching from "@/component/ColorMatching";

export default function Home() {
	return (
		<div className="bg-blue-950 w-screen h-screen">
			<main className="w-screen min-h-[500px] grid place-items-center">
				<div className="flex flex-col justify-start items-center gap-2 mt-[100px]">
					<h1 className="text-3xl font-bold text-white">Color Matching Game</h1>
					<ColorMatching />
				</div>
			</main>
		</div>
	);
}
