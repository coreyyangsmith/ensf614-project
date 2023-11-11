const N_ELEMENTS = 1

// Label Settings
const LABEL_TEXT_SIZE = 0.75;
const LABEL_COLOR = 'white';
const LABEL_DOT_SIZE = LABEL_TEXT_SIZE / 4;

// Arc Settings
// TODO

// Ripple Settings
const MAX_R = 4;
const PROPAGATION_SPEED = 0.65;
const REPEAT_PERIOD = 2200;

export function GetLabelData(arcsData) {
	const N = arcsData.length;
	var labels = [];

	// For each coordiante, will have two labels
	function getStartLabel(i) {
		const lat = arcsData[i].startLat;
		const lng = arcsData[i].startLng;
		const size = LABEL_TEXT_SIZE;
		const dot = LABEL_DOT_SIZE;
		const color = LABEL_COLOR;
		const countryCode = arcsData[i].startCountryCode;
		const countryName = arcsData[i].startCountryName;
		const cityName = arcsData[i].startCityName;

		const obj = {
			lat: lat,
			lng: lng,
			size: size,
			color: color,
			dot: dot,
			countryCode: countryCode,
			countryName: countryName,
			cityName: cityName,
		};

		return obj;
	}

	function getEndLabel(i) {
		const lat = arcsData[i].endLat;
		const lng = arcsData[i].endLng;
		const size = LABEL_TEXT_SIZE;
		const dot = LABEL_DOT_SIZE;
		const color = LABEL_COLOR;
		const countryCode = arcsData[i].endCountryCode;
		const countryName = arcsData[i].endCountryName;
		const cityName = arcsData[i].endCityName;

		const obj = {
			lat: lat,
			lng: lng,
			size: size,
			color: color,
			dot: dot,
			countryCode: countryCode,
			countryName: countryName,
			cityName: cityName,
		};

		return obj;
	}
	for (var i = 0; i < N; i++) {
		labels.push(getStartLabel(i));
		labels.push(getEndLabel(i));
	}

	return labels;
}

export function GetRippleData(arcsData) {
	const N = arcsData.length;
	var ripples = [];

	function getRipple(latitude, longitude) {
		const lat = latitude;
		const lng = longitude;
		const max_r = MAX_R;
		const propagation_speed = PROPAGATION_SPEED;
		const repeat_period = REPEAT_PERIOD;

		const obj = {
			lat: lat,
			lng: lng,
			maxR: max_r,
			propagationSpeed: propagation_speed,
			repeatPeriod: repeat_period,
		};

		return obj;
	}

	for (var i = 0; i < N; i++) {
		ripples.push(getRipple(arcsData[i].startLat, arcsData[i].startLng));
		ripples.push(getRipple(arcsData[i].endLat, arcsData[i].endLng));
	}
	return ripples;
}

export function GetArcsData(results, randomElements) {
	const N = N_ELEMENTS;
	var coordinates = [];

	function getCoordinates() {
		const startCountryCode = results[randomElements[0]][0];
		const startCountryName = results[randomElements[0]][1];
		const startCityName = results[randomElements[0]][2];
		const startLat = results[randomElements[0]][3];
		const startLng = results[randomElements[0]][4];
		const endCountryCode = results[randomElements[1]][0];
		const endCountryName = results[randomElements[1]][1];
		const endCityName = results[randomElements[1]][2];
		const endLat = results[randomElements[1]][3];
		const endLng = results[randomElements[1]][4];
		const color = 'white';

		const obj = {
			startCountryCode: startCountryCode,
			startCountryName: startCountryName,
			startCityName: startCityName,
			startLat: startLat,
			startLng: startLng,
			endCountryCode: endCountryCode,
			endCountryName: endCountryName,
			endCityName: endCityName,
			endLat: endLat,
			endLng: endLng,
			color: color,
		};

		return obj;
	}

	for (var i = 0; i < N; i++) coordinates.push(getCoordinates());

	return coordinates;
}

export function GetRandomElements(results) {
	const N = N_ELEMENTS;
	var randomElements = [];

	if (results != undefined && results.length > 0) {
		for (var i = 0; i < N; i++) {
			const numElements = results.length;
			const randomElement = getRandomInt(numElements);
			const randomElement2 = getRandomInt(numElements);
			randomElements.push(randomElement);
			randomElements.push(randomElement2);
		}
	}


	return randomElements;
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
