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
import EarthAnimated from './EarthAnimated';
import Stars from '../Galaxy/Stars';
import Plane from '../Plane/Plane';

//  MAIN FUNCTION
//-------------------------------------------------------//
const Scene = (props) => {
	


	if (props.data.length == 0) {
		return <Suspense></Suspense>;
	}

	// Once Active!
	if (props.toggle)
		return (
			<>
				<EarthAnimated
					data={props.data}
					toggle={props.toggle}
					toObj={props.toObj}
					fromObj={props.fromObj}
				/>
				{/* <Plane toggle={props.toggle} /> */}
			</>
		);

	// Waiting for Input
	return (
		<>
			<Earth
				data={props.data}
				toggle={props.toggle}
			/>
			<Stars />
		</>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default Scene;
