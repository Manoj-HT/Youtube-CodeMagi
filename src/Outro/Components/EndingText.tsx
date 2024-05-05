import { CSSProperties } from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import Typewriter from '../../Shared/Effects/Typewriter';
const EndingText = () => {
	// Styles =============================================>
	const styles: { [name: string]: CSSProperties } = {
		thanksText: {
			fontSize: '140px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontFamily: 'Montserrat',
			color: 'white',
		},
		channelWishers: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			gap: '140px',
		},
	};
	// JS =============================================>
	const frame = useCurrentFrame();
	const thanksTextOpacity = interpolate(frame, [240, 300], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<div>
			<p style={{ ...styles.thanksText, opacity: `${thanksTextOpacity}` }}>
				THANKS FOR WATCHING
			</p>
			<div style={styles.channelWishers}>
				<div>
					<Typewriter
						fromToFrame={[300, 310]}
						text="LIKE"
						width="max-content"
					/>
				</div>
				<div>
					<Typewriter
						fromToFrame={[340, 360]}
						text="SHARE"
						width="max-content"
					/>
				</div>
				<div>
					<Typewriter
						fromToFrame={[390, 420]}
						text="SUBSCRIBE"
						width="max-content"
					/>
				</div>
			</div>
		</div>
	);
};

export default EndingText;
