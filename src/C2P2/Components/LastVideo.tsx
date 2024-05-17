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
    block0 : {
      position: 'absolute',
			top: '50%',
			translate: '-50% -50%',
    }
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
		blockEntry: spring({ frame: configs.frame, fps: configs.video.fps }),
		blockMove: interpolate(
			configs.frame,
			[470, 490],
			[50, 70],
			interpolationOptions.hereAndThere,
		),
	};
	return (
		<AbsoluteFill style={styles.container}>
      <div style={{...styles.block0, left: '30%'}} >
        <XY color='black' letter='0' />
      </div>
      <div>
        <XY color='' letter='+' />
      </div>
			<div
				style={{
					...styles.block,
					left: `${interpolations.blockMove}%`,
					scale: `${interpolations.blockEntry}`,
				}}
			>
				<XY color="red" letter={configs.frame > 470 ? '22' : 'X'} />
			</div>
		</AbsoluteFill>
	);
};

export default LastVideo;
