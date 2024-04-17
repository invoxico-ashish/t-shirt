import React, { useRef } from 'react'
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";

import state from '../store';

const CameraRig = ({ children }) => {
    const snap = useSnapshot(state);
    const group = useRef();

    useFrame((state, delta) => {
        const isBreakPoint = window.innerWidth <= 1260;
        const isMobile = window.innerWidth <= 600;
        // set the initial position of model 
        let targetPostion = [-0.4, 0, 2]
        if (snap.intro) {
            if (isBreakPoint) targetPostion = [0, 0, 2];
            if (isMobile) targetPostion = [0, 0.2, 2.5];
        } else {
            if (isMobile) targetPostion = [0, 0, 2.5]
            else targetPostion = [0, 0, 2]
        }
        // set model camera postion 
        easing.damp3(state.camera.position, targetPostion, 0.25, delta)
        // set model rotation smoothly
        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 10, -state.pointer.x / 5, 0],
            0.25,
            delta
        )
    });
    return (
        <group ref={group}>
            {children}
        </group>
    )
};

export default CameraRig