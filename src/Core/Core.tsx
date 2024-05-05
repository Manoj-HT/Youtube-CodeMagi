import { Sequence, useVideoConfig } from 'remotion';
import C2P2 from '../C2P2/C2P2';
import Intro from '../Intro/Intro';
import Outro from '../Outro/Outro';

const Core = () => {
	let { durationInFrames } = useVideoConfig();
	let outroFrameTime = durationInFrames - 600;
	return (
		<>
			<Sequence from={0}>
				<Intro />
			</Sequence>
			<Sequence from={600}>
				<C2P2 />
			</Sequence>
			<Sequence from={outroFrameTime}>
				<Outro />
			</Sequence>
		</>
	);
};

export default Core;
