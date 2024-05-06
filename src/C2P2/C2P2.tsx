import { CSSProperties } from 'react';
import AudioSequences from './Components/AudioSequences';
import HeyThere from '../Shared/Defaults/HeyThere';
import { Folder, Sequence } from 'remotion';
import JavaDrop from './Components/JavaDrop';
import { heyThere, javaDrop } from './Components/styles';

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
	return (
		<>
			<div style={styles.background}>
				<Sequence
					from={0}
					name="Hey there"
					durationInFrames={120}
					style={heyThere}
				>
					<HeyThere />
				</Sequence>
				<Sequence
					from={120}
					name="Java Drop"
					style={javaDrop}
					durationInFrames={450 - 120}
				>
					<JavaDrop />
				</Sequence>
				<Sequence name="See-Saw" from={450} durationInFrames={900 - 450}>
					<div></div>
				</Sequence>
			</div>
			<AudioSequences />
		</>
	);
};

export default C2P2;
