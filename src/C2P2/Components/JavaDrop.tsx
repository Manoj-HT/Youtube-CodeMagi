import { CSSProperties } from 'react';
import {
	staticFile,
	Img,
	useCurrentFrame,
	interpolate,
	spring,
	useVideoConfig,
	InterpolateOptions,
} from 'remotion';

const JavaDrop = () => {
	const styles: { [name: string]: CSSProperties } = {
		container: {
			width: '100%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			border: '4px solid black',
			borderRadius: '50%',
		},
	};
	const frame = useCurrentFrame();
	const { fps, durationInFrames } = useVideoConfig();
	const interpolateOptions: InterpolateOptions = {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	};
	const container = {
		opacity: interpolate(frame, [0, 60], [0, 1], interpolateOptions),
		scale: spring({ frame, fps, from: 0.5, to: 1 }),
	};
	const javaLogo = {
		opacity: interpolate(
			frame,
			[0, 200, durationInFrames],
			[0, 0, 1],
			interpolateOptions
		),
		drop: spring({ frame, fps, from: -80, to: 0, delay: 200 }),
	};
  console.log(javaLogo.drop)
	return (
		<>
			<div
				style={{
					...styles.container,
					opacity: `${container.opacity}`,
					scale: `${container.scale}`,
				}}
			>
				<div
					style={{
						opacity: `${javaLogo.opacity}`,
						translate: `0 ${javaLogo.drop}%`,
					}}
				>
					<Img src={staticFile('c2p2/Java.webp')} />
				</div>
			</div>
		</>
	);
};

export default JavaDrop;
