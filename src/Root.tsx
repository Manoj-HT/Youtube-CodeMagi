import {Composition} from 'remotion';
import './index.css';
import Core from './Core/Core';
export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Intro"
				component={Core}
				durationInFrames={600}
				fps={120}
				width={3840}
				height={2160}
			/>
		</>
	);
};
