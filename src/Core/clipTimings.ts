let time = 1;

export const timingInFrames = () => {
	let clipTime = time * 120;
	let totalTime = clipTime + 1200;
  return {clipTime, totalTime}
};
