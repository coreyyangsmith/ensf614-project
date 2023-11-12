export function gaussianRandom(mean = 0, stdev = 1) {
	let u = 1 - Math.random();
	let v = Math.random();
	let z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

	return z * stdev + mean;
}

// minimum and maximum star sizes
export const STAR_MIN = 0.25;
export const STAR_MAX = 5.0;

export const HAZE_MAX = 50.0;
export const HAZE_MIN = 20.0;
export const HAZE_OPACITY = 0.2;
export const HAZE_COLOR = 0x0082ff;

export const BASE_LAYER = 0;
export const BLOOM_LAYER = 1;
export const OVERLAY_LAYER = 2;

export const BLOOM_PARAMS = {
	exposure: 1,
	bloomStrength: 1.5,
	bloomThreshold: 0.4,
	bloomRadius: 0,
};

export const NUM_STARS = 5000; //not uses
export const CORE_X_DIST = 150; //used
export const CORE_Y_DIST = 150; //used



export const GALAXY_THICKNESS = 0;



export const OUTER_CORE_X_DIST = 600;
export const OUTER_CORE_Y_DIST = 600;

export const ARM_X_DIST = 100; //
export const ARM_X_MEAN = 200; // Where arms are centers

export const ARM_Y_DIST = 50;
export const ARM_Y_MEAN = 100;

export const SPIRAL = 1.0; //how strong spiral is
export const ARMS = 3.0; //number of arms

export const HAZE_RATIO = 0.5;
