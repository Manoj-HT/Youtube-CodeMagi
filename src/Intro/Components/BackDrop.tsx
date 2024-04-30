import {CSSProperties} from 'react';
import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

const BackDrop = () => {
	// Styles =============================================>
	const styles: {[key: string]: CSSProperties} = {
		mainContainer: {
			width: '100%',
			height: '100%',
			position: 'relative',
		},
		img: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			translate: '-50% -50%',
		},
	};
	// JS =============================================>
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [0, 599], [0.5, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<div style={styles.mainContainer}>
			<Img src={staticFile('bg.png')} />
			<Img
				style={{...styles.img, transform: `scale(${scale})`}}
				src={staticFile('stars.png')}
			/>
		</div>
	);
};
export default BackDrop;
