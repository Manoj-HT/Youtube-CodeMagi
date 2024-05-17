import { CSSProperties } from 'react';
import {
	AbsoluteFill,
	InterpolateOptions,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import XY from './XY';

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
		blockDefaults: {},
		xBlock: {
			height: 'max-content',
			width: 'max-content',
			left: '25%',
		},
		yBlock: {
			height: 'max-content',
			width: 'max-content',
			left: '64%',
		},
	};
	const config = {
		frame: useCurrentFrame(),
		video : useVideoConfig()
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
			[200, 230],
			[0, 10],
			interpolationOptions.hereAndThere,
		),
		xFall: interpolate(
			config.frame,
			[215, 245],
			[31, 37],
			interpolationOptions.hereAndThere,
		),
		blockRotate: (frame: [number, number]) => interpolate(
			config.frame,
			frame,
			[0, 10],
			interpolationOptions.hereAndThere,
		),
		yRaise: interpolate(
			config.frame,
			[200, 230],
			[31, 24.5],
			interpolationOptions.hereAndThere,
		),
		fadeOut : interpolate(config.frame, [config.video.durationInFrames-60, config.video.durationInFrames], [1, 0], interpolationOptions.hereAndThere)
	};
	// 31 24.5
	return (
		<>
			<AbsoluteFill style={{opacity : `${interpolations.fadeOut}`}} >
				<AbsoluteFill
					style={{
						...styles.xBlock,
						top: `${interpolations.xFall}%`,
						rotate: `-${interpolations.blockRotate([245, 255])}deg`,
					}}
				>
					<XY color="red" letter="22" />
				</AbsoluteFill>
				<AbsoluteFill
					style={{
						...styles.yBlock,
						top: `${interpolations.yRaise}%`,
						rotate: `-${interpolations.blockRotate([200, 230])}deg`,
					}}
				>
					<XY color="black" letter="8" />
				</AbsoluteFill>
				<AbsoluteFill
					style={{ ...styles.bar, rotate: `-${interpolations.barRotate}deg` }}
				></AbsoluteFill>
				<AbsoluteFill style={styles.triangle}></AbsoluteFill>
			</AbsoluteFill>
		</>
	);
};

export default SeeSaw;
