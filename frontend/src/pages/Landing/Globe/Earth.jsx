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
import React from 'react';

// Three Globe
import ThreeGlobe from 'three-globe';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Utilities
import {
	GetArcsData,
	GetRandomElements,
	GetLabelData,
	GetRippleData,
} from '../../../utils/GlobeUtilities.js';

// My Assets
import map from '../../../assets/earth-light.jpg';

//  CONSTANTS
//-------------------------------------------------------//

// Cloud
const CLOUDS_ALT = 0.008;
const CLOUDS_IMG_URL = 'src/assets/clouds.png';
const CLOUDS_ROTATION_SPEED = -0.006; //deg/frame

//  MAIN FUNCTION
//-------------------------------------------------------//

const Earth = (props) => {
	const { scene } = useThree();

	while (scene.children.length) {
		console.log(scene)
		scene.remove(scene.children[0]);
	}

	scene.renderOrder = 0


	if (props.data) {
		const results = props.data;

		// var randomElements = [];
		// randomElements = GetRandomElements(results);
		// var arcsData = GetArcsData(results, randomElements);
		// var labelData = GetLabelData(arcsData);
		// var ringData = GetRippleData(arcsData);

		console.log('draw globe');

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
			Clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
			requestAnimationFrame(rotateClouds);
		})();

		const Lights = new THREE.AmbientLight()
		Lights.intensity = 3


		scene.add(Globe);
		scene.add(Clouds);
		scene.add(Lights);
	}
};
//  EXPORTS
//-------------------------------------------------------//

export default Earth;
