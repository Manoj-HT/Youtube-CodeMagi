import Background from './Components/Background';
import { CSSProperties } from 'react';
import EndingText from './Components/EndingText';

const Outro = () => {
	// Styles =============================================>
	const styles: { [name: string]: CSSProperties } = {
		container: {
			width: '100%',
			height: '100%',
			position: 'relative',
		},
		backgroundContainer: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			zIndex: 1,
		},
		textConatiner: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			translate: '-50% -50%',
			zIndex: 2,
		},
	};
	// JS =============================================>
	return (
		<>
			<div style={styles.container}>
				<div style={styles.backgroundContainer}>
					<Background />
				</div>
				<div style={styles.textConatiner}>
					<EndingText />
				</div>
			</div>
		</>
	);
};

export default Outro;
