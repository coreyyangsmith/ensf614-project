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
import React, { useRef, useContext } from 'react';

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

import { CAMERA_ZOOM, EARTH_MAP } from '../../../utils/SceneUtilities.js';

//  Gsap
import gsap from 'gsap';
import { Context } from '../Landing.jsx';

//  MAIN FUNCTION
//-------------------------------------------------------//

const EarthAnimated = (props) => {
	const [fromObj, setFromObj, toObj, setToObj] = useContext(Context);

	const { scene } = useThree();

	console.log(scene)
	const lat = fromObj.latitude;
	const lon = fromObj.longitude;

	useFrame(() => {
		if (props.toggle) {
			gsap.to(scene.getObjectByName('Earth').position, {
				duration: 2,
				x: 0,
			});

			gsap.to(scene.getObjectByName('Earth').rotation, {
				duration: 4,
				x: (Math.PI / 180) * lat,
				y: -((Math.PI / 180) * lon),
				z: 0,
			});

			gsap.to(scene.getObjectByName('Earth').position, {
				duration: 4,
				z: CAMERA_ZOOM,
				ease: 'none',
			});
		}
	});

	if (scene.getObjectByName('Earth'))
		scene.remove(scene.getObjectByName('Earth'));

	scene.renderOrder = 0;

	if (props.data) { 
		const results = props.data;

		const arcsData = GetArcsData(fromObj, toObj);
		const labelData = GetLabelData(fromObj, toObj);
		const ringData = GetRippleData(fromObj, toObj);

		console.log('Drawing Animated Globe');

		const group = new THREE.Group();

		const Globe = new ThreeGlobe({
			waitForGlobeReady: false,
			animateIn: false,
		}).globeImageUrl(EARTH_MAP)

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
		.labelResolution(10)

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

		const axes = new THREE.AxesHelper((length = 500));
		group.add(axes);

		const Lights = new THREE.AmbientLight();
		Lights.intensity = 3;

		group.add(Globe);
		group.add(Clouds);
		group.add(Lights);
		group.name = 'Earth';

		group.rotation.x = GLOBE_X_TILT * (Math.PI / 180);
		group.position.x = GLOBE_X_POSITION;

		scene.add(group);

		(function animate() {
			group.rotation.y += GLOBE_Y_ROTATION_SPEED * (Math.PI / 180);
			requestAnimationFrame(animate);
		})();
	}
};
//  EXPORTS
//-------------------------------------------------------//

export default EarthAnimated;
