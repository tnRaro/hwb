export const hueToRGB = (hue: number): RGB => {
  hue = hue % 360;
	const x = 1 - Math.abs(((hue / 60) % 2) - 1);
	if (hue < 60) {
		return [1, x, 0];
	} else if (hue < 120) {
		return [x, 1, 0];
	} else if (hue < 180) {
		return [0, 1, x];
	} else if (hue < 240) {
		return [0, x, 1];
	} else if (hue < 300) {
		return [x, 0, 1];
	} else if (hue < 360) {
		return [1, 0, x];
	} else {
		throw new Error('Invalid hue');
	}
};
