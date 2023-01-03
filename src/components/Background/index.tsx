/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

import * as random from 'maath/random';

export const BackgroundComponent: React.FC = () => {
    const ref = useRef<THREE.Points>(null);
    const [sphere] = useState(
        () => new Float32Array(random.inSphere(new Float32Array(5000), { radius: 2.5 }))
    );
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMouseX(event.clientX);
            setMouseY(event.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 50;
            ref.current.rotation.y -= delta / 40;
            ref.current.position.x = mouseX / window.innerWidth / -20;
            ref.current.position.y = mouseY / window.innerHeight / -20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#1ad3e0"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};
