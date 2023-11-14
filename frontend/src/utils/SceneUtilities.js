// CAMERA
export const CAMERA_ZOOM = 60;

// PLANE
export const PLANE_ELEVATION = 100 + CAMERA_ZOOM;
export const PLANE_SCALE = 0.015;

// GLOBE DEFAULTS
export const EARTH_MAP = 'src/assets/earth-light-high-res.jpg';

export function midPoint(lat1, lon1, lat2, lon2) {
	var dLon = toRadians(lon2 - lon1);

	// Convert to radians
	lat1 = toRadians(lat1);
	lat2 = toRadians(lat2);
	lon1 = toRadians(lon1);

	const Bx = Math.cos(lat2) * Math.cos(dLon);
	const By = Math.cos(lat2) * Math.sin(dLon);

	var lon3 = lon1 + Math.atan2(By, Math.cos(lat1) + Bx);
	var lat3 = Math.atan2(
		Math.sin(lat1) + Math.sin(lat2),
		Math.sqrt((Math.cos(lat1) + Bx) * (Math.cos(lat2) + Bx) + By * By)
	);

    lat3 = toDegrees(lat3);
    lon3 = toDegrees(lon3);

	const results = [lat3, lon3];
	return results;
}

export function angleBetweenPoints(lat1, lon1, lat2, lon2) {
    var dLon = (lon2 - lon1);

    lat1 = toRadians(lat1);
    lon1 = toRadians(lon1);
    lat2 = toRadians(lat2);
    lon2 = toRadians(lon2);

    // Calculate the angle using the arctangent function
    var angle = Math.atan2(Math.sin(dLon) * Math.cos(lat2), Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon));
    angle = toDegrees(angle);

    // Ensure the angle is in the range [0, 360)
    angle = (angle + 360) % 360;

    return angle;
}

export function angleBetweenPoints2(lat1, lon1, lat2, lon2) {
    lat1 = toRadians(lat1);
    lon1 = toRadians(lon1);
    lat2 = toRadians(lat2);
    lon2 = toRadians(lon2);

    const y = Math.sin(lon2-lon1) * Math.cos(lat2)
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1)*Math.cos(lat2)*Math.cos(lat2-lat1);
    const theta = Math.atan2(y, x);

    const bearing = (theta * 180/Math.PI + 360) & 360

    return bearing;
}

function toRadians(degrees) {
	return (degrees * Math.PI) / 180;
}

function toDegrees(radians) {
	return (radians * 180) / Math.PI;
}
