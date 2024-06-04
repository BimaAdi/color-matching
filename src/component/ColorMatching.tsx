"use client";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import GlassRow from "./GlassRow";

export default function ColorMatching() {
	return (
		<DndProvider backend={HTML5Backend}>
			<GlassRow />
		</DndProvider>
	);
}
