import { Composition } from 'remotion';
import './index.css';
import Core from './Core/Core';
import { timingInFrames } from './Core/clipTimings';
import Outro from './Outro/Outro';
export const RemotionRoot: React.FC = () => {
	return (
		<>
			{/* <Composition
				id="Intro"
				component={Core}
				durationInFrames={timingInFrames().totalTime}
				fps={120}
				width={3840}
				height={2160}
			/> */}
			<Composition
				id="Outro"
				component={Outro}
				durationInFrames={600}
				fps={120}
				width={3840}
				height={2160}
			/>
		</>
	);
};
