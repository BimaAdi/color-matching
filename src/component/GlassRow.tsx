import Glass from "./Glass";

export default function GlassRow() {
	return (
		<div>
			<div className="flex gap-2 justify-evenly">
				<Glass color="red" />
				<Glass color="blue" />
				<Glass color="yellow" />
				<Glass color="orange" />
				<Glass color="green" />
			</div>
			<div className="text-white text-center">2 Correct Order !!!</div>
		</div>
	);
}
