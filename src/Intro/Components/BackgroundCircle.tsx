import {CSSProperties} from 'react';
import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

const BackgroundCircle = () => {
	// styles =============================================>
	const defaults = {
		mainContainerSize: 1800,
		tubeColor: 'transparent',
		loaderColor: 'white',
		tubeWidth: 870,
		centerBackground: 'black',
		time: 0.5,
	};
	const converted = {
		halfSize: defaults.mainContainerSize / 2,
		quarterSize: defaults.mainContainerSize / 4,
	};
	const styles: {[name: string]: CSSProperties} = {
		mainContainer: {
			width: `${defaults.mainContainerSize}px`,
			height: `${defaults.mainContainerSize}px`,
			backgroundColor: 'transparent',
			position: 'relative',
		},
		progressTube: {
			position: 'absolute',
			width: `${converted.halfSize}px`,
			height: `${converted.halfSize}px`,
			top: '50%',
			overflow: 'hidden',
			translate: '-50% -50%',
			backgroundColor: defaults.tubeColor,
			clipPath: 'circle(50% at 0 50%)',
		},
		left: {
			left: '75%',
		},
		right: {
			transform: 'scaleX(-1)',
			left: '25%',
		},
		progressBarContainer: {
			position: 'absolute',
			top: 0,
			// border: '5px solid blue',
			left: `${converted.quarterSize * -1}px`,
			width: `${converted.halfSize}px`,
			height: `${converted.halfSize}px`,
		},
		progressBar: {
			position: 'absolute',
			top: 0,
			left: `${converted.quarterSize * -1}px`,
			width: `${converted.halfSize}px`,
			height: `${converted.halfSize}px`,
			backgroundColor: `${defaults.loaderColor}`,
			clipPath: 'circle(50% at 100% 50%)',
		},
		progressOverlay: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			width: `${defaults.tubeWidth}px`,
			height: `${defaults.tubeWidth}px`,
			transform: 'translate(-50%, -50%)',
			borderRadius: '50%',
			backgroundColor: defaults.centerBackground,
			zIndex: 3,
		},
	};
	//JS =============================================>
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const getInterpolate = (order: boolean) => {
		let totalFramesToAdd = (fps * defaults.time) / 2,
			primary = totalFramesToAdd,
			secondary = primary + totalFramesToAdd,
			fromToFrame,
			easing;
		if (order) {
			fromToFrame = [0, primary];
			easing = Easing.in(Easing.ease);
		} else {
			fromToFrame = [primary, secondary];
			easing = Easing.out(Easing.ease);
		}
		return interpolate(frame, fromToFrame, [0, 180], {
			easing,
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});
	};
	return (
		<>
			<div style={styles.mainContainer}>
				<div style={{...styles.progressTube, ...styles.left}}>
					<div
						style={{
							...styles.progressBarContainer,
							transform: `rotate(${getInterpolate(true)}deg)`,
						}}
					>
						<div style={styles.progressBar}></div>
					</div>
				</div>
				<div style={styles.progressOverlay}></div>
				<div style={{...styles.progressTube, ...styles.right}}>
					<div
						style={{
							...styles.progressBarContainer,
							transform: `rotate(${getInterpolate(false) * -1}deg)`,
						}}
					>
						<div style={styles.progressBar}></div>
					</div>
				</div>
			</div>
		</>
	);
};
export default BackgroundCircle;
