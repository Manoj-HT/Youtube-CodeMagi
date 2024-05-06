import { CSSProperties } from "react";

const XorY = (props : {color: string, letter: 'X' | 'Y'}) => {
  const {color, letter} = props
	let style: CSSProperties = { 
    width: '200px',
    height: '200px',
    backgroundColor: color,
    borderRadius : '20px'
  };
	return <div style={style} >{letter}</div>;
};
export default XorY