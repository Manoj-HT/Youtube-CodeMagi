import {CSSProperties} from 'react';
import { Sequence } from 'remotion';
import BackDrop from './Components/BackDrop';
import BackgroundCircle from './Components/BackgroundCircle';
import ForeDrop from './Components/ForeDrop';

const Intro = () => {
	// styles =============================================>
	const styles: {[key: string]: CSSProperties} = {
		introContainer: {
			width: '100%',
			position: 'relative',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		backDrop: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			zIndex: -1,
		},
		foreDrop: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			translate: '-50% -50%',
			zIndex: 4,
		},
		backgroundCircle: {
			position: 'absolute',
			top: '50%',
			left: '100%',
			zIndex: 0,
			// translate: '-50% -50%',
		},
	};
	//JS =============================================>
	return (
		<div style={styles.introContainer}>
			<div style={styles.backDrop}>
				<BackDrop />
			</div>
			<Sequence from={60} >
			<div style={styles.foreDrop}>
				<ForeDrop />
			</div>
			</Sequence>
			<BackgroundCircle />
			{/* <div style={styles.backgroundCircle}></div> */}
		</div>
	);
};
export default Intro;
