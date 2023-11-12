import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Stars } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Plane() {
	const gltf = useLoader(GLTFLoader, '/airplane.gltf');
	return <primitive object={gltf.scene}></primitive>
}
