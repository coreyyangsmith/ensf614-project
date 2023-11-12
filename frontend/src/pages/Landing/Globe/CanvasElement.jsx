//-------------------------------------------------------//
//  File Name: CanvasElement.jsx
//  Description: RTF Canvas Renderer Base Component
//
//  Requirements:
//      - Landing.jsx
//
//  Renders:
//      - Three.JS Scene
//
// Created By: Corey Yang-Smith
// Date: November 11th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React, { Suspense } from 'react';

// React Three Fiber
import { Canvas } from '@react-three/fiber';

// My Components
import Scene from './Scene';

// Utilities
import {
	CAMERA_DISTANCE
} from './config.js';

//  MAIN FUNCTION
//-------------------------------------------------------//
const CanvasElement = (props) => {
	return (
		<div style={{ width: '500px', height: '500px' }}>
			<Canvas
				camera={{ fov: 60, near: 0.1, far: 5000, position: [0, 0, CAMERA_DISTANCE] }}
				style={{ position: 'absolute' }}
				resize={{ scroll: false, debounce: 200 }}
			>
				<Suspense>

					<Scene data={props.data} toggle={props.toggle}/>
				</Suspense>
			</Canvas>
		</div>
	);
};

//  EXPORTS
//-------------------------------------------------------//
export default CanvasElement;
