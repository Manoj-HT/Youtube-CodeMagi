import { CSSProperties } from "react";
import { AbsoluteFill } from "remotion";

const XY = (props : {color: string, letter: string}) => {
  const {color, letter} = props
	let style: CSSProperties = { 
    width: '400px',
    height: '400px',
    background: color, 
    borderRadius : '80px',
    margin: '10px',
    color: 'white',
    fontSize:'250px',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
  };
	return <div style={style} >{letter}</div>;
};
export default XY