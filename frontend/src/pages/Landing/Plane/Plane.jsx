import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import { Stars } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';

import { PLANE_ELEVATION, PLANE_SCALE } from '../../../utils/SceneUtilities.js';

export default function Plane(props) {
	const { scene } = useThree();

	const gltf = useLoader(GLTFLoader, '/airplane.gltf');

	gltf.scene.visible = false;
	gltf.scene.scale.set(PLANE_SCALE, PLANE_SCALE, PLANE_SCALE);
	gltf.scene.position.set(-100, 0, PLANE_ELEVATION * 2);
	gltf.scene.rotation.set(
		(Math.PI / 180) * 90,
		(Math.PI / 180) * 90,
		(Math.PI / 180) * 0
	);

	// Axes Helper
	// const axes = new THREE.AxesHelper(500);
	// gltf.scene.add(axes);

	useFrame(() => {
		if (props.toggle) {
			const obj = scene.getObjectByName('Sketchfab_Scene');
			gltf.scene.visible = true;

			let tl = gsap.timeline();
			gsap.ticker.fps(120);
			tl.to(obj.position, {
				x: -3,
				y: 0,
				z: PLANE_ELEVATION,
				duration: 2,
				ease: 'expo.in',
			})

				// Landing
				.to(
					obj.position,
					{
						x: 0,
						y: 0,
						z: PLANE_ELEVATION,
						duration: 5,
						ease: 'none',
					},
					'>2'
				)
                .to(
					obj.position,
					{
						x: 10,
						y: 0,
						z: PLANE_ELEVATION + 10,
						duration: 3,
						ease: 'expo.in',
					},
					'>2'
				)

			console.log(obj);
			// Landing

			// gsap.to(obj.rotation, {
			// 	x: (Math.PI / 180) * 90,
			// 	y: (Math.PI / 180) * 90,
			// 	z: (Math.PI / 180) * 0,
			//     delay: 0
			// });

			// gsap.to(obj.position, {
			// 	x: 0,
			// 	y: 0,
			// 	z: PLANE_ELEVATION,
			//     delay: 0
			// });

			// gsap.to(obj.position, {
			// 	x: 50,
			// 	y: 0,
			// 	z: PLANE_ELEVATION,
			//     duration: 3,
			//     ease: "power1.out"
			// }, "+=1");

			// var tl = gsap.timeline({ repeat: 0 });

			// tl.to(obj.rotation, {
			// 	x: (Math.PI / 180) * 90,
			// 	y: (Math.PI / 180) * 90,
			// 	z: (Math.PI / 180) * 0,
			// 	duration: 1,
			// });

			// tl.to(obj.position, { x: 0, y: 0, z: PLANE_ELEVATION, duration: 5 }, ">");
			// tl.to(obj.position, { x: 3, y: 0, z: PLANE_ELEVATION, duration: 1 }, ">");
		}
	});

	if (!gltf) return;

	return <primitive object={gltf.scene}></primitive>;
}
