import {CSSProperties, useState} from 'react';
import {
	interpolate,
	useCurrentFrame,
	InterpolateOptions,
	Easing,
} from 'remotion';

const Typewriter = (typeWriterProps: TypeWriterProps) => {
	// Styles =============================================>
	const styles: {[key: string]: CSSProperties} = {
		container: {
			width: '2260px',
			height: '160px',
			border: '5px solid red',
			color: 'white',
			fontSize: '80px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			fontFamily: 'Montserrat',
		},
	};
	// JS =============================================>
	const {text} = typeWriterProps;
	const [typeWriter, setTypeWriter] = useState(text);
	const frame = useCurrentFrame();
	const interpolateOptions: InterpolateOptions = {
		easing: Easing.in(Easing.ease),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	};
	const index = interpolate(frame, [0, 20], [0, 10], interpolateOptions);
	return <div style={styles.container}>Typewriter {typeWriter} </div>;
};

export default Typewriter;

type TypeWriterProps = {
	text: string;
};
