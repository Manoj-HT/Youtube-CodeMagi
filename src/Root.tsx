import { Composition } from 'remotion';
import './index.css';
import Core from './Core/Core';
import { timingInFrames } from './Core/clipTimings';
import HeyThere from './Shared/Defaults/HeyThere';
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
				id="heythere"
				component={HeyThere}
				durationInFrames={600}
				fps={120}
				width={3840}
				height={2160}
			/>
		</>
	);
};
