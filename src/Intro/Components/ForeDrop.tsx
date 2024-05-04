import {CSSProperties} from 'react';
import {
	Easing,
	interpolate,
	useCurrentFrame,
	InterpolateOptions,
} from 'remotion';
const ForeDrop = () => {
	// Styles =============================================>
	const styles: {[key: string]: CSSProperties} = {
		mainContainer: {
			height: '900px',
			background:
				'linear-gradient(90deg, rgba(96,39,180,1) 0%, rgba(158,0,181,1) 100%)',
			borderRadius: '900px',
			fontSize: '450px',
			fontFamily: 'Montserrat',
			color: 'white',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			border: '60px solid white',
		},
	};
	// JS =============================================>
	const interpolateOptions: InterpolateOptions = {
		easing: Easing.in(Easing.ease),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	};
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [60, 90], [1, 0.25], interpolateOptions);
	const circleOacity = interpolate(frame, [60, 90], [0, 1], interpolateOptions);
	const width = interpolate(frame, [90, 120], [900, 6900], interpolateOptions);
	const opacity = interpolate(frame, [120, 180], [0, 1], {
		extrapolateRight: 'clamp',
	});
	return (
		<div
			style={{
				...styles.mainContainer,
				transform: `scale(${scale})`,
				width: `${width}px`,
				opacity: `${circleOacity}`,
			}}
		>
			<span style={{opacity: `${opacity}`}}>C O D E M A G I</span>
		</div>
	);
};

export default ForeDrop;
