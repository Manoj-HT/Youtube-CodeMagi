import { CSSProperties } from 'react';
import {
	AbsoluteFill,
	InterpolateOptions,
	interpolate,
	useCurrentFrame,
} from 'remotion';

const SeeSaw = () => {
	const styles: { [name: string]: CSSProperties } = {
		bar: {
			background: 'black',
			opacity: 0.2,
			width: '2000px',
			height: '50px',
			borderRadius: '300px',
			top: '50%',
			left: '50%',
			translate: '-50% 0',
			// rotate: '-10deg',
		},
		triangle: {
			width: 0,
			height: 0,
			borderLeft: '100px solid transparent',
			borderRight: '100px solid transparent',
			borderBottom: '200px solid blue',
			opacity: 0.2,
			top: '52%',
			left: '50%',
			translate: '-50% 0',
		},
	};
	const config = {
		frame: useCurrentFrame(),
	};
	const interpolationOptions = {
		hereAndThere: {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		} as InterpolateOptions,
	};
	const interpolations = {
		barRotate: interpolate(
			config.frame,
			[200,230],
			[0,10],
			interpolationOptions.hereAndThere,
		),
	};
	return (
		<>
			<AbsoluteFill>
				<AbsoluteFill style={{...styles.bar, rotate : `-${interpolations.barRotate}deg`}}></AbsoluteFill>
				<AbsoluteFill style={styles.triangle}></AbsoluteFill>
			</AbsoluteFill>
		</>
	);
};

export default SeeSaw;
