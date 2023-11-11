//-------------------------------------------------------//
//  File Name: Scene.jsx
//  Description: RTF Base Scene
//
//  Requirements:
//      - CanvasElement.jsx
//
//  Renders:
//      - Three.JS Scene
//
// Created By: Corey Yang-Smith
// Date: November 11th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//
import React, { Suspense } from 'react';

// My Components
import Earth from './Earth';
//import { OrbitControls } from '@react-three/drei';

//  CONSTANTS
//-------------------------------------------------------//
const ORBIT_ROTATION = false;

//  MAIN FUNCTION
//-------------------------------------------------------//
const Scene = (props) => {
	if (props.data.length == 0) {
		return <Suspense></Suspense>;
	}

	return (
		<>
			<Earth data={props.data} />
			{/* <Environment
				files="src/assets/galaxy.hdr"
				background
				blur={0.03}
			/> */}
		</>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default Scene;
