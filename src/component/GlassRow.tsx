"use client";
import DynamicGlass from "./DynamicGlass";

export default function GlassRow({
	row,
	swap,
}: { row: string[]; swap: (x: string, y: string) => void }) {
	return (
		<div>
			<div className="flex gap-2 justify-evenly">
				{row.map((item) => (
					<DynamicGlass key={item} color={item} swap={swap} />
				))}
			</div>
		</div>
	);
}
