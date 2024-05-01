import {CSSProperties, useEffect, useState} from 'react';
import {
	interpolate,
	useCurrentFrame,
	InterpolateOptions,
} from 'remotion';

const Typewriter = (typeWriterProps: TypeWriterProps) => {
	// Styles =============================================>
	const styles: {[key: string]: CSSProperties} = {
		container: {
			width: '2260px',
			height: '160px',
			color: 'white',
			fontSize: '80px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			fontFamily: 'Montserrat',
		},
	};
	// JS =============================================>
	const {text, fromToFrame} = typeWriterProps;
	const textArray = text.split('');
	const frame = useCurrentFrame();
	const interpolateOptions: InterpolateOptions = {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	};
	const index = Math.floor(
		interpolate(frame, fromToFrame, [0, textArray.length], interpolateOptions)
	);
	const [typeWriterText, setTypeWriterText] = useState('');
	useEffect(() => {
		setTypeWriterText(text.slice(0, index));
	}, [index, text]);

	return <div style={styles.container}>{typeWriterText}</div>;
};

export default Typewriter;

type TypeWriterProps = {
	text: string;
	fromToFrame: [number, number];
};
