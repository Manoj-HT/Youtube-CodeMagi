import { CSSProperties } from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

const XY = (props: XyPropsType) => {
	const { color, letter, frame, textColor, opacityValues } = props;
	let style: CSSProperties = {
		width: '400px',
		height: '400px',
		background: color,
		borderRadius: '80px',
		margin: '10px',
		color: textColor ? textColor : 'white',
		fontSize: '250px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};
	const opacity = frame
		? interpolate(useCurrentFrame(), frame, opacityValues as number[], {
				extrapolateLeft: 'clamp',
				extrapolateRight: 'clamp',
			})
		: 1;
	return (
		<div style={style}>
			<span style={{ opacity: `${opacity}` }}>{letter}</span>
		</div>
	);
};
export default XY;
export type XyPropsType = {
	color: string;
	letter: string;
	textColor?: string;
	frame?: number[];
	opacityValues?: number[];
};
