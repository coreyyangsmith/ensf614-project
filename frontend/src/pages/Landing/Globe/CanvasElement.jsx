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



//  MAIN FUNCTION
//-------------------------------------------------------//
const CanvasElement = (props) => {
	return (
		<div style={{ width: '500px', height: '500px' }}>
			<Suspense fallback={<h1>Loading profile...</h1>}>
				<Canvas
					camera={{ fov: 90, near: 0.1, far: 5000, position: [0, 0, 200] }}
					style={{ position: 'absolute' }}
					resize={{ scroll: false, debounce: 1000 }}
				>

					<Scene data={props.data} />
				</Canvas>
			</Suspense>
		</div>
	);
};

//  EXPORTS
//-------------------------------------------------------//
export default CanvasElement;
