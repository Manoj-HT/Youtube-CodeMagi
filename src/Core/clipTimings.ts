let time = 75;

export const timingInFrames = () => {
	let clipTime = time * 120;
	let totalTime = clipTime + 1200;
  return {clipTime, totalTime}
};

//background: rgb(17,248,238);
//background: radial-gradient(circle, rgba(17,248,238,1) 0%, rgba(45,139,253,1) 100%);