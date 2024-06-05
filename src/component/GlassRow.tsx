"use client";
import Glass from "./Glass";

export default function GlassRow({
	row,
	swap,
}: { row: string[]; swap: (x: string, y: string) => void }) {
	return (
		<div>
			<div className="flex gap-2 justify-evenly">
				{row.map((item) => (
					<Glass key={item} color={item} swap={swap} />
				))}
			</div>
		</div>
	);
}
