import {CSSProperties} from 'react';
import {
	Easing,
	interpolate,
	useCurrentFrame,
	InterpolateOptions,
} from 'remotion';
const ForeDrop = () => {
	// styles =============================================>
	const styles: {[key: string]: CSSProperties} = {
		mainContainer: {
			height: '900px',
			backgroundColor: 'rebeccapurple',
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
	//JS =============================================>
	const interpolateOptions: InterpolateOptions = {
		easing: Easing.in(Easing.ease),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	};
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [0, 30], [1, 0.25], interpolateOptions);
	const circleOacity = interpolate(frame, [0, 30], [0, 1], interpolateOptions);
	const width = interpolate(frame, [30, 60], [900, 6900], interpolateOptions);
	const opacity = interpolate(frame, [90, 150], [0, 1], {
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
