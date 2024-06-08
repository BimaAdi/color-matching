export default function StaticGlass({ color = "red" }: { color?: string }) {
	return (
		<div>
			<svg viewBox="0 0 20 20" width="100px">
				<path d="M3,0 L17,0 L20,20 L0,20z" fill={color} />
			</svg>
		</div>
	);
}
