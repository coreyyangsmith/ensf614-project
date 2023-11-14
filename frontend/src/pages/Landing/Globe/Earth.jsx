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

// Three Globe
import ThreeGlobe from 'three-globe';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

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

import { EARTH_MAP } from "../../../utils/SceneUtilities.js"


//  MAIN FUNCTION
//-------------------------------------------------------//

const Earth = (props) => {
	const { scene } = useThree();

	if (scene.getObjectByName("Earth"))
		scene.remove(scene.getObjectByName("Earth"))


	if (props.data) {
		const results = props.data;

		console.log('Drawing Globe');

		const group = new THREE.Group();

		const Globe = new ThreeGlobe({
			waitForGlobeReady: false,
			animateIn: false,
		}).globeImageUrl(EARTH_MAP);

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
		
		const axes = new THREE.AxesHelper(length=500)
		group.add(axes)

		const Lights = new THREE.AmbientLight();
		Lights.intensity = 3;

		group.add(Globe);
		group.add(Clouds);
		group.add(Lights);
		group.name = "Earth"

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

export default Earth;
