"use client";
import { useState } from "react";
import Glass from "./Glass";

export default function GlassRow() {
	const [row, setRow] = useState(["red", "blue", "yellow", "orange", "green"]);
	const swap = (itemA: string, itemB: string) => {
		if (itemA === itemB) {
			return;
		}
		const indexA = row.indexOf(itemA);
		const indexB = row.indexOf(itemB);
		row[indexA] = itemB;
		row[indexB] = itemA;
		setRow([...row]);
	};

	return (
		<div>
			<div className="flex gap-2 justify-evenly">
				{row.map((item) => (
					<Glass key={item} color={item} swap={swap} />
				))}
			</div>
			<div className="text-white text-center">2 Correct Order !!!</div>
		</div>
	);
}
