import { useThree } from '@react-three/fiber';
import React from 'react';
import { starTypes } from './starDistributions.js';
import { gaussianRandom } from '../../../utils/GalaxyUtilities.js';
import {
	CORE_X_DIST,
	CORE_Y_DIST,
	GALAXY_THICKNESS,
	BLOOM_LAYER,
} from '../../../utils/GalaxyUtilities.js';
const texture = new THREE.TextureLoader().load('src/assets/star.png');
const materials = starTypes.color.map(
	(color) => new THREE.SpriteMaterial({ map: texture, color: color })
);
import * as THREE from 'three';

const NUM_STARS = 5000;

const Stars = () => {
	class Star {
		constructor(position) {
			this.position = position;
			this.starType = this.generateStarType();
			this.obj = null;
		}

		// Randomly Assign Star Type based on Probablity (starDistribution.js config)
		generateStarType() {
			let num = Math.random() * 100;
			let pct = starTypes.percentage;
			for (let i = 0; i < pct.length; i++) {
				num -= pct[i];
				if (num < 0) {
					return i;
				}
			}
			return 0;
		}
	}

	var stars = generateObject(NUM_STARS, (pos) => new Star(pos));

	function generateObject(numStars, generator) {
		let objects = [];

		for (let i = 0; i < numStars / 4; i++) {
			let pos = new THREE.Vector3(
				gaussianRandom(0, CORE_X_DIST),
				gaussianRandom(0, CORE_Y_DIST),
				gaussianRandom(0, GALAXY_THICKNESS)
			);
			let obj = generator(pos);
			objects.push(obj);
		}
		return objects;
	}

	stars.forEach((el) => {
		let star = new THREE.Sprite(materials[el.starType]);
		star.layers.set(BLOOM_LAYER);

		star.scale.multiplyScalar(starTypes.size[el.starType]);
		star.position.copy(el.position);

		el.obj = star;
	});

	const mapStars = stars.map((value, index) => {
		const r = Math.floor(value.obj.material.color.r * 255)
		const g = Math.floor(value.obj.material.color.g * 255)
		const b = Math.floor(value.obj.material.color.b * 255)
		const colorString = "rgb(" + r + "," + g + "," + b + ")"

		return (
			<sprite position={[value.position.x,value.position.y,value.position.z]} scale={[value.obj.scale.x,value.obj.scale.y,value.obj.scale.z]} id={value.uuid}>
				<spriteMaterial map={texture} color={colorString}/>
			</sprite>
		);
		

	});
	return <>{mapStars}</>;
};

export default Stars;
