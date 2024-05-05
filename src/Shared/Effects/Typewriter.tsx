import { CSSProperties, useEffect, useState } from 'react';
import { interpolate, useCurrentFrame, InterpolateOptions } from 'remotion';

const Typewriter = (typeWriterProps: TypeWriterProps) => {
	const { text, fromToFrame, fontSize, width, height, fontColor } =
		typeWriterProps;
	// Styles =============================================>
	const styles: { [key: string]: CSSProperties } = {
		container: {
			width: width
				? typeof width == 'string'
					? width
					: width + 'px'
				: '2260px',
			height: height
				? typeof height == 'string'
					? height
					: height + 'px'
				: '160px',
			color: fontColor ? fontColor : 'white',
			fontSize: fontSize ? fontSize + 'px' : '80px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			fontFamily: 'Montserrat',
		},
	};
	// JS =============================================>
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

	return <span style={styles.container}>{typeWriterText}</span>;
};

export default Typewriter;

type TypeWriterProps = {
	text: string;
	fromToFrame: [number, number];
	width?: number | string;
	height?: number | string;
	fontSize?: number;
	fontColor?: string;
};
