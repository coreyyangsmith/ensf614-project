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
import React, { useRef } from 'react';

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

// My Assets
import map from '../../../assets/earth-light.jpg';

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

//  CONSTANTS
//-------------------------------------------------------//

// Cloud

//  MAIN FUNCTION
//-------------------------------------------------------//

const Earth = (props) => {
	const { scene } = useThree();
	const globeRef = useRef < Mesh > null;

	useFrame(() => {
		if (!globeRef.current) {
			return;
		}
	});

	while (scene.children.length) {
		scene.remove(scene.children[0]);
	}

	scene.renderOrder = 0;

	if (props.data) {
		const results = props.data;

		// var randomElements = [];
		// randomElements = GetRandomElements(results);
		// var arcsData = GetArcsData(results, randomElements);
		// var labelData = GetLabelData(arcsData);
		// var ringData = GetRippleData(arcsData);

		console.log('draw globe');

		const group = new THREE.Group();

		const Globe = new ThreeGlobe({
			waitForGlobeReady: false,
			animateIn: false,
		}).globeImageUrl(map);

		// .arcsData()
		// .arcColor('color')
		// .arcDashLength(1)
		// .arcDashGap(3)
		// .arcDashInitialGap(() => 1)
		// .arcDashAnimateTime(1500)

		// .ringsData(ringData)
		// //.ringColor(() => colorInterpolator)
		// .ringColor(() => '#14ffff')
		// .ringMaxRadius('maxR')
		// .ringPropagationSpeed('propagationSpeed')
		// .ringRepeatPeriod('repeatPeriod')

		// .labelsData(labelData)
		// .labelText(
		// 	(d) =>
		// 		`${d.countryCode} (${Math.round(d.lat * 1e2) / 1e2}, ${
		// 			Math.round(d.lng * 1e2) / 1e2
		// 		}) \n ${d.cityName}, ${d.countryName}`
		// )
		// .labelSize('size')
		// .labelDotRadius('dot')
		// .labelDotOrientation(() => 'right')
		// .labelColor('color')
		// .labelResolution(10);

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

		group.rotation.x = GLOBE_X_TILT * (Math.PI / 180);
		group.position.x = GLOBE_X_POSITION;

		scene.add(group);
		scene.add(Lights);

		(function animate() {
			group.rotation.y += GLOBE_Y_ROTATION_SPEED * (Math.PI / 180);
			requestAnimationFrame(animate);
		})();
	}
};
//  EXPORTS
//-------------------------------------------------------//

export default Earth;