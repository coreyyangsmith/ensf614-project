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
// React Imports
import React, { Suspense } from 'react';

// My Components
import Earth from './Earth';
import Stars from '../Galaxy/Stars';
import Plane from '../Plane/Plane';

//  MAIN FUNCTION
//-------------------------------------------------------//
const Scene = (props) => {

	if (props.data.length == 0) {
		return <Suspense></Suspense>;
	}

	return (
		<>
			<Earth data={props.data} toggle={props.toggle}/>
			<Stars/>
			
			<Plane toggle={props.toggle}/>
			
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
