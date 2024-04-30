import {
	AbsoluteFill,
	Easing,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {linearTiming, TransitionSeries} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import {wipe} from '@remotion/transitions/wipe';
import {CSSProperties} from 'react';
const MyFirstVideo = () => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames, width, height} = useVideoConfig();
	const style: CSSProperties = {
		fontSize: '100px',
		backgroundColor: 'red',
	};
	const interpolated = interpolate(frame, [20, 70], [0, 300], {
		easing: Easing.inOut(Easing.ease),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<>
			<AbsoluteFill
				style={{
					justifyContent: 'flex-end',
					alignItems: 'flex-end',
					fontSize: 30,
					fontFamily: 'Segoe UI',
					textAlign: 'right',
				}}
			>
				The current frame is {frame}.
				<br />
				This {width}x{height}px video is {durationInFrames / fps} seconds long.
				{interpolated}
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `translateX(${interpolated}px)`,
					backgroundColor: 'red',
					width: 100,
					height: 100,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			/>
		</>
	);
};

export default MyFirstVideo;
