import { CSSProperties } from 'react';
import {
	Img,
	interpolate,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
const Background = () => {
	// Styles =============================================>
	const styles: { [name: string]: CSSProperties } = {
		container: {
			width: '100%',
			height: '100%',
			position: 'relative',
			backgroundColor: 'black',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		background: {
			position: 'absolute',
			top: 0,
			left: 0,
			zIndex: 1,
		},
		planetOne: {
			position: 'absolute',
			top: '65%',
			left: '3%',
			zIndex: 2,
		},
		planetTwo: {
			position: 'absolute',
			top: '1%',
			left: '85%',
			zIndex: 2,
		},
	};
	// JS =============================================>
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	type interPolateValue = [number, number];
	const getInterPolate = (
		fromToFrame: interPolateValue,
		valueFromToFrame: interPolateValue
	) => {
		return interpolate(frame, fromToFrame, valueFromToFrame, {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});
	};
	const bgOpacity = getInterPolate([0, 60], [0, 1]);
	const rocketMoving = getInterPolate([60, 150], [0, 100]);
	const planetOpacity = getInterPolate([180, 240], [0, 1]);
	const floatOption = {
		framesForOscillation: [240, 360, 480, 600],
		oscillationY: [10, -10, 10, -10],
	};
	const planetFloat = (planet: boolean) => {
		return interpolate(
			frame,
			floatOption.framesForOscillation,
			planet ? floatOption.oscillationY : floatOption.oscillationY.reverse()
		);
	};
	return (
		<>
			<div style={{ ...styles.container, opacity: `${bgOpacity}` }}>
				<div
					style={{
						...styles.background,
						translate: `0 calc( 2160px - ${rocketMoving}% )`,
					}}
				>
					<Img src={staticFile('outro/bg-rocket.png')} />
				</div>
				<div
					style={{
						...styles.planetOne,
						opacity: `${planetOpacity}`,
						translate: `0 ${planetFloat(true)}%`,
					}}
				>
					<Img src={staticFile('outro/blue-planet.png')} />
				</div>
				<div
					style={{
						...styles.planetTwo,
						opacity: `${planetOpacity}`,
						translate: `0 ${planetFloat(false)}%`,
					}}
				>
					<Img src={staticFile('outro/green-planet.png')} />
				</div>
			</div>
		</>
	);
};

export default Background;
