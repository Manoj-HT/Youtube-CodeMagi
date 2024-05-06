import { CSSProperties } from 'react';
const widthHeight: CSSProperties = {
	width: 'max-content',
	height: 'max-content',
};
const border = '5px solid red';
const positionCenter: CSSProperties = {
	top: '50%',
	left: '50%',
	translate: '-50% -50%',
};
export const heyThere: CSSProperties = {
	...widthHeight,
	...positionCenter,
};
export const javaDrop: CSSProperties = {
	padding: '10px',
	width: '700px',
	height: '700px',
	...positionCenter,
};

