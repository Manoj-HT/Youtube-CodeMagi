import {Composition} from 'remotion';
import Intro from './Intro/Intro';
import './index.css';
export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Intro"
				component={Intro}
				durationInFrames={600}
				fps={120}
				width={3840}
				height={2160}
			/>
		</>
	);
};
