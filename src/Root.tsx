import { Composition } from 'remotion';
import './index.css';
import Core from './Core/Core';
import { timingInFrames } from './Core/clipTimings';
import C2P2 from './C2P2/C2P2';
export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Core"
				component={Core}
				durationInFrames={timingInFrames().totalTime}
				fps={120}
				width={3840}
				height={2160}
			/>
			<Composition
				id="c2p2"
				component={C2P2}
				durationInFrames={timingInFrames().clipTime}
				fps={120}
				width={3840}
				height={2160}
			/>
		</>
	);
};
