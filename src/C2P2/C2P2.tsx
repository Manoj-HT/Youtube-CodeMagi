import { CSSProperties } from 'react';
import AudioSequences from './Components/AudioSequences';
import HeyThere from '../Shared/Defaults/HeyThere';
import {
	interpolate,
	InterpolateOptions,
	Sequence,
	useCurrentFrame,
} from 'remotion';
import { heyThere, javaDrop } from './Components/styles';
import JavaDrop from './Components/JavaDrop';
import SeeSaw from './Components/SeeSaw';
import LastVideo from './Components/LastVideo';

const C2P2 = () => {
	const styles: { [name: string]: CSSProperties } = {
		background: {
			background:
				'radial-gradient(circle, rgba(17,248,238,1) 0%, rgba(45,139,253,1) 100%)',
			width: '100%',
			height: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
	};
	const configs = {
		frame: useCurrentFrame(),
	};
	const interpolateOptions = {
		hereAndThere: {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		} as InterpolateOptions,
	};
	const interpolations = {
		backgroundOpacity: interpolate(
			configs.frame,
			[0, 120],
			[0, 1],
			interpolateOptions.hereAndThere,
		),
		heyThereFadeOut: interpolate(
			configs.frame,
			[200, 300],
			[1, 0],
			interpolateOptions.hereAndThere,
		),
	};
	return (
		<>
			<div
				style={{
					...styles.background,
					opacity: `${interpolations.backgroundOpacity}`,
				}}
			>
				<Sequence from={1100} durationInFrames={1470}>
					<LastVideo /> 
				</Sequence>
				<Sequence from={600} durationInFrames={500} name="Larger of two num">
					<SeeSaw />
				</Sequence>
				<Sequence
					from={300}
					durationInFrames={300}
					name="Java World"
					style={{ ...javaDrop }}
				>
					<JavaDrop />
				</Sequence>
				<Sequence
					from={120}
					durationInFrames={180}
					name="Hey There"
					style={{ ...heyThere, opacity: `${interpolations.heyThereFadeOut}` }}
				>
					<HeyThere />
				</Sequence>
				<Sequence from={120} name="audio">
					<AudioSequences />
				</Sequence>
			</div>
		</>
	);
};

export default C2P2;
