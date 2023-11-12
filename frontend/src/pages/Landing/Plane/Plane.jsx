import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import { Stars } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useThree } from '@react-three/fiber';

import gsap from 'gsap';

export default function Plane(props) {
	const gltf = useLoader(GLTFLoader, '/airplane.gltf');
    const { scene } = useThree();

    useFrame(() => {
        if (props.toggle) {
            console.log("plane flying");

			gsap.to(scene.getObjectByName("Sketchfab_Scene").rotation, {
				duration: 4,
				x: .1,
			})
        }
    })

    if (!gltf)
        return
    
    return <primitive object={gltf.scene}></primitive>
}
