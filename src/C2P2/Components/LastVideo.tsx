import { CSSProperties } from 'react';
import {
	AbsoluteFill,
	InterpolateOptions,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import XY from './XY';

const LastVideo = () => {
	const styles: { [name: string]: CSSProperties } = {
		container: {},
		block: {
			width: 'max-content',
			position: 'absolute',
			top: '50%',
			translate: '-50% -50%',
		},
	};
	const configs = {
		frame: useCurrentFrame(),
		video: useVideoConfig(),
	};
	const interpolationOptions = {
		hereAndThere: {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		} as InterpolateOptions,
	};
	const interpolations = {
		blockEntry: (delay? : number) => spring({ frame: configs.frame, fps: configs.video.fps, delay }),
		blockMove: interpolate(
			configs.frame,
			[470, 490],
			[50, 70],
			interpolationOptions.hereAndThere,
		),
	};

	return (
		<AbsoluteFill style={styles.container}>
			<div style={{ ...styles.block, left: '30%', scale : `${interpolations.blockEntry(700)}` }}>
				<XY color="black" letter="0" />
			</div>
			{configs.frame > 500 && (
				<div style={{ ...styles.block, left: '50%' }}>
					<XY
						color=""
						letter={configs.frame < 550 ? '+' : configs.frame > 710 ? '<' : '-'}
						textColor="black"
						frame={[540, 550, 560, 570, 700, 710, 720, 730]}
						opacityValues={[1, 0, 0, 1, 1, 0, 0, 1]}
					/>
				</div>
			)}
			<div
				style={{
					...styles.block,
					left: `${interpolations.blockMove}%`,
					scale: `${interpolations.blockEntry()}`,
				}}
			>
				<XY
					color="red"
					letter={configs.frame > 470 ? '22' : 'X'}
					frame={[470, 480, 490, 500]}
					opacityValues={[1, 0, 0, 1]}
				/>
			</div>
		</AbsoluteFill>
	);
};

export default LastVideo;
