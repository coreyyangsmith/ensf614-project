import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useContext, useLayoutEffect } from 'react';
import { Stars, useGLTF, useScroll } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

import { useRef } from 'react';
// GSAP Import
import gsap from 'gsap';

// Utilities/Constants
import { PLANE_ELEVATION, PLANE_SCALE } from '../../../utils/SceneUtilities.js';

// My Context
import { Context } from '../Landing.jsx';
import { tensor1d } from '@tensorflow/tfjs-core';

export default function Plane(props) {
	const { scene } = useThree();
	const [fromObj, setFromObj, toObj, setToObj] = useContext(Context);
	const ref = useRef();
	const tl = useRef();

	const scroll = useScroll();

	// Import Object
	const { nodes, materials } = useGLTF('./models//airplane.gltf');

	// initial state

	// Axes Helper
	// const axes = new THREE.AxesHelper(500);
	// gltf.scene.add(axes);

	useLayoutEffect(() => {
		tl.current = gsap.timeline();

		// Animation
		// Initial State
	

		// Transition to Parked
		tl.current.to(
			ref.current.position,
			{
				x: 0,
				y: 0,
				z: PLANE_ELEVATION + 5,
				duration: 1,
				ease: 'none',
			},
			0
		);
		tl.current.to(
			ref.current.scale,
			{
				x: PLANE_SCALE,
				y: PLANE_SCALE,
				z: PLANE_SCALE,
				duration: 1,
				ease: 'none',
			},
			0
		);

		// Delay 1 second pause
		// +1

		// Transition to Flying
		tl.current.to(
			ref.current.position,
			{
				x: 0,
				y: 0,
				z: PLANE_ELEVATION + 7,
				duration: 1,
				ease: 'none',
			},
			2
		);
		tl.current.to(
			ref.current.scale,
			{
				x: PLANE_SCALE * 4,
				y: PLANE_SCALE * 4,
				z: PLANE_SCALE * 4,
				ease: 'none',
				duration: 1
			},
			2
		);

		// Delay 1 second pause
		// +1

		// Transition to Parked
		tl.current.to(
			ref.current.position,
			{
				x: 0,
				y: 0,
				z: PLANE_ELEVATION + 5,
				duration: 1,
				ease: 'none',
			},
			4
		);
		tl.current.to(
			ref.current.scale,
			{
				x: PLANE_SCALE,
				y: PLANE_SCALE,
				z: PLANE_SCALE,
				duration: 1,
				ease: 'none',
			},
			4
		);

		// Fly Away
		tl.current.to(
			ref.current.position,
			{
				x: 20,
				y: 0,
				z: PLANE_ELEVATION + 5,
				duration: 1,
				ease: 'none',
			},
			6
		);
		tl.current.to(
			ref.current.scale,
			{
				x: PLANE_SCALE * 2,
				y: PLANE_SCALE * 2,
				z: PLANE_SCALE * 2,
				duration: 1,
				ease: 'none',
			},
			6
		);		


	}, []);

	useFrame(() => {
		console.log(scene);
		tl.current.seek(scroll.offset * tl.current.duration());
	});

	console.log(nodes);
	console.log(materials);
	return (
		//initial condition
		<group
			{...props}
			dispose={null}
			ref={ref}
			position={[-20, 0, PLANE_ELEVATION]}
			scale={[PLANE_SCALE * 2, PLANE_SCALE * 2, PLANE_SCALE * 2]}
			rotation={[
				(Math.PI / 180) * 90,
				(Math.PI / 180) * 90,
				(Math.PI / 180) * 0,
			]}
		>
			<mesh
				geometry={nodes.polySurface3_lambert2_0.geometry}
				material={materials.lambert2}
			/>
			<mesh
				geometry={nodes.polySurface3_lambert3_0.geometry}
				material={materials.lambert3}
			/>
			<mesh
				geometry={nodes.polySurface3_lam_balck_engine_0.geometry}
				material={materials.lam_balck_engine}
			/>
			<mesh
				geometry={nodes.polySurface2_T_lam_plane_windows_0.geometry}
				material={materials.T_lam_plane_windows}
			/>
			<mesh
				geometry={nodes.polySurface2_lambert3_0.geometry}
				material={materials.lambert3}
			/>
		</group>
	);
}

useGLTF.preload('./models/airplane.gltf');
