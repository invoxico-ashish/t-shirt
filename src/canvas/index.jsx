import React from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment, Center, PositionPoint } from "@react-three/drei";

import Shirt from "./Shirt";
import CameraRig from "./CameraRig";
import Backdrops from "./Backdrops";

const CanvasModel = () => {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 0], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
            className="w-full max-w-full h-full transition-all ease-in"
            style={{ position: 'absolute', top: 0, left: 0 }}
        >
            <ambientLight intensity={0.5} />
            <Environment preset='city' />
            <CameraRig>
                <Backdrops />
                <Center>
                    <Shirt />
                </Center>
            </CameraRig>
        </Canvas>
    )
};

export default CanvasModel;