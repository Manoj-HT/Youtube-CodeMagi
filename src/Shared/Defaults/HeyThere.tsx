import { CSSProperties } from 'react';
import { useCurrentFrame, interpolate, spring } from 'remotion';
import { useVideoConfig } from 'remotion';

const HeyThere = () => {
	// Styles =============================================>
	const styles: { [name: string]: CSSProperties } = {
		span: {
			fontSize: '150px',
			height: '180px',
			fontFamily: 'Montserrat',
		},
	};
	// JS =============================================>
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const span = {
		opacity: (frameValue: [number, number]) =>
			interpolate(frame, frameValue, [0, 1], {
				extrapolateLeft: 'clamp',
				extrapolateRight: 'clamp',
			}),
		scale: (delay?: number) => spring({ frame, fps, from: 0, to: 1, delay }),
	};
	return (
		<>
			<span
				style={{
					...styles.span,
					opacity: `${span.opacity([0, 10])}`,
					scale: `${span.scale()}`,
				}}
			>
				HEY
			</span>
			{'     '}
			&nbsp; &nbsp; &nbsp; +&nbsp;
			<span
				style={{
					...styles.span,
					opacity: `${span.opacity([20, 30])}`,
					scale: `${span.scale(10)}`,
				}}
			>
				THERE!
			</span>
		</>
	);
};

export default HeyThere;
