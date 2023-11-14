//-------------------------------------------------------//
//  File Name: Earth.jsx
//  Description: Three-Globe scene of Earth
//
//  Requirements:
//      - CanvasElement.jsx
//
//  Renders:
//      - Earth.jsx
//
// Created By: Corey Yang-Smith
// Date: November 11th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React, { useRef, useContext, useLayoutEffect, useEffect } from 'react';

// Three Globe
import ThreeGlobe from 'three-globe';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Mesh } from 'three';

// Utilities
import {
	GetArcsData,
	GetRandomElements,
	GetLabelData,
	GetRippleData,
} from '../../../utils/GlobeUtilities.js';

// Utilities
import {
	GLOBE_X_TILT,
	CLOUDS_ALT,
	CLOUDS_IMG_URL,
	CLOUDS_X_ROTATION_SPEED,
	CLOUDS_Y_ROTATION_SPEED,
	GLOBE_Y_ROTATION_SPEED,
	GLOBE_X_POSITION,
} from './config.js';

import {
	CAMERA_ZOOM,
	EARTH_MAP,
	midPoint,
} from '../../../utils/SceneUtilities.js';

//  Gsap
import gsap from 'gsap';
import { Context } from '../Landing.jsx';
import { useScroll } from '@react-three/drei';

//  MAIN FUNCTION
//-------------------------------------------------------//

const EarthAnimated = (props) => {


	const { scene } = useThree();
	const ref = useRef(scene.getObjectByName('Earth'));
	const tl = useRef();
	const scroll = useScroll();

	const [fromObj, setFromObj, toObj, setToObj] = useContext(Context);

	const startLat = fromObj.latitude;
	const startLon = fromObj.longitude;

	const endLat = toObj.latitude;
	const endLon = toObj.longitude;

	const midpoint = midPoint(startLat, startLon, endLat, endLon);
	const midLat = midpoint[0];
	const midLon = midpoint[1];

	const arcsData = GetArcsData(fromObj, toObj);
	const labelData = GetLabelData(fromObj, toObj);
	//const ringData = GetRippleData(fromObj, toObj);

	// Delete Previous Earth
	if (scene.getObjectByName('Earth'))
		scene.remove(scene.getObjectByName('Earth'));


	const group = new THREE.Group();

	const Globe = new ThreeGlobe({
		waitForGlobeReady: false,
		animateIn: false,
	})
		.globeImageUrl(EARTH_MAP)

		.arcsData(arcsData)
		.arcColor('color')
		.arcDashLength(1)
		.arcDashGap(3)
		.arcDashInitialGap(() => 1)
		.arcDashAnimateTime(1500)

		.labelsData(labelData)
		.labelText(
			(d) =>
				`${d.airportCode} (${Math.round(d.lat * 1e2) / 1e2}, ${
					Math.round(d.lng * 1e2) / 1e2
				}) \n ${d.name}`
		)
		.labelSize('size')
		.labelDotRadius('dot')
		.labelDotOrientation(() => 'right')
		.labelColor('color')
		.labelResolution(10);

	// TODO RINGS need to rotate
	// .ringsData(ringData)
	// //.ringColor(() => colorInterpolator)
	// .ringColor(() => '#14ffff')
	// .ringMaxRadius('maxR')
	// .ringPropagationSpeed('propagationSpeed')
	// .ringAltitude(.01)
	// .ringRepeatPeriod('repeatPeriod');

	const Clouds = new THREE.Mesh(
		new THREE.SphereGeometry(
			Globe.getGlobeRadius() * (1 + CLOUDS_ALT),
			100,
			100
		)
	);
	new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
		Clouds.material = new THREE.MeshPhongMaterial({
			map: cloudsTexture,
			transparent: true,
		});
	});

	(function rotateClouds() {
		Clouds.rotation.x += (CLOUDS_X_ROTATION_SPEED * Math.PI) / 180;
		Clouds.rotation.y += (CLOUDS_Y_ROTATION_SPEED * Math.PI) / 180;
		requestAnimationFrame(rotateClouds);
	})();

	const Lights = new THREE.AmbientLight();
	Lights.intensity = 3;

	group.add(Globe);
	group.add(Clouds);
	group.add(Lights);
	group.name = 'Earth';

	scene.add(group);
};
//  EXPORTS
//-------------------------------------------------------//

export default EarthAnimated;
