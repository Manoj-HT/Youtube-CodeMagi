import {Composition} from 'remotion';
import './index.css';
import Core from './Core/Core';
import { timingInFrames } from './Core/clipTimings';
export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Intro"
				component={Core}
				durationInFrames={timingInFrames().totalTime}
				fps={120}
				width={3840}
				height={2160}
			/>
			{/* <Composition
				id="Clip"
				component={Clip}
				durationInFrames={}
				fps={120}
				width={3840}
				height={2160}
			/> */}
		</>
	);
};
