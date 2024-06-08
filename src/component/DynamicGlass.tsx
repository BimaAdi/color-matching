"use client";

import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const GlassTypes = {
	GLASS: "glass",
};

interface DragItem {
	color: string;
}

export default function DynamicGlass({
	color = "red",
	swap,
}: { color?: string; swap: (x: string, y: string) => void }) {
	const ref = useRef<HTMLDivElement>(null);
	const [{}, drag] = useDrag({
		type: GlassTypes.GLASS,
		item: () => {
			return {
				color,
			};
		},
		collect: (monitor: any) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const [, drop] = useDrop<DragItem>(() => ({
		accept: GlassTypes.GLASS,
		collect: (monitor) => {
			return {
				handlerId: monitor.getHandlerId(),
			};
		},
		drop: (item: DragItem, monitor) => {
			swap(item.color, color);
		},
	}));

	drag(drop(ref));
	return (
		<div ref={ref} className="hover:cursor-move">
			<svg viewBox="0 0 20 20" width="100px">
				<path d="M3,0 L17,0 L20,20 L0,20z" fill={color} />
			</svg>
		</div>
	);
}
